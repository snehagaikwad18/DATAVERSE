import React, { useState } from 'react'
import catAvatar from '../assets/cat-avatar.png'


const ModalUSer = () => {

    
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
        if (!/^\d{10}$/.test(data.phone)) {
            errors.phone = 'Phone number must be 10 digits';
        }
        return errors;
    };

   

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate(formData);
        if (Object.keys(errors).length === 0) {
            // Form submission logic here
            try {
                const response = await fetch('http://localhost:8080/contacts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                const res = await response.json();
                if (response.ok) {
                    alert("Message sent successfully!");
                } else {
                    alert("Error occurred, message not sent");
                }
            } catch (error) {
                alert("Error occurred, message not sent");
            }
            // console.log('Form submitted:', formData);
            // alert("Your information has sent successfully");
            setFormData({
                name: '',
                email: '',
            });

        } else {
            setErrors(errors);
        }

        // Define an array of URLs for your images
        // / Use require.context to dynamically import all images from a folder

    };


    return (
        <div className='text-white top-0 left-0 fixed h-full w-full text-[20px] flex items-center justify-center' >
            
            <form onSubmit={handleSubmit}
                className="flex flex-col gap-2"
            >
                <div className="bg-violet-500">
                    <img src={catAvatar} alt="" />
                    <button >avatar</button>
                </div>

                <div className="flex flex-col gap-5 sm:gap-6 md:gap-[10px]">
                    <div className="flex flex-col leading-[20px] text-black "  >
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="px-[25px] py-[5px] xs:w-[300px] xs:py-[10px] sm:w-[350px] md:w-[338px] md:py-[8px] lg:w-[400px] xl:w-[500px] xl:py-4 boder-[#D9D9D9] bg-white border-[1px] rounded-[8px] placeholder:text-[#8D8D8D] poppins-regular text-[14px] "
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
                            className="px-[25px] py-[5px] xs:w-[300px] xs:py-[10px] sm:w-[350px] md:w-[338px] md:py-[8px] lg:w-[400px] xl:w-[500px] xl:py-4 boder-[#D9D9D9] border-[1px] rounded-[8px] placeholder:text-[#8D8D8D] poppins-regular text-[14px] "
                        />
                        {errors.email && <span className="text-red-500 tracking-tight text-[12px] poppins-regular px-[8px]" >{errors.email}</span>}
                    </div>

                </div>

                <button type="submit"
                    className=" px-[25px] py-[5px] rounded-[8px] xs:w-[300px] xs:py-[10px] sm:w-[350px]  lg:font-bold  lg:tracking-wider xl:w-[250px]  2xl:w-[160px]  md:w-[125px] lg:w-[156px] xl:h-[50px] 2xl:h-[50px] lg:h-[49px] md:h-[42px] bg-[#576250] md:text-[14px] lg:text-[15px] xl:text-[18px] 2xl:text-[18px]  text-white scope-one-regular tracking-wide text-center flex  items-center justify-center"

                >Save</button>
            </form>
        </div>
    )
}

const images = [
    '../assets/cat-avatar.png',
    '../assets/germ-avatar.png',
    'https://example.com/image3.jpg',
    // Add more image URLs as needed
];

export default ModalUSer


