import React from 'react'
import { technology } from '../../constants/automation.jsx'
import { technologyImg } from '../../assets/automation/index.js'
import { Icon } from '@iconify/react'

function TechnologySection() {
  return (
    <section className="container-fluid  py-24">
        <div className="container flex flex-col lg:flex-row gap-14 justify-between">
            <div className="flex-1">
                <div className="mb-11">
                    <p className="blue-heading">{technology.blueHead}</p>
                    <h2 className="heading-lg text-light-heading">{technology.heading}</h2>
                </div>
                <div className="flex flex-col gap-5">
                    {
                        technology.listContent.map((item, index) => (
                            <div className="px-4 py-5 bg-[#8AAAD11A] flex items-center rounded-xl gap-8" key={index}>
                                <div className="text-primary text-4xl">
                                    {
                                        item.icon
                                    }
                                </div>
                                <div className="">
                                    <h3 className="heading-sm">{item.title}</h3>
                                    <p className="content-2">{item.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex-1">
                <div className="max-w-[600px] self-end">
                <img src={technologyImg} alt="" className="" /> 
                </div>    
            </div>

        </div>
      
    </section>
  )
}

export default TechnologySection
