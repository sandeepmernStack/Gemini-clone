import React, { useContext, useState } from 'react'
import "./Sidebar.css"
import { Context } from '../../context/context'
function Sidebar() {
 const[extended, setExtended] = useState(true)
const {prevChat} = useContext(Context)
  return (
    <div className='sidebar'>

      <div className="sidebar-top">

      <i onClick={() => setExtended((prev) => !prev)}
 className="fa-solid fa-bars menu-icon"></i>

      <div className="new-chat">
      <i className="fa-solid fa-plus"></i>
      <span>New Chat</span>
      </div>

      <div className="recent">
        <p className='recent-text'>Recent</p>
        <div className="recent-item">
        <i className="fa-regular fa-message"></i>
       
        </div>
      </div>
      </div>

      <div className="sidebar-bottom">
        <div className="recent-item">
          <i className="fa-solid fa-gear"></i>
          <span>{extended?" Setting":null}</span>
         
        </div>
        <div className="recent-item">
        <i className="fa-solid fa-question"></i>
        <span>{extended?"Help":null}</span>
          
        </div>
        <div className="recent-item">
        <i className="fa-solid fa-square-person-confined"></i>
       <span> {extended?"Activity":null}</span>
          
        </div>

      </div>

    </div>
  )
}

export default Sidebar