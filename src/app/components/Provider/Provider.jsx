import React from 'react'
import { ToastContainer } from 'react-toastify'

const Provider = ({children}) => {
  return (
      <ToastContainer>
          {children}
    </ToastContainer>
  )
}

export default Provider