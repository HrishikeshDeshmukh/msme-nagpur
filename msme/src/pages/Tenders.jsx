import React from 'react'
import LogoScroll from '../components/LogoScroll'
import Footer from '../components/Footer'

const Tenders = () => {
  return (
    <>
      <div className='director-wrap'>
        <div className="director-heading">
          RECENT TENDERS
        </div>

        <div className="director-content">



          <div className="director-info pad">


            <ul>
              <li className='ser-items'> Quotation for work related to 2 days Vendor Development Programme.</li>
              <li className='ser-items'> Quotation for Preparation of Successor Board.</li>
              <li className='ser-items'> AMC of Computers, Printers, Scanners & Peripherals.</li>
              <li className='ser-items'> Website Upgradation of MSME-DFO Nagpur</li>

            </ul>
            <br />

          </div>

        </div>
      </div>

      <LogoScroll />
      <Footer />

    </>
  )
}

export default Tenders
