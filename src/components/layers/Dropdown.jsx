import React from 'react'

const Dropdown = ({children, className, title, onClick,dropRef}) => {
  return (
    <div className={className} onClick={onClick} ref={dropRef}>
        <p>{title}</p>
        {children}
        </div>
  )
}

export default Dropdown