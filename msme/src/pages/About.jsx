import React from 'react'
import Pic from '../assets/m-4.jpg'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <div className='director-wrap'>
        <div className="director-heading">
          ABOUT THE MINISTRY
        </div>

        <div className="director-content">

          <div className="director-img">
            <img src={Pic} alt="" />
          </div>

          <div className="director-info">
            <p>MSME-Development Institute is headed by Development Commissioner, Micro Small & Medium Enterprise (MSME).Government of India. It is an apex body and a nodal agency for formulating, coordinating and monitoring the policies and programmes for promotion and development of Micro Small & Medium Enterprise (MSME).The Programmes for promotion, development and services are provided through a network of MSME-Development Institute (MSME-DI). MSME-Development Institute, Nagpur is situated in Vidarbha region of Maharashtra. Eleven district of Vidarbha region are under the jurisdiction of this Institute, namely Amaravati, Akola, Bhandara, Buldhana, Chandrapur, Gadchiroli, Gondia, Nagpur, Wardha, Washim and Yavatmal.This Institute provides support/services to the State Government as well as coordinates various activities for the prospective and existing entrepreneurs for promotion and development of MSME sectors.MSME-Development Institute, Nagpur provides various types of services including consultancy/ assistance in setting up of units, promoting and developing products and services for the MSME.The Institute has technical officers to provide guidance in all trades. <br />
            </p>
          </div>

        </div>
      </div>

      <div className='director-wrap'>
        <div className="director-heading">
          More About MSME
        </div>

        <div className="director-content">

          <div className="director-info pad">
            <p>Micro, Small and Medium Enterprises (MSME) sector has emerged as a highly vibrant and dynamic sector of the Indian economy over the last five decades. MSMEs not only play crucial role in providing large employment opportunities at comparatively lower capital cost than large industries but also help in industrialization of rural & backward areas, thereby, reducing regional imbalances, assuring more equitable distribution of national income and wealth. MSMEs are complementary to large industries as ancillary units and this sector contributes enormously to the socio-economic development of the country.</p>
            <p>Ministry of Micro, Small & Medium Enterprises (M/o MSME) envision a vibrant MSME sector by promoting growth and development of the MSME Sector, including Khadi, Village and Coir Industries, in cooperation with concerned Ministries/Departments, State Governments and other Stakeholders, through providing support to existing enterprises and encouraging creation of new enterprises. <br />
              The primary responsibility of promotion and development of MSMEs is of the State Governments. However, the Government of India, supplements the efforts of the State Governments through various initiatives. The role of the M/o MSME and its organizations is to assist the States in their efforts to encourage entrepreneurship, employment and livelihood opportunities and enhance the competitiveness of MSMEs in the changed economic scenario. The schemes/ programmes undertaken by the Ministry and its organizations seek to facilitate/provide: i) adequate flow of credit from financial institutions/banks; ii) support for technology upgradation and modernization; iii) integrated infrastructural facilities; iv) modern testing facilities and quality certification; v) access to modern management practices; vi) entrepreneurship development and skill upgradation through appropriate training facilities; vii) support for product development, design intervention and packaging; viii) welfare of artisans and workers; ix) assistance for better access to domestic and export markets and x) cluster-wise measures to promote capacity-building and empowerment of the units and their collectives.</p>
            <p>
              The National Board for Micro, Small and Medium Enterprises (NBMSME) was established by the Government under the Micro, Small and Medium Enterprises Development Act, 2006 and Rules made thereunder. It examines the factors affecting promotion and development of MSME, reviews existing policies and programmes and make recommendations to the Government in formulating the policies and programmes for the growth of MSME. </p>
          </div>

        </div>
      </div>

      <Footer />


    </>
  )
}

export default About
