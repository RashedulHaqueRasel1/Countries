import { useState } from "react";

export default function Countrie({countrie, handleVisited}) {
    // console.log(handleVisited)
    const {name, flags} =  countrie;

    const [Visited, setVisited] = useState(false);

 

    const handleBtn = () => {
      setVisited(true)
    }


  return (
    <div  className = {`box ${Visited && 'bg'}`} >
      <h2 style={{color: Visited &&  'khaki'}}>Countrie  : {name.common}</h2>
      <img src={flags.png} alt={flags.alt} />
      <button onClick={() => handleVisited(countrie)}>Visited Country</button>
      <button onClick={handleBtn}>{Visited ? "Visited" : "Not Visited"}</button>   
      <br /> 
      {Visited ? "I am Visited This Country" : "ok"}
    </div>
  )
}
