import React, { useState } from 'react'
import { VscChromeClose } from "react-icons/vsc";



import { imageFiles, getRandomImage } from '../assets/avatars.ts';



const ModalUSer = ({closeModal}) => {
    const [currentImage, setCurrentImage] = useState(getRandomImage()); // Initialize state with a random image

    // Function to handle click events
    const handleClick = () => {
        const newImage = getRandomImage(); // Get a new random image
        setCurrentImage(newImage); // Update the state with the new image
        console.log("helooo", currentImage)
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '', // Clear error for the corresponding field
        });

    };

    const validate = (data) => {
        const errors = {};
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errors.email = 'Invalid email address';
        }
        
        return errors;
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate(formData);
        if (Object.keys(errors).length === 0) {
            // Form submission logic here
            try {
                const postData = { ...formData, currentImage };
                const response = await fetch('https://dataverse-23a19-default-rtdb.firebaseio.com/userDataRecords.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                });
                const res = await response.json();
                console.log("res" , res)
                if (response) {
                    alert("Message sent successfully!");
                } else {
                    alert("Error occurred, message not sent");
                }
            } catch (error) {
                alert("Error occurred, message not sent");
            }
         
            setFormData({
                name: '',
                email: '',
            });

        } else {
            setErrors(errors);
        }

       

    };


    return (
        <div className='text-white top-0 left-0 fixed h-full w-full text-[20px] flex flex-col items-center justify-center' >
            <button onClick={closeModal} ><VscChromeClose /></button>

            <div className=" p-5 flex flex-col gap-5  ">
                <div className="p-[10px] border-[1px] border-white rounded-full">
                    <div className="w-[100px] md:w-[150px] rounded-full  p-5 bg-violet-300">
                        <img src={currentImage} alt="" className='w-full h-full  bg-cover rounded-full' />
                    </div>
                </div>
                <button onClick={handleClick} >Get Avatar</button>
            </div>

            <form onSubmit={handleSubmit}
                className="flex flex-col gap-5"
            >


                <div className="flex flex-col gap-5 sm:gap-5 md:gap-5">
                    <div className="flex flex-col leading-[20px] text-black "  >
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="px-[25px] py-[5px] xs:w-[400px] xs:py-[10px] sm:w-[450px] md:w-[450px] md:py-[8px] lg:w-[450px] xl:w-[500px] xl:py-4 boder-[#D9D9D9] bg-white border-[1px] rounded-[8px] placeholder:text-[#8D8D8D] poppins-regular text-[14px] "
                        />
                        {errors.name && <span className="text-red-500 tracking-tight text-[12px]  poppins-regular px-[8px]" > *{errors.name}</span>}
                    </div>

                    <div className="flex flex-col leading-[20px] text-black " >
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="px-[25px] py-[5px] xs:w-[400px] xs:py-[10px] sm:w-[450px] md:w-[450px] md:py-[8px] lg:w-[450px] xl:w-[500px] xl:py-4 boder-[#D9D9D9] border-[1px] rounded-[8px] placeholder:text-[#8D8D8D] poppins-regular text-[14px] "
                        />
                        {errors.email && <span className="text-red-500 tracking-tight text-[12px] poppins-regular px-[8px]" >{errors.email}</span>}
                    </div>

                </div>

                <button type="submit"
                    className=" px-[25px] py-[5px] bg-yellow-600 rounded-[8px] xs:w-[400px] xs:py-[10px] sm:w-[450px] md:w-[450px] lg:font-bold  lg:tracking-wider xl:w-[250px]  2xl:w-[500px]   lg:w-[450px] xl:h-[50px] 2xl:h-[50px] lg:h-[49px] md:h-[42px]  md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[18px]  text-white scope-one-regular tracking-wide text-center flex  items-center justify-center"

                >Save</button>
            </form>
        </div>
    )
}


export default ModalUSer


