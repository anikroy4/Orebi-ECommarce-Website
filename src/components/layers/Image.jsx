import React from 'react'

const Image = ({className, imgsrc, alt}) => {
  return (
    <img className={className} src={imgsrc} alt={alt} />
  )
}

export default Image