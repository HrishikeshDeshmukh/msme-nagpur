import React from 'react'
import GoogleMap from 'google-maps-react-markers'
import '../contact.css'
import { FaSearchLocation } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Footer from '../components/Footer';

const Contact = () => {

  const MapStyle = {
    width: "100%",
    height: "330px"
  };

  return (
    <>

      <div className='director-wrap'>
        <div className="director-heading">
          CONTACT US
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-6 bg">
              <div class="contact-detail">
                <h1 class="section-title">Contact us</h1>

                <ul class="contact-ul">
                  <li className='add' ><FaSearchLocation className='ic' /> <h3>MSME-Development Institute, Ministry of Micro Small & Medium Enterprise (MSME), Government of India, CGO Complex, Block "C", Seminary Hills, Nagpur-440006.</h3></li>

                  <li className='add'>
                    <FaPhone className='ic' />
                    <a href="tel: 1800787809"><b> 1-800-7878-09</b></a>,

                  </li>

                  <li className='add'>
                    <MdOutlineAttachEmail className='ic' />
                    <a href="mailto:pardeepkumar4bjp@gmail.com"><b> msme@gmail.gov</b></a>
                  </li>
                </ul>

                <span>
                  <a href="https://www.facebook.com/msmedinagpur.gov.in/" class="fb"><FaFacebookF /></a>
                  <a href="https://www.youtube.com/channel/UCI7eKvD3NJt38Bu7hdhIruQ" class="insta"><FaYoutube /> </a>
                  <a href="https://twitter.com/msmedi_nagpur" class="twitter"><FaTwitter /></a>
                </span>
              </div>
            </div>

            <div class="col-md-6">
              <form action="#" class="contFrm" method="POST">
                <div class="row">
                  <div class="col-sm-6">
                    <input type="text" name="name" placeholder="Your Name" class="inptFld" required />
                  </div>

                  <div class="col-sm-6">
                    <input type="email" name="email" placeholder="Email Address" class="inptFld" required />
                  </div>

                  <div class="col-sm-6">
                    <input type="tel" name="phone" placeholder="Phone Number" class="inptFld" required />
                  </div>

                  <div class="col-sm-6">
                    <input type="text" name="sub" placeholder="Subject" class="inptFld" required />
                  </div>

                  <div class="col-12">
                    <textarea class="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
                  </div>

                  <div class="col-12 ">
                    <input type="submit" name="submit" value="SUBMIT" class="inptBtn" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className='google-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6823979759424!2d79.0498672751091!3d21.165034080518605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c053faefffff%3A0x7c923483a037662f!2sMinistry%20of%20Micro%20Small%20%26%20Medium%20Enterprise!5e0!3m2!1sen!2sin!4v1712560422981!5m2!1sen!2sin" width={MapStyle.width} height={MapStyle.height} style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

         
        </div>

        
      </div>

      <Footer />

    </>
  )
}

export default Contact
