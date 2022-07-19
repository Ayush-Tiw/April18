// State Management

// import React,{useState} from 'react'

// export default function App(){
//   // let Incr=0;

//   //syntax of state
//   const[Incr,setIncr]=useState(0)//useState(whatever here given num,string is a value assign to state);
//   const handleIncr=()=>{
//     // Incr=Incr+1;
//     setIncr(Incr+1)
//     console.log(Incr)
//     //on cliking the Incr is updating but the ui(on screen) Incr is not updating because the dom structure has already loaded
//   }
//   return(
//     <div><button onClick={handleIncr}>Click here</button>
//     {Incr}</div>
    
//   )
// }
// return should have only one parent element inside hich we can write multiple element inse it



//Question

// import React,{useState} from 'react'

// export default function App(){
 

  
//   const[count,setCount]=useState(0);
//   // const[count,setDecr]=useState(0)
//   const handleIncr=()=>{
//     setCount(count+1)
//     };
//     const handleDecr=()=>{
//       setCount(count-1)
      
    
//   }
  
//   return(
//     <div>
//         <div><button onClick={handleIncr}>Increament</button>
//         </div>
//         <div><button onClick={handleDecr}>Decreament</button>
//         </div>
//         <div>{count}</div>
//         <div>{count%2===0?(<button style={{backgroundColor:"green"}} className="btn btn-success">color</button>):(<button style={{backgroundColor:"yellow"}} className="btn btn-danger">color</button>)}
//         {/* Or */}
//         {/* <button className={count%2===0 ?"btn btn-success":"btn btn-danger"}>color</button> */}
//         </div>
//         </div>
//       )
// }


//passing data from child to parent components

import React,{useState} from 'react'

export default function App(){ 
  const[Incr,setIncr]=useState(0)//useState(whatever here given num,string is a value assign to state);
  const handleIncr=()=>{
    // Incr=Incr+1;
    setIncr(Incr+1)
    console.log(Incr)
    //on cliking the Incr is updating but the ui(on screen) Incr is not updating because the dom structure has already loaded
  }
  return(<div>
    <Button handleIncr={handleIncr}/>
    <ShowContent Incr={Incr}/>
  </div>)
}

//create one decreament and showcount component