import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Button from '../components/Button'
import NoteList from '../assets/noteList.webp'
import record from '../assets/record.webp'
import user from '../assets/user.webp'
import notePad from '../assets/notepad.webp'
import ModalUSer from '../components/ModalUSer'
import ModalSignedUpUsers from '../components/ModalSignedUpUsers'
import { Link } from 'react-router-dom'

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('modal-open'); 
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

    const [signedUpUsers, setSignedUpUsers] = useState(false);

    const showAllUser = () => {
        setSignedUpUsers(prevState => !prevState);
    };


    return (

        <>
            <div className="md:h-screen md:w-screen bg-black  ">
                <div className={`flex flex-col justify-between items-center px-5 pb-10 md:justify-between md:py-10 md:gap-[100px] md:px-10 xl:gap-40 xl:px-32 xl:justify-between 2xl:justify-center 2xl:w-full ${isModalOpen ? 'blur-sm' : ''} `} >
                    <Nav signedUpUsers={signedUpUsers} setSignedUpUsers={setSignedUpUsers} openModal={openModal} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} closeModal={closeModal} handleSave={handleSave} />
                    <div className="flex flex-col justify-between items-center gap-16 md:flex-row md:gap-10  xl:w-full 2xl:gap-5  2xl:justify-center  px-5  ">
                        <div className="text-whit flex flex-col gap-5 sm:items-center md:items-start xl:gap-5 xl:mt-10 2xl:gap-5 ">
                            <h1 className='flex flex-col text-[30px] leading-[30px] text-white sm:text-center sm:text-[35px] sm:leading-[35px] md:text-[30px] md:text-start md:leading-[35px] xl:text-[30px] xl:leading-[30px] '>Remember <span className='text-[20px] md:text-[25px] md:text-start md:leading-[22px] xl:text-[30px] xl:leading-[40px]'>take note now</span></h1>
                            <h1 className='text-[15px] text-gray-400 leading-5 sm:w-[500px] md:w-full md:text-[13px] lg:w-[450px] xl:text-[18px] xl:leading-[35px] 2xl:text-[20px] '>Now it's is to access your notes . take notes by voice or typing with more accessible and modern design</h1>
                            <div className="flex flex-row md:flex md:flex-row gap-5">
                                <Button onClick={openModal} bgColor="w-[130px] h-[45px] bg-yellow-600 text-white rounded-[5px] text-[14px] text-xlntxt font-medium ">Join Now</Button>

                                <Link to="/user" >   
                                    <Button bgColor="w-[130px] h-[45px] rounded-[5px] border-[1px] border-gray-500 text-[14px] text-white font-medium bg-gradient-to-r from-gray-800 to-gray-700 ">See Users</Button>
                                </Link>
                            </div>
                        </div>
                        {/* typing */}
                        <div className="md:pb-[10px]  md:-mt-36 ">
                            <div className="flex-col flex gap-5 xl:gap-10 2xl:gap-5">
                                <img src={notePad} alt="" className=' md:w-[500px] lg:w-[400px] lg:mt-20 ml-5 xl:w-[350px] xl:ml-5 2xl:w-[400px] 2xl:mt-0' />
                                <img src={NoteList} alt="" className=' lg:w-[400px] xl:w-[350px] 2xl:w-[400px] ' />
                            </div>
                        </div>
                        {/* voice note */}
                        <div className="text-white flex flex-col justify-center items-center gap-10 md:gap-5 md:items-start xl:gap-10   2xl:gap-5 2xl:-mt-20 ">
                            <img src={user} alt="" className='md:w-[300px] md:ml-5l lg:w-[200px] xl:w-[120px] xl:ml-10 xl:mt-0 2xl:w-[200px] 2xl:ml-7 ' />
                            <img src={record} alt="" className='w-[200px] md:w-[200px] lg:w-[180px] xl:w-[120px]  2xl:w-[180px] ' />
                        </div>
                    </div>

                </div>

                {signedUpUsers && <ModalSignedUpUsers showAllUser={showAllUser} />}
                {isModalOpen && <ModalUSer closeModal={closeModal} handleSave={handleSave} openModal={openModal} showAllUser={showAllUser} />}
            </div>


        </>

    )
}

export default Hero