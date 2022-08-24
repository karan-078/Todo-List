import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'
const List = ({item,removeItems,editItem}) => {
  return (
    <>
      <div className="list">
       {item.map((item)=>{
        const {id, titel}=item
       return <article key={id}>
        <p className='titel'>{titel}</p>

       <div className="btn_container">
        <button type='butoon' className='edit_btn' onClick={()=>editItem(id)}><FaEdit/></button>
        <button type='butoon' className='dlelt_btn' 
        onClick={()=>removeItems(id)}><FaTrash/></button>
       </div>
       </article>
       })}
      </div>
    </>
  )
}

export default List
