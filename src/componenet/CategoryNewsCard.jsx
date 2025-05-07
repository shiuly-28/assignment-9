import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from './Navbar';

const CategoryNewsCard = ({ category }) => {
    const [setEmail] = useState('');
    
    // console.log(category)
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("✅ Seat reserved successfully!");
        setEmail('');
        //  console.log('click')
    }
    return (
        
        <div className='max-w-11/12 mx-auto h-[350px] px-80'>
            <Navbar></Navbar>
            <div className="card lg:card-side bg-base-100 w-full mx-auto shadow-lg shadow-fuchsia-500/80 mt-8 p-5 mb-8">
                <figure>
                    <img src={category.thumbnail} alt={category.name} className="w-full h-fit rounded-xl" />
                </figure>
                <div className="card-body">
                    <div className='mt-2 text-sm'>
                        <div className="badge badge-secondary mb-2">{category.category}</div>
                        <h2 className="card-title text-xl font-bold mb-2">{category.name}</h2>
                        <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                   </div>

                    <div className="mt-2 text-sm gap-2">
                        <p><span className="font-medium">📅 Date:</span> {category.date}</p>
                        <p><span className="font-medium">📍 Location:</span> {category.location}</p>
                        <p><span className="font-medium">💳 Entry Fee:</span> {category.entry_fee}</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                       
                            <input name='name' className='input input-bordered gap-5' type="name" placeholder='Your Name' />
                            <br />
                            <br />
                            <input name="email" className='input input-bordered ' type="email" id="" placeholder='Your email' />
                        
                        <div className="card-actions mt-4">
                            <button type='submit' className="btn btn-outline btn-secondary">Reserve Seat</button>
                        </div>
                    </form>
                 </div>
            </div>
        </div>
    );
};

export default CategoryNewsCard;