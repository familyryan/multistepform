import React from 'react'
import thankyouIcon from "../assets/images/icon-thank-you.svg"

const ThankYou = () => {
  return (
    <div className="thankyou-card">
<img className="thanks-icon" src={thankyouIcon} alt="" />
<h1 className="thanks-h1">Thank you!</h1>
<p className="thanks-caption">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@family.com</p>
    </div>
  )
}

export default ThankYou