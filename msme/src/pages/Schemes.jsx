import React from 'react'
import LogoScroll from '../components/LogoScroll'
import Footer from '../components/Footer'

const Schemes = () => {
  return (
    <>
      <div className='director-wrap'>
        <div className="director-heading">
          SCHEMES
        </div>

        <table className='table'>
          <thead className='table-head'>
            <th scope='col'>Schemes</th>
            <th scope='col'>Sub Components</th>
            <th scope='col'>Details</th>
          </thead>

          <tbody>
            <tr className='table-row align-center'>
              <td className='ele'>Schemes Booklets</td>
              <td className='ele'>&nbsp;</td>
              <td className='ele click'><a href="https://msme.gov.in/sites/default/files/FlipbookEnglishSchemeBooklet.pdf" target="_blank" className='decor'>Click here</a></td>
            </tr>

            <tr >
              <td className='ele no'>MSME Champions Scheme (erstwhile CLCS-TUS Scheme)</td>
              <td className='ele'>MSME Innovative Scheme</td>
              <td className='ele click'><a href="https://innovative.msme.gov.in/Home/IprIndex" target="_blank" className='decor'>Click here</a></td>

            </tr>

            <tr >
            <td>&nbsp;</td>
            <td className='ele'>Digital MSME Scheme</td>
            <td className='ele click'><a href="http://digitalmsme.gov.in/ICT/ICT_Welcome.aspx" target="_blank" className='decor'>Click here</a></td>

            </tr>

            <tr>
            <td>&nbsp;</td>
            <td className='ele'>Lean Manufacturing Scheme </td>
            <td className='ele click'><a href="https://dcmsme.gov.in/CLCS_TUS_Scheme/Lean_Manufacturing/Scheme_Guidelines.aspx" target="_blank" className='decor'>Click here</a></td>
            </tr>

            <tr className='border-bottom'>
            <td>&nbsp;</td>
            <td className='ele' >ZED Schemes</td>
            <td className='ele click'><a href="https://zed.msme.gov.in/" target="_blank" className='decor'>Click here</a></td>
            </tr>

            <tr>
              <td className='ele'>CLCS-TUS Scheme</td>
              <td className='ele'>	Credit Linked Capital Subsidy Scheme for Technology Upgradation</td>
              <td className='ele click'><a href="https://clcss.dcmsme.gov.in/" target="_blank" className='decor'>Click here</a></td>
            </tr>

            <tr>
              <td className='ele'>Infrastructure Development and Capacity Building</td>
              <td className='ele'>MSE Cluster Development Programme</td>
              <td className='ele click'><a href="https://cluster.dcmsme.gov.in/" target="_blank" className='decor'>Click here</a></td>
            </tr>

            <tr>
              <td className='ele'>Procurement and Marketing Support(PMS)</td>
              <td>&nbsp;</td>
              <td className='ele click'><a href="https://my.msme.gov.in/MyMsme/Reg/COM_Matu.aspx" target="_blank" className='decor'>Click here</a></td>
            </tr>

            <tr>
              <td className='ele'>CHAMPIONS MSME</td>
              <td className='ele'>&nbsp;</td>
              <td className='ele click'><a href="https://champions.gov.in/Government-India/Ministry-MSME-Portal-handholding/msme-problem-complaint-welcome.htm" target="_blank" className='decor'>Click here</a></td>
            </tr>
          </tbody>
        </table>



      </div>

      <LogoScroll />
      <Footer />

    </>
  )
}

export default Schemes
