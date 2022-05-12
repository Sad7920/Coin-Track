import React from 'react'
import { SiWebmoney } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Link to="/" className='fixed w-full h-16 pt-4 bg-white border-b'>
            <div className='text-4xl text-[#3eadcf] flex w-full mx-auto max-w-6xl justify-center align-middle'>
                <SiWebmoney />
                <h1 className='font-bold px-2 bg-gradient-to-r from-[#3eadcf] to-[#abe9cd] text-gradient'>Coin Track</h1>
            </div>
        </Link>
    )
}

export default Navbar