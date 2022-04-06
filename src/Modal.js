import React from 'react'
import './modal.css'
export default function Modal(props) {
  return (
    <div className='modal-backdrop'>
      <div className='modal-container'>
        <h2>Modal Title</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati quidem eaque assumenda at esse sequi tempora, voluptatum fugiat commodi beatae? Unde quis omnis debitis magnam.</p>
        <a href="https://www.google.com" className="App-link">Link</a>
        <button onClick={props.handleClick}>Hide Modal</button>
      </div>
    </div>
  )
}
