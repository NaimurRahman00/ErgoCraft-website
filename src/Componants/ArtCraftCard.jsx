import React from 'react';
import { Link } from 'react-router-dom';

const ArtCraftCard = ({item}) => {      

    return (
        <div>
            <Link to={`/viewAnotherCraft/${item._id}`} title='Click to view' className='cursor-pointer'>
                <div className='rounded-3xl overflow-hidden'>
                    <img className='size-[25rem] w-full' src={item.image} alt="" />
                </div>
                <div className='flex justify-between items-center my-4'>
                    <h2 className='text-black/90 font-semibold text-3xl'>{item.item_name}</h2>
                    <h2 className='text-black/90 font-semibold text-3xl'>$ {item.price}</h2>
                </div>
                <div className='flex justify-between items-center my-4'>
                    <h2  className='text-2xl font-semibold text-black/60'>Arc type</h2>
                    <h2 className='text-2xl font-semibold text-black/60'>In Stocks</h2>
                </div>
            </Link>
        </div>
    );
};

export default ArtCraftCard;