import React, {useState, useEffect, useRef} from 'react'
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import iconPro from '../assets/images/icon-pro.svg'

const SelectPlans = ({plan,setPlan}) => {
  const [yearly,setYearly] = useState(false)
  const durationRef = useRef()
  const [plans,setPlans] = useState([
    {id:1,icon:arcadeIcon,name:"Arcade",plan:"$9/mo",choosen:false},
    {id:2,icon:advancedIcon,name:"Advanced",plan:"$12/mo",choosen:false},
    {id:3,icon:iconPro,name:"Pro",plan:"$15/mo",choosen:false}
  ])





  const choosePlan=(id)=>{
   
    let temp = plans;
    temp = temp.map(t=>({...t,choosen:false}))
    temp[id-1].choosen = true;
    setPlans(temp);
    setPlan({plan:temp[id-1],duration:durationRef.current.checked ? "Yearly" : "Monthly"})
    console.log(durationRef.current.checked)
  

  }
  return (
    <div className="select-plans-parent">
      <h1 className="select-h1 form-h1">Select your plan</h1>
      <div className="select-caption-h4 form-h4">You have the option of monthly or yearly billing.</div>
    <ul className="plans-list">
      {plans.map(p=>(
        <div onClick={()=>choosePlan(p.id)} key={p.id} className={p.choosen || plan?.plan.id == p.id ? "plan-card highlight-plan" : "plan-card"}>
          <img className="plan-icon" src={p.icon} alt="plan-icon" />
          <div className="plan-info">
            <h4 className="plan-h4">{p.name}</h4>
            <h5 className="plan-h5-fee">{p.plan}</h5>
          </div>
        </div>
      ))}
    </ul>
    <div className="plans-toggle-parent">
      <div className="plans-toggle-div">
        <h4 className={plan?.duration == "Monthly" ? "plan-value bold" : "plan-value"}>Monthly</h4>
        <input  ref={durationRef} onChange={()=>{
          setPlan({plan:plan?.plan ? plan.plan : "",duration:durationRef.current.checked ? "Yearly" : "Monthly"})
          setYearly(!yearly)}} type="checkbox" checked={plan?.duration == "Yearly" ? true : false} className="toggle-input" />
        <h4 className={plan?.duration == "Yearly" ? "plan-value bold" : "plan-value"}>Yearly</h4>
      </div>
    </div>
    </div>
  )
}

export default SelectPlans