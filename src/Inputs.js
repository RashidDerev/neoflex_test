import React from 'react';

const Inputs = (props) => {

    function getInputs(){
        if(props.components){
        const inputs = props.components.map((component, index) =>{
          if(component === 'inputPhone'){
            return (
                <div className="input-group mb-3" key={index}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Phone:</span>
                    </div>
                    <input 
                        type="number" 
                        className="form-control" 
                        aria-label="Phone" 
                        aria-describedby="inputGroup-sizing-default" 
                        required
                        onChange={e => props.setPhone(e.target.value)}>
                    </input>  
                </div>)
          }else if(component === 'inputName'){
            return (
                <div className="input-group mb-3">
                    <div className="input-group-prepend" key={index}>
                        <span className="input-group-text" id="inputGroup-sizing-default">Name:</span>
                    </div>
                    <input 
                        type="text" 
                        className="form-control" 
                        aria-label="Name" 
                        aria-describedby="inputGroup-sizing-default" 
                        required
                        onChange={e => props.setName(e.target.value)}>
                    </input>  
                </div>) 
          }else if(component === 'inputEmail'){
            return (
                <div className="input-group mb-3">
                    <div className="input-group-prepend" key={index}>
                      <span className="input-group-text" id="inputGroup-sizing-default">E-mail:</span>
                    </div>
                    <input 
                        type="email" 
                        className="form-control" 
                        aria-label="Email" 
                        aria-describedby="inputGroup-sizing-default" 
                        required
                        onChange={e => props.setEmail(e.target.value)}>
                    </input>  
                </div>)
          }else if(component === 'inputPassword'){
            return (
            <div className="input-group mb-3">
                <div className="input-group-prepend" key={index}>
                    <span className="input-group-text" id="inputGroup-sizing-default">Password:</span>
                    </div>
                    <input 
                        type="password" 
                        className="form-control" 
                        aria-label="Password" 
                        aria-describedby="inputGroup-sizing-default" 
                        required
                        onChange={e => props.setPassword(e.target.value)}>
                    </input>  
                </div>)
            } 
        }) 
        return inputs
        }
      }
      const inputs = getInputs()
    return (
        <div>
            {inputs}
        </div>
    )
}

export default Inputs;