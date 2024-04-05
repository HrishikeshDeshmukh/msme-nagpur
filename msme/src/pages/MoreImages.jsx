import React, { useState } from 'react'
import Card1 from '../assets/card-1.webp'
import Card2 from '../assets/card-4.jpg'
import Card3 from '../assets/card-3.jpg'
import Pic from '../assets/m-4.jpg'
import Pic1 from '../assets/g-1.png'
import Pic2 from '../assets/g-2.png'
import Pic3 from '../assets/g-3.png'
import Pic4 from '../assets/g-4.png'
import Pic5 from '../assets/g-5.png'
import Pic6 from '../assets/g-7.png'
import Pic7 from '../assets/g-10.jpg'
import Pic8 from '../assets/g-8.png'
import Pic9 from '../assets/g-9.png'
import Pic10 from '../assets/g-11.jpg'
import Pic11 from '../assets/g-6.jpg'
import Footer from '../components/Footer'


const MoreImages = () => {
  const [fullImage, setFullImage] = useState(null);

  // Function to display full image
  const showFullImage = (imageSrc) => {
    setFullImage(imageSrc);
  }

  // Function to close full image modal
  const closeFullImage = () => {
    setFullImage(null);
  }
  return (
    <>
      <div className='director-wrap'>
        <div className="director-heading">
          GALLERY
        </div>

        <div className="director-content">

          <div className='images-wrapper'>

          <div className="slide">
            <img src={Pic} alt="" onClick={() => { showFullImage(Pic) }} />
          </div>

          <div className="slide">
            <img src={Pic1} alt="" onClick={() => { showFullImage(Pic1) }} />
      
          </div> 
          
          <div className="slide">
            <img src={Card1} alt="" onClick={() => { showFullImage(Card1) }} />
            
          </div>

          <div className="slide">
            <img src={Pic2} alt="" onClick={() => { showFullImage(Pic2) }} />
      
          </div>

          <div className="slide">
            <img src={Pic3} alt="" onClick={() => { showFullImage(Pic3) }} />
      
          </div>

          <div className="slide">
            <img src={Pic4} alt="" onClick={() => { showFullImage(Pic4) }} />
      
          </div>

          <div className="slide">
            <img src={Pic5} alt="" onClick={() => { showFullImage(Pic5) }} />
      
          </div>

          <div className="slide">
            <img src={Pic6} alt="" onClick={() => { showFullImage(Pic6) }} />
      
          </div>


          <div className="slide">
            <img src={Pic7} alt="" onClick={() => { showFullImage(Pic7) }} />
      
          </div>


          <div className="slide">
            <img src={Pic8} alt="" onClick={() => { showFullImage(Pic8) }} />
      
          </div>

          <div className="slide">
            <img src={Pic9} alt="" onClick={() => { showFullImage(Pic9) }} />
      
          </div>

          <div className="slide">
            <img src={Pic10} alt="" onClick={() => { showFullImage(Pic10) }} />
          </div>

          <div className="slide">
            <img src={Pic11} alt="" onClick={() => { showFullImage(Pic11) }} />
            
          </div>


          <div className="slide">
            <img src={Card3} alt="" onClick={() => { showFullImage(Card3) }} />
            
          </div>

         


          <div className="slide">
            <img src={Card2} alt="" onClick={() => { showFullImage(Card2) }} />
            
          </div>
</div>

          {/* Full Image Modal */}
          {fullImage &&
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span onClick={closeFullImage} style={{ position: 'absolute', top: '20px', right: '20px', color: '#fff', cursor: 'pointer', fontSize: "40px" }}>&times;</span>
              <img src={fullImage} alt="Full Image" style={{ maxWidth: '80%', maxHeight: '80%' }} />
            </div>
          }
        </div>

      </div>

      <Footer />

    </>
  )
}

export default MoreImages;
