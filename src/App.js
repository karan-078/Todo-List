import { useEffect, useState } from "react";
import "./App.css";
import Alert from "./Todolist/Alert";
import List from "./Todolist/List";

const getlocalStorage = ()=>{
  let list= localStorage.getItem('list')
  if(list){
   return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return [];
  }
}
function App() {
const [name, setName]= useState('')
const [list, setList]= useState(getlocalStorage())
const [edit, Setedit]= useState(false)
const [editId, seteditId]= useState(null)
const [alert, setAlert] = useState({show:false, msg:'', type:''})

const handlsubmit=(e)=>{
  e.preventDefault()
  
 if(!name){
 shoAlert(true,"faild","please enter value" )
 }
 else if (name && edit){
 setList(list.map((item)=>{
  if(item.id===editId){
    return {...item,titel:name}
  }
 return item
}))

setName('');
seteditId(null)
Setedit(false)
shoAlert(true, "sucsess", "your item edit succsesfuly")
 }
else {
  shoAlert(true, "sucsess",`${name} add in the list`)
  const newItem = {id:new Date().getTime().toString(), titel:name,}
  setList([...list,newItem]);
  setName('');
}

}

// is a function for set show alert as short 
const shoAlert  =(show=false, type='',msg='' )=>{
  setAlert({show,type, msg})
}

const clearItems = ()=>{
shoAlert(true,"sucsess","EmptyList");
setList([]);
}

const removeItems= (id)=>{
  shoAlert(true, "sucsess", "item removed")
 setList(list.filter((item)=>item.id!==id))
}

const editItem = (id)=>{
  let specifyItem = list.find((item)=> item.id===id)
  Setedit(true)
  seteditId(id)
  setName(specifyItem.titel)
}

useEffect(()=>{
  localStorage.setItem("list", JSON.stringify(list))
})
return (

  
  <>
  <section className="contanier">

   <form  className="book item" onSubmit={handlsubmit}>
    {alert.show && <Alert {...alert} removeAlert={shoAlert} list={list}/>}
    <h1>TODO LIST</h1>
     <div className="form_control">
     <input type="text" className="input_iem" placeholder="Add-itme" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button type="submit" className="submit_btn">{edit?"Edit":"submit"}</button>
      </div>
   </form>
   {
    list.length>0 &&(
      <div className="grocear_container">
      <List item={list} removeItems={removeItems} editItem={editItem}/>
      <button className="clear_btn" onClick={clearItems}>clear items</button>
    </div>
    )
   }
  </section>
  </>
)
}

export default App;
