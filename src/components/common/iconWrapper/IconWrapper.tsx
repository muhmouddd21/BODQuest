import React from 'react'


type TIconWrapper ={
    children: React.ReactNode;
}

const IconWrapper = ({ children }:TIconWrapper) => {
  return (
    <div className="d-flex align-items-center">{children}</div>
  )
}

export default IconWrapper
