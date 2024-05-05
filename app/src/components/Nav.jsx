import React, { useState } from 'react'
import Button from './Button'
import { Link, NavLink } from 'react-router-dom'
import Modal from './Modal';

const Nav = ({handleSave , closeModal , setIsModalOpen , isModalOpen, openModal}) => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return (

        <>


            <div className="relative w-full text-white">
                <div className="p-7 md:py-2 flex flex-row items-center justify-between ">

                    <div className=" flex flex-row items-center justify-between w-full md:gap-1">
                        <div className="">
                            <h1 className='font-bold text-[20px] lg:text-[30px] '>Notake</h1>
                        </div>


                        {/* Conditionally render the modal based on isOpen */}
                        {isOpen && <Modal isOpen={isOpen} toggleModal={toggleModal} />}

                        {/* Conditionally render the navigation items based on screen size */}
                        <div className="">
                            <ul className="hidden md:flex md:flex-row md:items-center md:gap-2 md:text-[13px]  font-semibold   lg:text-[15px] lg:gap-10 ">
                                <li>What's New</li>
                                <li>Download</li>
                                <li>Pricing</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div className="md:flex md:flex-row gap-2 hidden">
                            <Button bgColor="w-[130px] h-[45px]  w-[100px] rounded-[5px] border-[1px]  border-gray-500  text-[14px] text-white font-medium bg-gradient-to-r from-gray-800 to-gray-700 " >Login</Button>
                            <Button onClick={openModal} bgColor=" w-[130px] h-[45px] w-[100px] bg-yellow-600 rounded-[5px] text-[14px] text-lgntxt font-medium " >Join Now</Button>
                        </div>

                    </div>

                    <div className="flex justify-between items-center">
                        <button onClick={toggleModal} className="block md:hidden">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                ) : (
                                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Nav