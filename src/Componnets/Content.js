import React from 'react'
import OffCanvasExample from './OffCanvasExample'

import SideBar from './SideBar'

import { Routes, Route, Link } from "react-router-dom";
import Home from './Home'

const Content = () => {
  return (
    <div className='row mt-5'>
      <div className='col-md-2'>
        <SideBar />
      </div>
      <div className="col-md-9 mx-3 container App border-box shadow ">
        <section className=' CardItem'>
        <Home />

        </section>
      </div>


    </div>
  )
}

export default Content
