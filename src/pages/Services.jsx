import React from 'react'
import { tailoring } from '../services'
import Gallery from '../components/Gallery'

const Services = () => {

  const scrollToElement = () => {
    const element = document.getElementById('gallery');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='services-container'>
      {/* services */}
      <div>
        {/* services header */}
        <div className='services-header'>
          <h2>services</h2>
          <p>
            If the alterations and repair service you're after isn't listed below, simply visit us in store or
            with a photo of your garment with a description of what needs to be done, and we'll give you an indicative
            price based on the information we're given.
          </p>
        </div>

        {/* services grid */}
        <div className='services'>
          {/* clothing & tailoring */}
          <div className='services-box tailoring'>
            <h3>clothing alterations & tailoring</h3>

            {
              tailoring.map((item) => {
                return (
                  <div key={item.name} className="services-grid">
                    <h4>{item.name}</h4>
                    <p>from</p>

                    {
                      item.services.map((serv) => {
                        return (
                          <>
                            <p>{serv.title}</p>
                            <p>{serv.price !== "Quote" && "$"}{serv.price}</p>
                          </>
                        )
                      })
                    }
                  </div>
                )
              })
            }

          </div>

          <div className='services-column'>
            {/* bridal */}
            <div className='services-box'>
              <h3>bridal alterations</h3>

              <p>
                If you are purchasing a wedding gown, or brides maids' gowns from the internet, chances are it won't fit perfectly.We can tailor your gown to fit you like a glove, and we'll make your dress fitting feel like the special occasion it should be.
                <br />
                <br />
                Come and see us for a free quote, or email us a picture of your gown, and tell us what needs to be done, and we'll give you an indicative price based on the information we're given.
                <br />
                <br />
                {/* add scroll to gallery */}
                Check out our <button onClick={scrollToElement}>gallery</button> below for photos of our beautifully altered and tailored wedding gowns and other works.
              </p>
            </div>

            {/* dry cleaning */}
            <div className='services-box'>
              <h3>bridal alterations</h3>

              <p>
                Visit our store for all your dry cleaning needs. Our dry cleaner specialises in cleaning bridal gowns, formal dresses, suits, corporate uniforms, business shirts, coats and jackets.
                <br /><br />
                Estimate turnaround time and price for simple garments like dress shirt and pants is 1 - 2 days, between $10 - $25. For full suits, tuxedos, or formal dresses, it can take 2 - 4 days, between $30 - $60. For garments with materials such as leather, suede, and fur, or wedding gowns it can take between 1 - 2 weeks. See us in store or contact us to get a quote for these special garments.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* gallery */}
      <Gallery />

    </div>
  )
}

export default Services