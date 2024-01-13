import React from 'react'
import { Banner } from './Banner'

export const BannersList = () => {
  return (
    <section className='BannersList'>
      <h2 className='BannersList__title'>banners</h2>
      <div className='BannersList__container'>

        <Banner title="My new title" text="My new incredible text" multi />
        <Banner />

        <Banner status="warning" multi>
          <h5 className="Banner__title">Warning title</h5>
          <p className="Banner__text">Warning text warning text warning text</p>
        </Banner>
        <Banner status="warning" />

        {/* <Banner status="error" multi >
          <h5 className="Banner__title">Russian army’s arm patches should say «killers of children and marauders»
          </h5>
          <p className="Banner__text">Russians do not fight for some fancy ideals, they fight for pathetic 53 dollars, which is the salary of occupants,</p>
          <p className="Banner__text"> plus the license to loot approved by the high command.</p>
          <img src="assets/Marodery.jpg" alt="Marodery" width={100} />
        </Banner> */}
        <Banner status="error" multi >
          <h5 className="Banner__title">There is a problem with your application</h5>
          <p className="Banner__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
          <img src="assets/image-placeholder.png" alt="placeholder" width={100} />
        </Banner>
       

        <Banner status="error" title="New error title" />

        <Banner status="neutral" title="New neutral title" multi />
        <Banner status="neutral">Again neutral title</Banner>
      </div>
    </section>
  )
}

