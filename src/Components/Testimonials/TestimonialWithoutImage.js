
import React from 'react'
import { BsSlashLg } from "react-icons/bs";

export const TestimonialWithoutImage = ({
  logoUrl = "assets/Logo.svg",
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.",
  name = "May Andersons",
  job = "Workcation, CTO",
  children
}) => {
  return (
    <div className='TestimonialWithoutImage'>
      {children ? children
        : <>
          <div className='TestimonialWithoutImage__logo-container'>
            <img className='TestimonialWithoutImage__logo' src={logoUrl} alt="logo" />
          </div>
          <div className='TestimonialWithoutImage__content'>
            <p className='TestimonialWithoutImage__text'>{text}</p>

            <div className='TestimonialWithoutImage__person'>
              <span className='TestimonialWithoutImage__person-name'>{name}</span>
              <BsSlashLg className='TestimonialWithoutImage__divider'/>
              <span className='TestimonialWithoutImage__person-job'>{job}</span>
            </div>
          </div>
        </>
      }
    </div>
  )
}
