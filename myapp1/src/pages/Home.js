import { useState,useRef,useEffect } from "react";

function Home(){
  const [state,setState] = useState('');
  const count = useRef(0);
  useEffect(()=>{
    count.current = count.current+1;
  })
  return(
    <>
      <input onChange={(e)=>setState(e.target.value)}/>
      <h1>{state}</h1>
      <h1>{count.current}</h1>
    </>
  )
}

export default Home;