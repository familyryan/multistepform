import React from 'react'
import desktopSidebar from "../assets/images/bg-sidebar-desktop.svg"
import mobileSidebar from "../assets/images/bg-sidebar-mobile.svg"

const FormSteps = ({count})=> {
    const steps = [
        {id:1,name:"Your Info"},
        {id:2,name:"Select Plan"},
        {id:3,name:"Add-Ons"},
        {id:4,name:"Summary"},
    ]
    return ( 
        <div className="form-steps-parent">
            <picture>
                <source media="(min-width:650px)" srcSet={desktopSidebar}/>
                <source media="(min-width:415px)" srcSet={desktopSidebar}/>
                <img className="bg-img" src={mobileSidebar} alt="img"/>

            </picture>
            <ul className="steps">
                {steps.map(s=>(
                    <li key={s.id} className="step-item">
                        <div className={count+1 == s.id ? "step-number-div highlight" : "step-number-div"}>
                            <h2 className="step-num">{s.id} </h2>
                        </div>
                        <div className="step-num-info">
                            <h5 className="step-h5">
                                step {s.id}
                            </h5>
                            <h4 className="step-name-h4">
                                {s.name}
                            </h4>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
     );
}

export default FormSteps;