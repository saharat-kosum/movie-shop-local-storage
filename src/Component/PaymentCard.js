import React from 'react'
import './PaymentCard.css'
import Countdown from 'react-countdown'

function PaymentCard({open,Close}) {
    if(!open) return null
  return (
    <div onClick={Close} className='overlay'>
        <div onClick={(e)=>e.stopPropagation()} className="PaymentContainer">
            <p className='exitbtn' onClick={Close}>X</p>
            <p>Please scan to pay</p>
            <p className='QRCode'>This is QR code</p>
            <p>Or Prompt Pay xxx-xxx-xxxx</p>
            <div className='Time'>
                <Countdown date={Date.now() + 60000}
                renderer={({ minutes, seconds, completed }) => {
                    if (completed) {
                      return <div className='Expired'>Expired</div>;
                    } else {
                      return <div>{minutes}:{(seconds).toString().padStart(2,'0')}</div>;
                    }
                  }}/>
            </div>
        </div>
    </div>
  )
}

export default PaymentCard