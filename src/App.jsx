import { useState } from 'react'
import './App.css'
import {FormSteps,FormParent,Personal,SelectPlans,AddOns,Finishing,ThankYou, NextStep} from "./components"
function App() {
  const [clientName,setClientName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [plan,setPlan] = useState(null)
  const [added,setAdded] = useState([])
  const [errors,setErrors] = useState([false,false,false])


  const [count, setCount] = useState(0)
  const formViews = [<Personal setClientName={setClientName} clientName={clientName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} errors={errors}/>,<SelectPlans plan={plan} setPlan={setPlan}/>,<AddOns added={added} setAdded={setAdded}/>,<Finishing plan={plan} added={added}/>,<ThankYou/>]


  
  const checkForm=()=>{
    let trackErrors = [0,0,0]
    if(clientName == "")trackErrors[0]=1
    if(email == "")trackErrors[1]=1
    if(phone.length < 10)trackErrors[2]=1;
    setErrors(trackErrors)
    return trackErrors.every((num)=>num == 0);
  }

  const checkPlan=()=>{
    return plan.plan && plan.duration
  }

    const nextStep =()=>{
      if(count < 5){
        if(count == 0 && checkForm())
        setCount(count+1)
      }
      if(count == 1 && checkPlan()){
        setCount(count+1)
        console.log("plans",plan)
      }
      setCount(count+1)
    }

    const prevStep =()=>{
        setCount(count-1)
    }
  

  return (
    <div className="parent-app">
    <div className="app">
      <FormSteps count={count}/>
      <FormParent>
      {formViews[count]}
      </FormParent>
      <NextStep nextStep={nextStep} prevStep={prevStep} count={count}/>
    </div>
    </div>
  )
}

export default App
