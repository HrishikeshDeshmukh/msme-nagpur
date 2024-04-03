import React from 'react'
import PDF from '../data/pdflinks.json'
import Info from '../data/services.json'

const UsefulLinks = () => {
    return (
        <>

            <div className="news-wrapper block">

                <div className="director-heading">
                    Explore Online
                    Services & Resource
                </div>
                <div className='list-wrap'>
                    <div className="scrolling-container">

                        <div className='heading'>PDF Links</div>
                        <div className="content">
                            {PDF.map((info) => (
                                <p id={info.id} className='news-items'><a href={info.url} target="_blank" rel="noopener noreferrer" className='no-decor'>{info.data}</a></p>
                            ))}



                        </div>
                    </div>

                    <div className="events">
                    <div className='heading'>Useful Links</div>


                    <div className="container1">
                        {Info.map((news) => (
                            <div id={news.id} className='event-items'><a href={news.url} target="_blank" rel="noopener noreferrer">{news.data}</a></div>
                        ))}
                       
                    </div>
                </div>
                </div>

            </div>

        </>
    )
}

export default UsefulLinks
