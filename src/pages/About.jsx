import Faq from "../components/Faq"
import Testimonial from "../components/Testimonial"
import background from '../assets/background.png'

const About = () => {
  return (
    <div className="about"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="about-box">
        <h2>about</h2>
        <p>
          At Sue's we strive to provide high quality workmanship with a smile. Our tailors are experts in difficult clothing alterations services and our tailoring skills are second to none. Whether it is a simple pants shortening or high level bridal alterations our tailors will guarantee they can fix it.
          <br />
          Clothing alterations and repairs in Wellington. Services include resizing, take in waist, jeans and pants shortening, uniform and suit alterations and more.
          <br />
          We provide high quality service and specialise in bridal alterations. Dressmaking and dry cleaning also available.
        </p>
      </div>


      <div className="about-column">
        <div className="faq-box">
          <h4>faq</h4>
          <Faq />
        </div>
        <div className="testimonial-box">
          <h4>testimonials</h4>
          <Testimonial />
        </div>
      </div>
    </div>
  )
}

export default About