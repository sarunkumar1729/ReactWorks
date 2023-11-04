import './Mycomponent.css'

function Mycomponent(){
    const age = 47;
    return(
      <>
        {/* {age>=18 && <Elligible/>} */}
        { age<18 ? <Notlligible/> : <Elligible/> }
      </>
    )
}
function Elligible(){
  return(
    <h1 style={{color:'red',backgroundColor:'yellow'}}>Elligible for voting</h1>
  )
}
function Notlligible(){
  const styles = {color:'blue',backgroundColor:'red'}
  return(
    <h1 style={styles}>not elligible for voting</h1>
  )
}

export default Mycomponent;