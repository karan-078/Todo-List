import React, { useState } from 'react'
import data from '../Togle/data'
import Qustion from './Qustion'
const Showqustion = () => {
    const [qustion, setqustion]= useState(data)
  return (
    <>
      {/* <h3>Qustion Answer About Login</h3> */}
<div className="container">


    <section className="info">
      {
        qustion.map((qustion)=>{
        return (
        <Qustion key={qustion.id} {...qustion}/>
        )
        })
      }
    </section>
</div>


    </>
  )
}

export default Showqustion
