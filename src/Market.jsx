import React from 'react'
import './market.css'
import picture from '../src/photos/dispatch-logo.png'
import logo2 from '../src/photos/driver-logo.png'
import logo3 from '../src/photos/service-logo.png'
import { GoDotFill } from "react-icons/go";

const Market = () => {
  return (
    <>
   <div className='marketplace'>
<div className='head'>
    <h1>Marketplace</h1>
</div>
<div className='market'>
<div className='item1'> 
   <img className='images' src={picture} alt="logo1" />
    </div>
<div className='item2'>
<h1 className='underline'>DISPATCH SERVICES</h1>
<h4><GoDotFill style={{ color: 'rgb(255, 147, 24)', fontSize: '14px',marginRight:'10px' }} />
    Get your dispatch done with real-time scenarios of trucks and trailers, after-hours support, and a lot more.</h4>
</div>
<div className='item3'>
<img className='images' src={logo2} alt="" />
</div>
<div className='item4'>
<h1 className='underline'>CARRIER AND DRIVER ONBOARDING</h1>
<h4><GoDotFill style={{ color: 'rgb(255, 147, 24)', fontSize: '14px',marginRight:'10px' }}/>
    Customers can get access to our database on a subscription basis.</h4>
</div>
<div className='item5'>
<img className='images' src={logo3} alt="" />
</div>
<div className='item6'>
<h1 className='underline'>MARKETPLACE</h1>
<h4><GoDotFill style={{ color: 'rgb(255, 147, 24)', fontSize: '14px',marginRight:'10px' }}/>
     Trucks/Trailers Leasing, Fleet management, TMS/WMS providers, API & Integrations, Factoring, Insurance and much more.</h4>
</div>
</div>
</div>
    </>
  )
}

export default Market