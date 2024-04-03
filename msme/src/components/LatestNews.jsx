import React from 'react'
import Code from '../assets/34.jpg'
import News from '../data/latestnews.json'
import PDF from '../data/whatsnew.json'

const LatestNews = () => {



    return (
        <>
            <div className="news-wrapper">
                <div className="scrolling-container">

                    <div className='heading'>WHAT'S NEW</div>
                    <div className="content">
                        {PDF.map((info)=> (
                            <p id={info.id} className='news-items'><a href={info.url} target="_blank" rel="noopener noreferrer" className='no-decor'>{info.data}</a></p>
                        ))}

                        

                    </div>
                </div>


                <div className="events">
                    <div className='heading'>LATEST NEWS & EVENTS</div>


                    <div className="container1">
                        {News.map((news) => (
                            <div id={news.id} className='event-items'><a href={news.url} target="_blank" rel="noopener noreferrer">{news.data}</a></div>
                        ))}
                       <a href="https://msme.gov.in/latest-events"> <button className="btn">View All</button></a>
                    </div>
                </div>

                <div className="image">
                    <a href="https://www.mygov.in/" target="_blank" rel="noopener noreferrer"></a><img src={Code} alt="" width={250} />

                </div>
            </div>
        </>
    )
}

export default LatestNews
