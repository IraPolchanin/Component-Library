import React from 'react'
import { Testimonial } from './Testimonial';
import { VscQuote } from "react-icons/vsc";
import { BsSlashLg } from "react-icons/bs";
import { TestimonialWithoutImage } from './TestimonialWithoutImage';

export const TestimonialsList = () => {
  return (
    <section className='TestimonialsList'>
      <h2 className='TestimonialsList__title'>Testimonial</h2>
      <div className='TestimonialsList__container'>
        <Testimonial />
        <Testimonial imgUrl="assets/cat-king.jpg" text="Ragdoll cat king wearing a golden crown, intricate, elegant" name="Ragdoll Cat" job="Work, Hard" />
        <Testimonial>
          <div className='Testimonial__img-container'>
            <img
              className='Testimonial__img'
              src="assets/testimonial-default-Image.png"
              alt="default"
            />
          </div>
          <div className='Testimonial__content'>
            <VscQuote className='Testimonial__icon' />
            <p className='Testimonial__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</p>

            <div className='Testimonial__person'>
              <p className='Testimonial__person-name'>May Andersons</p>
              <p className='Testimonial__person-job'>Workcation, CTO</p>
            </div>
          </div>
        </Testimonial>
        {/* <Testimonial>
          <div className='Testimonial__img-container'>
            <img
              className='Testimonial__img'
              src="assets/putin-vampire.jpg"
              alt="putin-vampire"
            />
          </div>
          <div className='Testimonial__content'>
            <VscQuote className='Testimonial__icon' />
            <p className='Testimonial__text'>Russian Bloodshed in Ukraine.</p>

            <div className='Testimonial__person'>
              <p className='Testimonial__person-name'>Bloodymir Putin</p>
              <p className='Testimonial__person-job'>king of terrorist state, moscowia</p>
            </div>
          </div>
        </Testimonial> */}

        <TestimonialWithoutImage />
        <TestimonialWithoutImage logoUrl="assets/logo-putin.jpg" text="Russian Bloodshed in Ukraine." name="Bloodymir Putin" job="king of terrorist state, moscowia" />
        <TestimonialWithoutImage>
          <div className='TestimonialWithoutImage__logo-container'>
            <img className='TestimonialWithoutImage__logo' src="assets/logo-cat.png" alt="logo" />
          </div>
          <div className='TestimonialWithoutImage__content'>
            <p className='TestimonialWithoutImage__text'>Ragdoll cat king wearing a golden crown, intricate, elegant</p>

            <div className='TestimonialWithoutImage__person'>
              <span className='TestimonialWithoutImage__person-name'>Ragdoll Cat</span>
              <BsSlashLg className='TestimonialWithoutImage__divider' />
              <span className='TestimonialWithoutImage__person-job'>Work, Hard</span>
            </div>
          </div>
        </TestimonialWithoutImage>
      </div>
    </section>
  )
}
