import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";

import axios from 'axios'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Gallery = () => {

    const [gallery, setGallery] = useState([])
    const [loading, setLoading] = useState(true)

    const galleryLength = gallery.length;
    let galleryBtn = []

    for (let i = 0; i < galleryLength; i++) {
        galleryBtn.push(<button key={i} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} className={`${i === 0 && "active"}`} aria-current="true" aria-label={`Slide${i}`}></button>)
    }

    const endpoint = `${baseUrl}/photos`

    useEffect(() => {
        axios.get(`${endpoint}`)
            .then((res) => {
                res.statusText === "OK" && setGallery(res.data);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }, [])



    console.log(gallery)

    return (
        <>
            <div id='gallery'>
                <h2>gallery</h2>

                {loading ? <div style={{ height: "482px", display: "grid", placeItems: "center", width: "100vw" }}>Loading...</div> : (
                    <Swiper
                        slidesPerView={"auto"}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        {
                            gallery.map((item, index) => {

                                const content = item.content.rendered;
                                const imgRegex = /src="([^"]+)"/;

                                const imageUrl = content.match(imgRegex)[1];

                                return (
                                    <SwiperSlide key={index}>
                                        <img src={imageUrl} alt="" width="auto" height="442px" />
                                    </SwiperSlide>


                                )
                            })
                        }
                    </Swiper>
                )}
            </div>
        </>
    )
}

export default Gallery