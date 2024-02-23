import React from 'react'

const Peragraph = ({pera, style}) => {
  return (
    <p className={`${style} ? ${style} : 'text-heading2 font-normal text-base'`}>{pera}</p>
  )
}

export default Peragraph