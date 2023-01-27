import React, {useEffect, useState} from 'react';

const Finishing = ({plan,added}) => {
    const [total,setTotal] = useState(0)

    useEffect(() => {
        let temp = 0;
        let planPrice = plan.plan.plan.split("$")[1];
            planPrice = planPrice.split("/")[0];
        let addedTotal = added.reduce((a,b)=> a += parseInt(b.fee.split("$")[1]), 0)
            console.log(planPrice, addedTotal)
            temp = parseInt(planPrice) + addedTotal
            setTotal(temp)
    }, [])
    return ( 
        <div className="finish-card">
            <h1 className="form-h1"> Finishing up</h1>
            <h4 className="form-h4">Double-check everything looks ok before confim</h4>
            <div className="checkout-form">
                <div className="checkout-row">
                    <div className='checkout-col'>
                        <h5 className="checkout-h5">
                            {plan.plan.name} ({plan.duration})
                        </h5>
                        <h5 className="finishing-h5 underline">
                            Change
                        </h5> 
                    </div>
                    <h4 className="finishing-price">
                        {plan.plan.plan}
                    </h4>
                </div>
                {added.map((a,idx)=>{
                    <div className="checkout-row" key={idx}>
                        <h5 className="finishing-h5">
                            {a.name}
                        </h5>
                        <h5 className="finishing-fee-h5">
                            {a.fee}/mo
                        </h5>
                        </div>
                })}
                <div className="checkout-final checkout-row">
                    <h5 className="finishing-h5">Total (per mont)</h5>
                    <h3 className="finishing-h3">+${total}</h3>
                </div>
            </div>
        
        </div>
     );
}

export default Finishing;