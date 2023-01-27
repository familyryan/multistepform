import React, {useState, useRef} from 'react'

const AddOns = ({added,setAdded}) => {
  const [addOns,setAddOns] = useState([
    {id:1,name:"Online service",caption:"Access to multiplayer games", fee:"$1",added:false},
    {id:2,name:"Larger storage",caption:"Extra 1TB of cloud save", fee:"$2",added:false},
    {id:3,name:"Customizable profile",caption:"Custom theme on your profile", fee:"$2",added:false},
  ])
  const addRef = useRef()

  const toggleService = id=>{
    let temp = addOns

      let idx = temp.findIndex(a=>a.id == id);
      temp[idx].added = !temp[idx].added;
      console.log(temp,addRef.current)
      setAddOns(temp)
      addRef.current.querySelectorAll(".add-on-item")[id-1].classList.toggle("highlight-item")
      addRef.current.querySelectorAll(".fee-h5")[id-1].classList.toggle("purple")
      
      let tempServices = []
      addRef.current.querySelectorAll(".add-on-item").forEach((el,idx)=>{
        if(el.classList.contains("highlight-item"))
        tempServices.push(addOns[idx])
      })
      setAdded(tempServices)

  }
  return (
    <div className="addon-parent">
      <h1 className="form-h1">Pick add-ons</h1>
      <h4 className="form-h4">Add-ons help enhance your gaming experience.</h4>
      <ul ref={addRef} className="add-ons">
        {addOns.map(a=>(
          <li key={a.id} className={a.added ? "add-on-item highlight-item" : "add-on-item"}>
            <div className="checkbox-div">
              <input onClick={()=>toggleService(a.id,addRef)} type="checkbox" className="addon-input" />
            </div>
            <div className="add-on-info-div">
              <h4 className="add-on-h4">
                {a.name}
              </h4>
              <h5 className="add-on-h5">
{a.caption}
              </h5>
            </div>
            <div className="fee-div">
              <h5 className="fee-h5">{a.fee}/mo</h5>
            </div>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default AddOns