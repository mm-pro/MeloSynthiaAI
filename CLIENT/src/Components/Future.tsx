import React from 'react'
import { LinearGradient } from 'react-text-gradients'

export const Future = () => {
  return (
    <div>
        <div className='w-full mt-5 flex justify-center py-14 font-bold'>
            <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">FUTURE PLANS</h1>
            </LinearGradient>
        </div>
     
        <div className='w-full flex justify-center mb-14'>
            <ul style={{ listStyleType: 'disc' }} className='text-white px-8 py-4 text-md md:lg lg:text-xl xl:text-2xl'>
                <li className='mb-11'>Subsciption made for creating a song snipper</li>
                <li className='mb-11'>Can add vocals to the generated music</li>
                <li>.  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .</li>
            </ul>
        </div>
    </div>
  )
}
