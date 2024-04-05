import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'





const Slider = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    return (
        <>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide"><img src={img1} alt="" /></div>
                    <div className="embla__slide"><img src={img5} alt="" /></div>
                    <div className="embla__slide"><img src={img2} alt="" /></div>
                    <div className="embla__slide"><img src={img4} alt="" /></div>
                </div>
            </div>

            <div className='btn-wrap'>
                <a href="https://udyamregistration.gov.in/Government-India/Ministry-MSME-registration.htm"><button className='button-40'>Register Now</button></a>
            </div>
        </>
    )
}

export default Slider
