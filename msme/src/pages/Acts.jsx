import React from 'react'
import Footer from '../components/Footer'

const Acts = () => {
  return (
    <>
      <div className='director-wrap'>
        <div className="director-heading">
          ACTS & RULES
        </div>

        <div className="director-content">



          <div className="director-info pad">
            <p>The classification of Micro, Small and Medium Enterprises is defined under the MSMED Act 2006 amendment dated 01/06/2020. The Micro, Small and Medium Enterprises is based on the Investment in Plant, Machinery or Equipment values (excluding land and building) and Annual Turnover. This shall come into effect from 01.07.2020.</p>

            <ul>
              <li className='ser-items'> Micro Enterprise: Where the investment in Plant and Machinery or Equipment does not exceed one crore rupees and turnover does not exceed five crore rupees.</li>
              <li className='ser-items'> Small Enterprise: Where the investment in Plant and Machinery or Equipment does not exceed ten crore rupees and turnover does not exceed fifty crore rupees.</li>
              <li className='ser-items'> Medium Enterprises: Where the investment in Plant and Machinery or Equipment does not exceed fifty crore rupees and turnover does not exceed two hundred and fifty crore rupees.</li>

            </ul>
            <br />
            <br />

            <p>The Micro, Small and Medium Enterprises Development Act (MSMED) of 2006 aims to promote, develop, and improve the competitiveness of micro, small, and medium enterprises. The act has been in operation since October 2, 2006. It includes the following rules:
            </p>
            <ul>
              <li className='ser-items'> Udyog Aadhaar Certificate: The act simplifies the process of obtaining this certificate.</li>
              <li className='ser-items'> Penalties for late payments: The act provides penalties for late payments by buyers of goods and services.</li>
              <li className='ser-items'> Closure of Business or Exit policy: This policy regulates the closure of weak or sick units.</li>
              <li className='ser-items'> MSME registration portal: This portal allows MSMEs to register online to obtain SSI certificates.</li>

            </ul>

            <br />
            <br />

            <div className='btn-wrap'>
              <a href="https://msme.gov.in/Act-and-rules/rules-0?status=archive" target='_blank'><button className='button-40'>Learn More</button></a>
            </div>



          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Acts
