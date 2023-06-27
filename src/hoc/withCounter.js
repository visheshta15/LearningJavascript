import React, {useState} from 'react';

const UpdatedComponent = (OriginalComponent) =>{
    
    function NewComponent() {
        const [a , seta ] = useState(1)
        const updateCount = () =>{
            seta(a+1)
        }
      return (
        <div>
            <OriginalComponent 
                name={"visheshta"} 
                count={a}
                incrementCount={updateCount}
            />
        </div>
      )
    }
    
    return NewComponent
}


export default UpdatedComponent;