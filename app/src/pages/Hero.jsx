import React, { useState } from 'react'
import Nav from '../components/Nav'
import Button from '../components/Button'
import NoteList from '../assets/noteList.webp'
import record from '../assets/record.webp'
import user from '../assets/user.webp'
import notePad from '../assets/notepad.webp'
import ModalUSer from '../components/ModalUSer'

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal open/close

    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('modal-open'); // Add class to body to apply blur effect
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('modal-open'); // Remove class from body
    };

    const handleSave = (userData) => {
        // Implement saving userData to the database
        console.log(userData);
        // Provide feedback to the user on the success or failure status
        // For example, display a toast notification
    };
    return (
        // <>

        //     <div className={`flex flex-col justify-between items-center px-5 pb-10 md:justify-center ${isModalOpen ? 'blur-sm' : ''}`} >
        //         <Nav />
        //         <div className="flex flex-col justify-between items-center gap-16      md:flex-row ">
        //             <div className="text-whit flex flex-col gap-5 sm:items-center md:items-start">
        //                 <h1 className='flex flex-col text-[30px] leading-[30px] text-white sm:text-center sm:text-[35px] sm:leading-[35px]      md:text-[25px] md:text-start  md:leading-[22px]'   >Remember <span className='text-[20px] md:text-[25px] md:text-start  md:leading-[22px] '>take note now</span></h1>
        //                 <h1 className='text-[15px] text-gray-400 leading-5 sm:w-[500px] md:w-full '>Now it's is to access your notes . take notes by voice or typing with more accessible and modern design</h1>
        //                 <div className=" hidden md:flex md:flex-row gap-5 ">
        //                     <Button onClick={openModal} bgColor=" w-[130px] h-[45px] bg-yellow-600 text-white rounded-[5px] text-[14px] text-xlntxt font-medium  md:w-[100px] " >Join Now</Button>
        //                     <Button bgColor="w-[130px] h-[45px] rounded-[5px] border-[1px]  border-gray-500  text-[14px] text-white font-medium bg-gradient-to-r from-gray-800 to-gray-700    md:w-[100px]" >See Users</Button>
        //                 </div>
        //             </div>
        //             {/* typing */}
        //             <div className="">
        //                 <div className="flex-col flex gap-5">
        //                     <img src={notePad} alt="" />
        //                     <img src={NoteList} alt="" />
        //                 </div>
        //             </div>
        //             {/* voice note */}
        //             <div className="text-white flex flex-col justify-center items-center gap-10      md:">
        //                 <img src={user} alt="" className='md:-[100px]' />
        //                 <img src={record} alt="" className='w-[200px] md:w-[100px]' />

        //             </div>
        //         </div>
        //     </div>

        //     {/* Render modal conditionally */}
        //     {isModalOpen && <ModalUSer closeModal={closeModal} handleSave={handleSave} />}
        // </>
        <>
            <div className="md:h-screen md:w-screen ">

                <div className={`flex flex-col justify-between items-center px-5 pb-10 md:justify-between md:py-10 md:gap-[100px] md:px-24 xl:gap-40 xl:px-32 xl:justify-between ${isModalOpen ? 'blur-sm' : ''}`} >
                    <Nav />
                    <div className="flex flex-col justify-between items-center gap-16 md:flex-row md:gap-10  xl:w-full  2xl:gap-28  ">
                        <div className="text-whit flex flex-col gap-5 sm:items-center md:items-start xl:gap-10 xl:mt-10 ">
                            <h1 className='flex flex-col text-[30px] leading-[30px] text-white sm:text-center sm:text-[35px] sm:leading-[35px] md:text-[30px] md:text-start md:leading-[35px] xl:text-[40px] xl:leading-[40px] '>Remember <span className='text-[20px] md:text-[25px] md:text-start md:leading-[22px] xl:text-[40px] xl:leading-[70px]'>take note now</span></h1>
                            <h1 className='text-[15px] text-gray-400 leading-5 sm:w-[500px] md:w-full md:text-[13px] xl:text-[25px] xl:leading-[35px] 2xl:w-[500px]   '>Now it's is to access your notes . take notes by voice or typing with more accessible and modern design</h1>
                            <div className="hidden md:flex md:flex-row gap-5">
                                <Button onClick={openModal} bgColor="w-[130px] h-[45px] bg-yellow-600 text-white rounded-[5px] text-[14px] text-xlntxt font-medium md:w-[100px]">Join Now</Button>
                                <Button bgColor="w-[130px] h-[45px] rounded-[5px] border-[1px] border-gray-500 text-[14px] text-white font-medium bg-gradient-to-r from-gray-800 to-gray-700 md:w-[100px]">See Users</Button>
                            </div>
                        </div>
                        {/* typing */}
                        <div className="md:pb-[150px] ">
                            <div className="flex-col flex gap-5 xl:gap-14">
                                <img src={notePad} alt="" className=' md:w-[500px] ml-5 2xl:w-[600px] xl:ml-10' />
                                <img src={NoteList} alt="" className='xl:w-[800px]   ' />
                            </div>
                        </div>
                        {/* voice note */}
                        <div className="text-white flex flex-col justify-center items-center gap-10 md:gap-5 md:items-start  ">
                            <img src={user} alt="" className='md:w-[300px] md:ml-5l xl:w-[400px] xl:ml-10 2xl:ml-16  ' />
                            <img src={record} alt="" className='w-[200px] md:w-[200px] xl:w-[350px] ' />
                        </div>
                    </div>

                </div>
                {/* Render modal conditionally */}
                {isModalOpen && <ModalUSer closeModal={closeModal} handleSave={handleSave} />}
            </div>


        </>

    )
}

export default Hero