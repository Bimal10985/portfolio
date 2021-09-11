import React,{useState} from 'react'

const Todos = () => {
    const [inputData, setinputData] = useState('');
    const [item,setItem]=useState([]);

    const Additem = () => {
        if(!inputData){

        }else{
        setItem([...item,inputData]);
        setinputData('');
    }
    }
    const Delete = (id) =>{
        const updateditem = item.filter((elem,ind)=>{
            return ind != id;
        })
            
        setItem(updateditem);
    }
    const removeAll = () =>{
        setItem([]);
    }
    return (
        <>
           <div>
               <h1>Add list item here</h1>
               <div>
                   <input type="text" placeholder="Add Items." value={inputData}
                   onChange={(e)=>setinputData(e.target.value)}/>
                   <i className="fas fa-plus" title="Add items" onClick={Additem}></i>
               </div>
               <div>
                   {item.map((curElm,index)=>{
                       return(
                           <>
                        <h3 key={index}>{curElm}</h3>
                        <i className="fas fa-trash-alt" title="delete" onClick={()=>Delete(index)}></i>
                        </>
                          

                       )
                   })}
                  
               </div>
               <button onClick={removeAll}><span>Remove</span></button>
           </div>
        </>
    )
}

export default Todos
