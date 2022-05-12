import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

const Coin = (props) => {

    const params = useParams();
    const [coin, setCoin] = useState([]);
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

    useEffect(() => {
        axios.get(url).then(response => {
            setCoin(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <div className='w-full px-4 py-24'>
            <div className='w-full max-w-3xl p-8 mx-auto text-center text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100'>
                <h1 className='text-4xl font-bold uppercase'>{coin.name}</h1>
            </div>
            <div className='w-full max-w-3xl p-4 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100'>
                <div className='flex justify-center px-8 mb-4 sm:justify-start '>
                    <h1 className=' text-sm bg-blue-500 w-fit p-[2px] px-2 rounded-md text-white shadow-lg shadow-blue-500'>Rank #{coin.market_cap_rank}</h1>
                </div>
                <div className='grid w-full gap-8 p-2 px-8 text-center sm:grid-cols-2'>
                    <div className='flex justify-center sm:justify-start'>
                        {coin.image ? <img src={coin.image.small} alt={coin.name} /> : null}
                        <p className='p-3 font-bold uppercase '>{coin.name}</p>
                        <p className='py-3 uppercase'>({coin.symbol}/INR)</p>
                    </div>
                    <div className='flex justify-center sm:justify-end'>
                        {coin.market_data ? <h1 className='text-5xl font-medium w-fit'>&#8377;{coin.market_data.current_price.inr.toLocaleString()}</h1> : null}
                    </div>
                </div>
            </div>
            <div className='w-full max-w-3xl px-2 py-6 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg sm:p-6 shadow-blue-100'>
                <table className='w-full text-sm md:text-lg'>
                    <thead className=''>
                        <tr className='justify-between bg-blue-100'>
                            <th>1h</th>
                            <th className='border-white border-x-4'>24h</th>
                            <th>7d</th>
                            <th className='border-white border-x-4'>14d</th>
                            <th>30d</th>
                            <th className='border-l-4 border-white'>1y</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center bg-blue-50'>
                            {coin.market_data ? <td>{coin.market_data.price_change_percentage_1h_in_currency.inr.toFixed(2)}%</td> : null}
                            {coin.market_data ? <td className='border-white border-x-4'>{coin.market_data.price_change_percentage_24h_in_currency.inr.toFixed(2)}%</td> : null}
                            {coin.market_data ? <td>{coin.market_data.price_change_percentage_7d_in_currency.inr.toFixed(2)}%</td> : null}
                            {coin.market_data ? <td className='border-white border-x-4'>{coin.market_data.price_change_percentage_14d_in_currency.inr.toFixed(2)}%</td> : null}
                            {coin.market_data ? <td>{coin.market_data.price_change_percentage_30d_in_currency.inr.toFixed(2)}%</td> : null}
                            {coin.market_data ? <td className='border-l-4 border-white'>{coin.market_data.price_change_percentage_1y_in_currency.inr.toFixed(2)}%</td> : null}
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='w-full max-w-3xl p-6 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    <div className='flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 '>
                        <h1 className='font-bold'>24 Hour high</h1>
                        {coin.market_data ? <div>&#8377;{coin.market_data.high_24h.inr.toLocaleString()}</div> : null}
                    </div>
                    <div className='flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 '>
                        <h1 className='font-bold'>24 Hour Low</h1>
                        {coin.market_data ? <div>&#8377;{coin.market_data.low_24h.inr.toLocaleString()}</div> : null}
                    </div>
                    <div className='flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 '>
                        <h1 className='font-bold'>Market Capital</h1>
                        {coin.market_data ? <div>&#8377;{coin.market_data.market_cap.usd.toLocaleString()}</div> : null}
                    </div>
                    <div className='flex justify-between p-2 m-2 border border-blue-200 rounded-md bg-blue-50 '>
                        <h1 className='font-bold'>Circulating Supply</h1>
                        {coin.market_data ? <div>{coin.market_data.circulating_supply.toLocaleString()}</div> : null}
                    </div>
                </div>
            </div>
            <div className='w-full max-w-3xl p-6 mx-auto mt-4 text-gray-700 border border-blue-200 rounded-lg shadow-lg shadow-blue-100'>
                <div>
                    <h1 className='pb-4 text-3xl font-bold'>About</h1>
                    <p className='w-full' dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(coin.description) ? coin.description.en : null
                    }}>

                    </p>

                </div>
            </div>
        </div>
    )
}

export default Coin