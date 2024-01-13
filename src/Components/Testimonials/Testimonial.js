import React from 'react'
import { VscQuote } from "react-icons/vsc";

export const Testimonial = ({
  imgUrl = "assets/cat-default-testimonail.jpeg",
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.",
  name = "May Andersons",
  job = "Workcation, CTO",
  children
}) => {
  return (
    <div className='Testimonial'>
      {children ? children
        : <>
          <div className='Testimonial__img-container'>
            <img className='Testimonial__img' src={imgUrl} alt="testimonial-default" />
          </div>
          <div className='Testimonial__content'>
            <VscQuote className='Testimonial__icon' />
            <p className='Testimonial__text'>{text}</p>

            <div className='Testimonial__person'>
              <p className='Testimonial__person-name'>{name}</p>
              <p className='Testimonial__person-job'>{job}</p>
            </div>
          </div>
        </>
      }
    </div>
  )
}
