import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <div id="contact_menu">
          <ul>
            <li>
              <Link to="/contact/admin">Admin</Link>
            </li>
            <li>
              <Link to="/contact/support">Support</Link>
            </li>
            <li>
              <Link to="/contact/hr">HR</Link>
            </li>
          </ul>
        </div>
        <div id="contact_details">
          <h2>This is my contact component</h2>
          <Outlet />
        </div>
    </div>
  )
}

export default Contact