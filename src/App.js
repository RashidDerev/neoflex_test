import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Inputs from './Inputs'
import Buttons from './Buttons'

function App() {

  const initialData = {
    header: "Test",
    components:["inputPhone","inputName"],
    buttons: {
      submit: ["ok", "green"],
      cancel: ["cancel", "red"]
    },
    host: "my-api.com"
  }
  const [jsonData, setJsonData] = useState(JSON.stringify(initialData, undefined, 4)) 
  const [valid, setValid] = useState('valid') 
  const [jsonInit, setJsonInit] = useState('JSON DATA >>') 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [request, setRequest] = useState("")

  function isJson(data) {
    try {
      return JSON.parse(data)
    } catch (e) {
      return false
    }
  }
  const dataFromJson = isJson(jsonData)

  useEffect(()=>{
    if(header && components && buttons && host){
      if(dataFromJson){
        setValid('valid')
        setJsonInit('JSON DATA')
      }
    }else{
      setValid('invalid')
      setJsonInit('INVALID JSON DATA')
      setRequest('')
    }
  },[dataFromJson])

  const {header, components, buttons, host} = dataFromJson

  const sendData = (event) =>{
      event.preventDefault()
  axios.post(`https://${host}`, 
      {crossdomain: true, 'sendName':name, 'sendPhone':phone, 'sendEmail':email, 'sendPassword':password })
      .then(res => {
      console.log(res)
      console.log(res.data)
      setName('')
      setPhone('')
      setEmail('')
      setPassword('')
      setRequest(`success post to ${host}`)
      }, (error) => {
          console.log(error);
          setRequest(`can't send post request to ${host}`)
  })
}
  return (
    <div className="App">
        <div className='jsonContainer'> 
          <div className={`jsonHeader ${valid}`}>{jsonInit}</div>  
          <textarea 
              type='text' 
              className={`codeField ${valid}`} 
              name='jsondata' value={jsonData} 
              onChange={e=>setJsonData(e.target.value)}>
          </textarea>
        </div>
        <div className='content'>
          <h2 className='headers'>{header}</h2>
          <form  onSubmit={sendData}>
            <Inputs 
              components={components} 
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
              setPhone={setPhone}
            />
            <Buttons buttons={buttons}/>
            <div>{ request }</div>
          </form>
        </div>
    </div>
  );
}

export default App;