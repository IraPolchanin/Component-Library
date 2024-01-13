import React from 'react'
import { Badge } from './Badge'

export const BadgesList = () => {
  return (
    <section className='BadgesList'>
      <h2 className='BadgesList__title'>badges</h2>
      <div className='BadgesList__container'>
        <h3 className='BadgesList__subtitle'>Square</h3>
        <div className="BadgesList__items">
          <Badge />
          <Badge color="red" text="Text"/>
          <Badge color="green" />
          <Badge color="yellow">Badge</Badge>
          <Badge color="blue">Badge</Badge>
          <Badge color="indigo">Badge</Badge>
          <Badge color="purple">Badge</Badge>
          <Badge color="pink">Badge</Badge>
        </div>

        <h3 className='BadgesList__subtitle'>Pill</h3>
        <div className="BadgesList__items">
          <Badge shape="pill" />
          <Badge color="red" shape="pill" text="Story"/>
          <Badge color="green" shape="pill">Badge</Badge>
          <Badge color="yellow" shape="pill">Badge</Badge>
          <Badge color="blue" shape="pill">Badge</Badge>
          <Badge color="indigo" shape="pill">Badge</Badge>
          <Badge color="purple" shape="pill">Badge</Badge>
          <Badge color="pink" shape="pill">Badge</Badge>
        </div>
      </div>
    </section>
  )
}