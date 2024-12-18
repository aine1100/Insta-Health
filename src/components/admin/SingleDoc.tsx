
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';import { DoctorService } from "./doctorsService"
export default function SingleDoc(){
    const { id } = useParams(); // Get the ID from URL
    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        // Fetch the specific doctor data based on ID
        DoctorService.getDoctor().then((doctors) => {
            const selectedDoctor = doctors.find((doc) => doc.id === parseInt(id));
            setDoctor(selectedDoctor); // Set the doctor details
        });
    }, [id]);

    if (!doctor) {
        return <div>Loading...</div>; // Show loading until the data is available
    }

    return (
        <div className="doctor-detail-container m-5 flex flex-col gap-10">
            <div className="doctor-detail-card p-5 shadow-md shadow-gray-100 rounded-lg flex gap-10 items-center ">
                <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-[300px] h-[300px] rounded-md object-cover "
                />
               <div className='flex flex-col gap-2 items-center justify-center'>
               <h1 className='text-gray-600 font-bold text-2xl'>{doctor.name}</h1>
               <p className='text-gray-500'>{doctor.Department}</p>
               

               </div>
               
            </div>
        </div>
    )
}