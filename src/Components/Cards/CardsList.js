import React from 'react'
import { Card } from './Card'
import { FaCat } from "react-icons/fa";
import { PiButterflyFill } from "react-icons/pi";

export const CardsList = () => {
  return (
    <section className='CardsList'>
      <h2 className='BannersList__title'>cards</h2>
      <div className='CardsList__container'>
        <Card />

        <Card icon={<FaCat />} color="pink"/>
        <Card title="My amazing title" text="Something very important and interesting"/>

        <Card>
          <div className="Card__icon white">
            <PiButterflyFill />
          </div>
          <h4 className='Card__title'>Butterfly</h4>
          <p className='Card__text'>Butterflies conjure up images of sunshine, the warmth and colour of flowery meadows, and summer gardens teaming with life. </p>
        </Card>

        {/* <Card>
          <img className='Card__img' 
          src="assets/Russia-a-Terrorist.jpg" 
          alt="Russia-a-Terrorist-state" 
          height={200}
          />
        </Card> */}
        <Card>
          <img className='Card__img' 
          src="assets/image-placeholder1.png" 
          alt="placeholder" 
          height={200}
          />
        </Card>

      </div>
    </section>
  )
}
