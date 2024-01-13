import React from 'react'
import { Tooltip } from './Tooltip';
import { RiHeartAddLine } from "react-icons/ri";
import { FaCookieBite } from "react-icons/fa";
import { MdOutlineReadMore } from "react-icons/md";

export const TooltipsList = () => {
  
  return (
    <section className='TooltipsList'>
      <h2 className='TooltipsList__title'>Tooltips</h2>
      <div className='TooltipsList__container'>
        <Tooltip />
        <Tooltip color="blue" />
        <Tooltip icon={<RiHeartAddLine />} color="red" title="Interested in an item?" text="Save it to a board to come back to it later" />
        <Tooltip icon={<FaCookieBite />} color='green'>
          <div className='Tooltip__content'>
            <h5 className='Tooltip__title'>This website use cookies.</h5>
            <h5 className='Tooltip__text'><a href="/">Learn more</a></h5>
          </div>
        </Tooltip>

        <Tooltip color='purple'>
          <div className='Tooltip__icon'>
            <MdOutlineReadMore />
          </div>
          <div className='Tooltip__content'>
            <h5 className='Tooltip__title'>Digging this post? We’ve got more!</h5>
            <h5 className='Tooltip__text'>Get bite-sized lessons, real-world examples, and ready-to-use product adoption templates.</h5>
          </div>
        </Tooltip>

        <Tooltip color='yellow'>
          <div className='Tooltip__content'>
            <h5 className='Tooltip__title'>You have one FREE delivery!</h5>
            <h5 className='Tooltip__text'>The first one is on us! Get what you need delivered today</h5>
            <button className='Tooltip__btn'>Learn More!</button>
          </div>
        </Tooltip>
      </div>
    </section>
  )
}

