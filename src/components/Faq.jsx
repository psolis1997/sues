import { useState, useEffect } from "react"
import axios from 'axios'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL

const Faq = () => {

    const [faq, setFaq] = useState([])
    const [loading, setLoading] = useState(true)

    const endpoint = `${baseUrl}/faqs`

    useEffect(() => {
        axios.get(`${endpoint}`)
            .then((res) => {
                res.statusText === "OK" && setFaq(res.data);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }, [])


    if (loading) {
        return <>Loading...</>
    }

    return (
        <div id="faq">
            <div className="accordion" id="accordion">
                {
                    faq.map((item, index) => {
                        return (
                            <div key={item.slug} className="accordion-item">
                                <p className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                                        {item.title.rendered.replace(/&#8217;/g, '\'')}
                                    </button>
                                </p>
                                <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordion">
                                    <p className="accordion-body">
                                        {item.content.rendered.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&#8217;/g, '\'')}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Faq