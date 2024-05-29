import React from 'react'
import hero from '../assets/hero.png'
export const Header = () => {
  return (
      <div className='text-center relative text-white'>
          <img src={hero} alt="foto hero de fondo" className='w-max-full ' />
          <h1 className='text-3xl absolute top-10 left-10 '>Gabriel</h1>
          <h2 className='text-2xl absolute m-2 top-16 left-10'>Front End Developer</h2>

      </div>
  )
}
