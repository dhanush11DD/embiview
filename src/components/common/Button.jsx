import { Icon } from '@iconify/react'
import React from 'react'

function Button({children , className}) {
  return (
    <button className="btn btn-hover text-white btn-outline flex gap-3 group">
    <p className="">{children}</p>
    <Icon
      icon="heroicons:arrow-up-16-solid"
      className="text-lg rotate-45 group-hover:rotate-90 transition-all duration-75"
    />
  </button>
  )
}

export default Button
