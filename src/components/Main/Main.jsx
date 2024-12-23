import React, { useContext } from 'react'
import "./Main.css"
import { Context } from '../../context/context'


function Main() {
const {
input,
setInput,
onSent,
data,
loading,
showData,
recentChat
} =  useContext(Context)
 
  return (
    <div className='main'>
        <div className="nav">
          <p>Gemini</p>
          <i className="fa-regular fa-user"></i>
        </div>
        

{/* {loading ? 
<div className='loader'>
<hr />
<hr />
<hr /> */}


{/* </div>:
<div>
<p className='response'>{data} </p>
</div>} */}

<>
<div className="greet">
          <p>Hello, <span>Sandeep</span></p>
          <p>Welcome to Gemini</p>
        </div>
        
     

        <div className="cards">
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eius at perspiciatis placeat repellat eaque!</p>
            <i className="fa-regular fa-lightbulb"></i>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eius at perspiciatis placeat repellat eaque!</p>
            <i className="fa-solid fa-font-awesome"></i>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eius at perspiciatis placeat repellat eaque!</p>
            <i className="fa-regular fa-lightbulb"></i>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eius at perspiciatis placeat repellat eaque!</p>
            <i className="fa-regular fa-lightbulb"></i>
          </div>
        </div>
        </>:<div> </div>

        <div className="serach">

          <div className="serach-box">
          <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a Prompt' />
          <div className="icons">
          <i className="fa-solid fa-images"></i>
          <i className="fa-solid fa-microphone"></i>
          <i onClick={()=>onSent(input)} className="fa-regular fa-paper-plane"></i>
          </div>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Cumque veniam illum et exercitationem perferendis.</p>
        </div>
    </div>
  )
}

export default Main