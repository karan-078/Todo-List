import React, { useState } from 'react'
import people from '../reviwes/Userdata'
import {FaChevronLeft,FaChevronRight, FaQuoteRight} from 'react-icons/fa'
const Users = () => {
const [index, setindex] = useState(0)

const {name, job, image, text}= people[index]


const cheknumber = (number)=>{
 if(number>people.length-1){
    return 0;
 }

 if(number<0){
  return people.length-1;
 }
 return number;
}

const IncrEase=()=>{

    setindex((index)=>{
        let newindex= index+1;
       return cheknumber(newindex)
    })

}


const DcrEase=()=>{
    setindex((index)=>{
        let newindex= index-1;
       return cheknumber(newindex)
    })
}

const randomperson =()=>{
    let randmonuber = Math.floor(Math.random()*people.length);
    if(randmonuber===index){
        randmonuber=index+1;
    }

    setindex(cheknumber(randmonuber));
}

  return (
<>
<section>
<articale className="reviews">
<section className="container">
    <img src={image} alt={name} />

    <span className='qutaicon'>
      < FaQuoteRight/>
    </span>
</section>
<h4>{name}</h4>
<p className='job'>{job}</p>
<p className='info'>{text}</p>

<div className="buttoncontainer">
    <button className="btn1" onClick={DcrEase}><FaChevronLeft/></button>
    <button className="btn2" onClick={IncrEase}><FaChevronRight/></button>
</div>

<button onClick={randomperson}>randomuser</button>
</articale>
</section>
</>   
  )
}

export default Users
