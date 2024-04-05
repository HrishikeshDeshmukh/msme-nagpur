import React from 'react'
import { Link } from 'react-router-dom'
import Card1 from '../assets/card-1.webp'
import Card2 from '../assets/card-4.jpg'
import Card3 from '../assets/card-3.jpg'
import Director from '../assets/director-01.jpg'

const Cards = () => {
    return (
        <>
            <div className="cards-wrapper">
                <div className='cards-wrap'>
                    <div className="slide">
                        <img src={Card1} alt="" />
                        <h2>Sevagram Mahotsav</h2>
                        <Link to='./more-images'><p>View More</p></Link>
                    </div>

                    <div className="slide">
                        <img src={Card2} alt="" />
                        <h2>Sevagram Mahotsav</h2>
                        <Link to='./more-images'><p>View More</p></Link>
                    </div>

                    <div className="slide">
                        <img src={Card3} alt="" />
                        <h2>Konkan Mahotsav</h2>
                        <Link to='./more-images'><p>View More</p></Link>
                    </div>
                </div>
            </div>

            <div className='director-wrap'>
                <div className="director-heading">
                    DIRECTOR MESSAGE
                </div>

                <div className="director-content">

                    <div className="director-img">
                        <img src={Director} alt="" />
                    </div>

                    <div className="director-info">
                        <p>It is my pleasure to release the quarterly edition of Newsletter of MSME-Development Institute, Nagpur for the year 2018-19. The newsletter mainly focuses on the awareness created by MSME-DI on the opportunities available to MSMEs through Central Government and other promotional agencies. With the publication of e-newsletter, this Institute would be able to activate its network to reach out and dissemination of information on the activities of MSME-DI to all MSMEs.

                            The main purpose of the Newsletter is to bring awareness about the role of MSME-DI, Nagpur in helping budding and existing entrepreneurs to establish themselves to sustain and grow their pursuit of establishing enterprises. Micro, Small and Medium Enterprises (MSME) Sector is an important pillar of the Indian economy as it contributes significantly to industrial production and exports.</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Cards
