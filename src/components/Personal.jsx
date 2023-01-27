import React, {useState} from 'react'

const Personal = ({clientName, setClientName, email, setEmail, phone, setPhone, errors}) => {

  if(!errors.length)return "Loading..."
  return (
    <div className="personal-parent">
      <h1 className="personal-h1 form-h1">Personal info</h1>
      <h4 className="personal-caption-h4 form-h4">Please provide your name, email address, and phone number.</h4>
      <form className="personal-form">
        <div className="form-div">
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <h5 className={errors[0] == true ? "error-h5" : "hide-error"}>This field is required</h5>
            </div>
            <input type="text" name="clientName" value={clientName} onChange={(e)=>setClientName(e.target.value)} placeholder="Name" autoComplete="off" className="form-control" />
          </div>
          <div className="form-div">
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <h5 className={errors[1] == true ? "error-h5" : "hide-error"}>This field is required</h5>
            </div>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" autoComplete="off" className="form-control" />
       
          </div>
          <div className="form-div">
          <div className="form-row">
            <label htmlFor="name">Phone Number</label>
            <h5 className={errors[2] == true ? "error-h5" : "hide-error"}>This field is required</h5>
            </div>
            <input type="text" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="i.e +1 234 567 890" autoComplete="off" className="form-control" />
          </div>
      
      </form>
    </div>
  )
}

export default Personal