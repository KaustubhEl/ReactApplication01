import React from 'react'
import Card from './Card'

const Form = () => {
const [name, setName] = React.useState("");
const [description, setDescription] = React.useState("");
const [Note , setNote] = React.useState([]);

const updateValue = (e, name, description) => {
e.preventDefault();
const Notes = [...Note]; 
Notes.push({name:name, description:description})
console.log(Notes)
setDescription("");
setName("");
setNote(Notes);


}

const deleteNote = (index) => {
    const Notes = [...Note];
    Notes.splice(index, 1);
    setNote(Notes);

    console.log("Deleting index ", index);
}
  return (
    <>
       <form className='flex p-10 m-10 bg-white flex-col justify-between w-1/3 rounded-xl shadow-lg h-[80vh] gap-10'>
<div className='flex flex-col gap-5'>
    <label className='field text-black  flex pb-10 flex-row gap-2'>
          Name:
          <input value={name}  onChange={(e)=>{
            setName(e.target.value)
          }}  className='w-full rounded text-black border-1 border-black pb-5' type="text" placeholder="Enter your name.." />
        </label>    
        <label className='field  text-black flex pb-10 flex-row gap-2'>
          Description:
          <textarea value={description} onChange={(e)=>{
            setDescription(e.target.value)
          }}  className='w-full rounded text-black border-1 border-black pb-5' type="text" placeholder="Enter Description.." />
        </label>
</div>
        <button onClick={(e)=>{
            updateValue(e,name,description)
        }} type="submit" className=" bg-blue-500 text-white px-4 py-2 rounded-full">Submit</button>
        </form>
        <div className='flex flex-wrap w-2/3 gap-0'>

          {Note.map((obj, idx)=>{
              return <Card key={idx} idx={idx} deleteFunc = {deleteNote} name={obj.name} description={obj.description} />
            })}
            </div>
    </>
  )
}

export default Form
