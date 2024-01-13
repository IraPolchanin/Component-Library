import React from 'react'
import { Toast } from './Toast';
import { FaTriangleExclamation } from "react-icons/fa6";
import { GoXCircleFill } from "react-icons/go";

export const ToastsList = () => {
  return (
    <section className='ToastsList'>
      <h2 className='ToastsList__title'>Toasts</h2>
      <h3 className='ToastsList__subtitle'>Click the button below 👇🏻 to display a toast popup!</h3>
      <div className='ToastsList__container'>
        <Toast />
        <Toast title="Warning" icon={<FaTriangleExclamation />} text="A network error was detected" color="yellow" />
        
        <Toast color="red" title="Error">
          <div className="Toast__icon">
            <GoXCircleFill />
          </div>
          <div className='Toast__content'>
            <h5 className='Toast__title'>Error</h5>
            <p className='Toast__text'>Please re-save your work again</p>
          </div>
        </Toast>
        
        <Toast status="information" />
      </div>
    </section>
  )
}
