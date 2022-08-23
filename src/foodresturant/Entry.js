import React, { useState } from 'react'
import data from '../foodresturant/data'
import Categaris from './Categaris'
import Mainu from './Mainu'

const allCategories= ["all",...new Set( data.map((data)=> data.category))];
const Entry = () => {
    const [menuItems, setmenuItems]= useState(data)
    const [category, setcategory] = useState(allCategories)


    const FliterItems = (category)=>{

      if(category==="all"){
        setmenuItems(data);
        return;
      }

      let newItems= data.filter((data)=>data.category===category)
      setmenuItems(newItems)
    }
  return (
    <>
    <div className='main'>
   <Categaris category={category} FliterItems={FliterItems}/>
   <Mainu items={menuItems} />
    </div>
    </>
  )
}

export default Entry
