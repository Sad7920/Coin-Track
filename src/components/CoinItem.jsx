import React from 'react'

const CoinItem = (props) => {
    const percent = props.coins.price_change_percentage_24h.toFixed(2);
    return (
        <div className='flex justify-around text-lg py-2 border-blue-300 text-gray-700 border rounded-lg my-3 m-auto hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-md hover:shadow-blue-200'>
            <p>{props.coins.market_cap_rank}</p>
            <div className='flex'>
                <img className='h-8 mr-2' src={props.coins.image} alt="" />
                <p className=' uppercase'>{props.coins.symbol}</p>
            </div>
            <p className='block'>&#8377;{props.coins.current_price.toLocaleString()}</p>
            <p className={(percent > 0) ? 'text-green-500' : 'text-red-500'}>{percent}%</p>
            <p className='hidden md:flex'>&#8377;{props.coins.total_volume.toLocaleString()}</p>
            <p className='hidden md:flex'>&#8377;{props.coins.market_cap.toLocaleString()}</p>
        </div>
    )
}

export default CoinItem