

import React from 'react'
import { Outlet } from 'react-router-dom'


export default function Layout2() {
  return (
    <>
            <header>Header</header>
            {
                // props.children == <outlet/> both are same work
                 // outlet is parent route element to render a child route elemetn
            }
            <Outlet />
            <footer>footer</footer>
    </>
  )
}
