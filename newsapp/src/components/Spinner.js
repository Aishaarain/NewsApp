import React from 'react'
import loading from "./loading.gif"

const Spinner=()=>  {
 
    return (
      <div className='text-center my-3' style={{fontSize:"10px"}}>
        <img src={loading} alt="loading" />
      </div>
    )
  }
export default Spinner;