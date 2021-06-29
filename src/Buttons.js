import React from 'react'

const Buttons = (props) => {
    function getButtons(){
        if(props.buttons){
        return Object.entries(props.buttons).map(([key, value], i)=> {
        if(key === 'submit'){
            return (
                <input key={i} className="btn formButton" type="submit" value={value[0]} style={{backgroundColor: value[1]}}></input>)
                }
            else if(key === 'cancel'){
            return (
                <input key={i} className="btn formButton" type="reset" value={value[0]} style={{backgroundColor: value[1]}}></input>)
                }
            
            })
            }
        } 
    
        const buttonsForm = getButtons()

        return (
            <div>
                {buttonsForm}
            </div>
        )
    }
    
    export default Buttons;







