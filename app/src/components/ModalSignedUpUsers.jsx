import React, { useEffect, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';

const ModalSignedUpUsers = ({ showAllUser }) => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        // Fetch data from Firebase when component mounts
        fetchDataFromFirebase();
    }, []);

    const fetchDataFromFirebase = async () => {
        try {
            const response = await fetch('https://dataverse-23a19-default-rtdb.firebaseio.com/userDataRecords.json');
            const data = await response.json();
            if (response.ok) {
                // Extract data from response object and store it in state
                const dataArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                setAllData(dataArray);

            } else {
                console.error('Error fetching data from Firebase:', data);
            }
        } catch (error) {
            console.error('Error fetching data from Firebase:', error);
        }
    };

    const renderUserRow = (user) => (
        <tr key={user.id} className='px-2'>
            <td className="p-2">
                <div className="p-5 rounded-full w-[80px] h-[80px] ">
                    <img src={user.currentImage} alt="" className="bg-cover" />
                </div>
            </td>
            <td className="p-2 text-[10px] xs:text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] ">{user.name}</td>
            <td className="p-2 text-[10px] xs:text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] ">{user.email}</td>
        </tr>
    );

    return (
        <div className="py-5 text-white top-0 left-0 fixed h-full w-full flex flex-col gap-10 bg-black">           
            <h2 className="text-2xl font-bold text-center">ALL USERS</h2>

            <table className="border-collapse w-full">
                <tbody >
                    {allData.slice(0, 5).map(renderUserRow)}
                    {allData.length > 5 && (
                        <tr>
                            <td colSpan="3" className="p-2 px-5 text-[13px] sm:text-[15px] text-end text-blue-500 underline cursor-pointer">{allData.length - 5} more users have signed up </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ModalSignedUpUsers;
