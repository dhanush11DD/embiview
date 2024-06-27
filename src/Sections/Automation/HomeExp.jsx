import React from 'react'
import { homeExp } from '../../constants/automation.jsx'
import { Icon } from '@iconify/react'

function HomeExp() {
  return (
    <section className="container-fluid py-24">
      <div className="container">
        <div className="mb-20">
            <p className="blue-heading mb-2">{homeExp.blueHead}</p>
            <h2 className="heading-lg text-light-heading">{homeExp.heading}</h2>
        </div>
        <div className="grid grid-cols-3 gap-20">
            {
                homeExp.listContent.map((item, index) => (
                    <div key={index} className="flex flex-col items-start">
                        <div className="bg-primary p-3 mb-3 rounded-lg flex items-center text-white text-4xl">
                            {
                              item.icon
                            }
                        </div>
                        <div className="">
                            <h3 className="heading-sm">{item.title}</h3>
                            <p className="text-light-text content-1">{item.content}</p>
                        </div>

                    </div>
                ))
            }
        </div>
      </div>
    </section>
  )
}

export default HomeExp
