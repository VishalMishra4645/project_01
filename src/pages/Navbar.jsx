import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../img/logo.png'
import { MyContext } from '../Store/Store'
// import './App.css';


const Navbar = () => {

    const { bgColor , setBgColor } = useContext(MyContext)
    const [active, setActive] = useState(0);

     useEffect(() => {
    
        setBgColor("#2A1F3F")
        
        return () => {
          setBgColor("")
        }
    },[bgColor])
    
    

  return (
    <> 
        <div className={`navbar`} style={{backgroundColor:`${bgColor}`}}>
            <NavLink to="/" className="logo">
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="17 17.002 166.002 165.999" viewBox="17 17.002 166.002 165.999" height="50" width="50" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage"><defs><style>#comp-kv9fnalf svg [data-color="1"] {'fill: #FFFFFF;'}</style></defs>
                <g>
                    <path d="M54.331 87.495c4.406-16.714 17.655-29.828 34.401-34.112 29.968-7.668 57.117 12.228 61.475 39.711.552 3.483 2.105 6.729 4.599 9.223l19.149 19.149c2.211 2.211 5.988 1.144 6.723-1.894 3.668-15.163 3.177-31.948-2.79-49.095-8.087-23.242-26.742-41.364-50.144-48.976C60.747-.296-.254 60.667 21.471 127.658c7.58 23.373 25.64 42.024 48.826 50.158 17.08 5.991 33.797 6.533 48.916 2.945 3.048-.723 4.124-4.511 1.909-6.726l-20.582-20.582c-2.285-2.285-5.217-3.788-8.388-4.413-26.668-5.25-45.59-32.077-37.821-61.545z" fill="#FFFFFF" data-color="1"></path>
                    <path d="M150.451 126.185a44.142 44.142 0 0 1-24.881 24.3c-3.495 1.347-4.473 5.821-1.824 8.469l21.968 21.968a7.092 7.092 0 0 0 5.014 2.077h26.29a5.56 5.56 0 0 0 5.559-5.559v-26.29a7.09 7.09 0 0 0-2.077-5.014L158.864 124.5c-2.603-2.601-7.009-1.717-8.413 1.685z" fill="#FFFFFF" data-color="1"></path>
                    <path fill="#FFFFFF" d="M126.255 100.847c0 13.565-10.996 24.561-24.561 24.561s-24.561-10.996-24.561-24.561 10.996-24.561 24.561-24.561 24.561 10.996 24.561 24.561z" data-color="1"></path>
                </g>
            </svg>
                ARCADE
            </NavLink>

            <div className={`nav ${active === 0 ? `active` : ''}`}>
                <ul>
                    <li><NavLink to="product" >Product</NavLink></li>
                    <li><NavLink to="onsale">On Sale</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                    <li><NavLink to="login" className="col"><i class="bi bi-person-circle"></i>&nbsp;&nbsp;Log In</NavLink></li>
                    <button><i class="bii bi-cart"></i></button>
                </ul>
                    <i class="list bi-list"></i>
            </div>
        </div>    
    </>
  )
}

export default Navbar
