import React,{useState} from 'react'

const Todolist = () => {
const myBioData=[
    {
        id:0, myName:"bimal" , age:17
    },

    {
        id:1, myName:"bimal thapa" , age:18
    },
     
    {
        id:2, myName:"bimal jung" , age:19
    }
]

const[myArray,setmyArray]= useState(myBioData);

const removeElm = (id) => {
    // alert(id);
    const mynewArray = myArray.filter((curElm)=>{
        return curElm.id != id;
    })
    setmyArray(mynewArray);
}
    return(
        <>
            {myArray.map((curElm)=>{
                return(
                    <h1 key={curElm.id}> 
                    Name:{curElm.myName} Age:{curElm.age}
                    <button onClick={ () => removeElm(curElm.id)}>Remove</button>
                    </h1>

                )
            })}
        </>
    )


}

            
                
        


export default Todolist
