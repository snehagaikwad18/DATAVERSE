import React from 'react';
import { NavLink } from 'react-router-dom';

function Modal({ isOpen, toggleModal }) {
    return (
        <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`} style={{ zIndex: 999 }}>
            <div className="bg-black bg-opacity-50 fixed inset-0"></div>
            <div className="bg-gray-200 p-5 rounded-lg flex flex-col justify-center items-center z-50">
                <ul className="flex flex-col items-center gap-1 px-10">
                    <li>What's New</li>
                    <li>Download</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <button onClick={toggleModal} className="mt-5 bg-red-500 text-white px-3 py-2 rounded-md">Close</button>
            </div>
        </div>
    );
}

export default Modal;
