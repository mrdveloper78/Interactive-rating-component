import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Score from './Components/Score/Score';
import Success from './Components/Success/Success';
import { MainContext } from './Context/Context';





const Layout = () => {

  const {show} = useContext(MainContext);

  return (
    <div className="content">
            <section className="layout">
              <div style={{display:show?"block":"none"}}><Score/></div>
              <div style={{display:!show?"block":"none"}}><Success/></div>
            </section>
    </div>

  )
}

export default Layout
