import React from 'react'
import { vision } from '../../constants/automation.jsx'
import { Icon } from '@iconify/react'
import { smartHome, smartHome2 } from '../../assets/automation/index.js'

function VisionSection() {
  return (
    <section className='container-fluid py-24 '>
        <div className="container flex w-full gap-16">
            <div className="w-full lg:w-[60%] ">
                <div className="max-w-[80%] break-keep mb-10">
                    <p className="blue-heading">{vision.blueHead}</p>
                    <h2 className="heading-lg text-light-heading">{vision.heading}</h2>
                    <p className="content-2 text-light-text">{vision.content}</p>
                </div>
                <ul className="grid md:grid-cols-2 gap-8">
                    {
                      vision.listContent.map((item, index) => (
                        <li className="flex items-center gap-4" key={index}>
                            <Icon icon="teenyicons:tick-circle-solid" className='text-primary text-xl' />
                          <p className="content-2 text-light-text">{item}</p>
                        </li>
                      ))
                    }
                </ul>
            </div>
            <div className="w-full lg:w-[40%]">
              <div className="relative">
                    <div className="max-w-[400px] absolute top-0 left-0">
                      <img src={smartHome} alt="" className="" />
                    </div>
                    <div className="max-w-[250px] absolute top-64 -left-12">
                      <img src={smartHome2} alt="" className="" />
                    </div>
              </div>
            </div>
        </div>
      
    </section>
  )
}

export default VisionSection
