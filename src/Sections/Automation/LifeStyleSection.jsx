import React from 'react'
import { lifeStyle } from '../../constants/automation.jsx'
import { Icon } from '@iconify/react'

function LifeStyleSection() {
  return (
    <section className="container-fluid bg-secondary py-24">
        <div className="container">
            <div className="text-center mb-32">
                <p className="blue-heading mb-3">{lifeStyle.blueHead}</p>
                <h2 className="heading-lg text-white">{lifeStyle.heading}</h2>
            </div>
            <div className="grid grid-cols-5 gap-x-14 gap-y-8">
                {lifeStyle.icons.map((icon, index) => (
                    <div className="col-span-1 card-flip aspect-square bg-radial-gradient flex justify-center items-center border-2 border-[#2E3B4C] rounded-xl" key={index}>
                        <div className="icon-box gap-8 flex flex-col justify-center items-center">
                            {
                                icon.icon 
                            }
                            <p className="text-default text-white">{icon.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      
    </section>
  )
}

export default LifeStyleSection
