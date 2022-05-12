import React from 'react'
import { Link } from 'react-router-dom'
import Coin from '../routes/Coin'
import CoinItem from './CoinItem'

const Coins = (props) => {
    return (
        <div className='w-full px-4 py-32 text-sm sm:text-lg '>
            <div className='max-w-5xl px-4 mx-auto text-gray-900 border border-blue-200 shadow-2xl rounded-xl shadow-blue-300'>
                <div className='flex justify-around sm:justify-between font-bold  sm:pl-8 sm:pr-[4.5rem] pt-4 pb-2 '>
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hidden md:flex'>Volume</p>
                    <p className='hidden md:flex'>Market Capital</p>
                </div>

                {props.coins.map((coins) => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}

export default Coins