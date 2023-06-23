import { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([])
    const [loading, setLoading] = useState(true)

    const testimonialLength = testimonial.length;
    let testimonialBtn = []

    for (let i = 0; i < testimonialLength; i++) {
        testimonialBtn.push(<button key={i} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} className={`${i === 0 && "active"}`} aria-current="true" aria-label={`Slide${i}`}></button>)
    }

    const endpoint = `${baseUrl}/testimonials`

    useEffect(() => {
        axios.get(`${endpoint}`)
            .then((res) => {
                res.statusText === "OK" && setTestimonial(res.data);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }, [])

    return (
        <>
            <div id='testimonials'>
                {loading ? <div>Loading...</div> : (
                    <div id="carouselExampleIndicators" className="carousel carousel-dark slide">


                        <div className="carousel-inner">
                            {
                                testimonial.map((item, index) => {
                                    return (
                                        <div key={index} className={`carousel-item ${index === 0 && "active"}`}>
                                            <p>"{item.title.rendered.replace(/&#8217;/g, '\'')}"</p>
                                            <p>- {item.content.rendered.replace(/<p>/g, '').replace(/<\/p>/g, '')}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="carousel-indicators">
                            {
                                testimonialBtn
                            }
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Testimonial