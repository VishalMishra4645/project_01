import React, { useContext, useEffect } from 'react'
import './OnSale.css';
import { NavLink } from 'react-router-dom';
import image1 from '../product_img/product_img1.webp'
import image2 from '../product_img/product_img3.webp'
import image3 from '../product_img/product_img6.webp'
import image4 from '../product_img/product_img7.webp'
import image5 from '../product_img/product_img8.webp'
import image6 from '../product_img/product_img9.webp'
import image7 from '../product_img/product_img10.webp'
import image8 from '../img/main7_01.webp'
import image9 from '../img/main7_02.webp'
import img19 from '../img/footerimg.png'
import { MyContext } from '../Store/Store';

const Product = () => {

  const { bgColor , setBgColor } = useContext(MyContext)

  useEffect(()=>{

    setBgColor("black")
    console.log("Product : "+bgColor);
    
    return ()=> {
      setBgColor("")
      // console.log(bgColor);
    }
  },[bgColor])

  return (
    <>
        <div className="product_main">
          <div className="product_left">
            <div className="product_text">
              <ul className='ul1'>
                <li><NavLink>Home</NavLink>&nbsp;&nbsp;<i class="bi bi-chevron-right"></i>On Sale</li>
              </ul>
              <ul className='ul2'>
                <li>Browse by</li>
                <hr />
              </ul>
              <ul className='ul3'>
                <li><NavLink to='/product'>All Product</NavLink></li>
                <li><NavLink>Accessories</NavLink></li>
                <li><NavLink>Best Sellers</NavLink></li>
                <li><NavLink>Consoles</NavLink></li>
                <li><NavLink>Controllers</NavLink></li>
                <li><NavLink>Game</NavLink></li>
                <li><NavLink to='/onsale'>On Sale</NavLink></li>
              </ul>
            </div>            
          </div>
          <div className="product_right">
            <h1>On Sale</h1>
            <h5>9 Products</h5>
            <button className='product_right_btn1'>Sort by: Recommended <i class="bi bi-chevron-down"></i></button>
            <div className="product_right_img">
              <div className="product_right_container1">
                <div className="product_right_top">
                  <NavLink>
                    <img src={image1} alt="" /></NavLink>
                </div>
                <div className="product_right_bottom">
                  <h1>Gameflow Black</h1>
                  <h3><del>$1,000.00</del>$900.00</h3>
                  <button>Add to Cart</button>
                </div>
              </div>
              <div className="product_right_container1">
                <div className="product_right_top">
                  <NavLink><img src={image2} alt="" /></NavLink>
                </div>
                <div className="product_right_bottom">
                  <h1>Playbox XZ Gold Edition</h1>
                  <h3>$1,000.00</h3>
                  <button>Add to Cart</button>
                </div>
              </div>
              <div className="product_right_container1">
                <div className="product_right_top">
                  <NavLink><img src={image3} alt="" /></NavLink>
                </div>
                <div className="product_right_bottom">
                  <h1>L503 Headset</h1>
                  <h3><del>$29.99</del>$26.99</h3>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* product_right_page 2 */}
        {/* Start */}

        <div className="product_right_02">
            <div className="product_right_img">
              <div className="product_right_container1">
                <div className="product_right_top">
                  <NavLink><img src={image4} alt="" /></NavLink>
                </div>
                <div className="product_right_bottom">
                  <h1>Gameflow Black</h1>
                  <h3><del>$1,000.00</del>$900.00</h3>
                  <button>Add to Cart</button>
                </div>
              </div>
              <div className="product_right_container1">
                <div className="product_right_top">
                  <NavLink><img src={image5} alt="" /></NavLink>
                </div>
                <div className="product_right_bottom">
                  <h1>Playbox XZ Gold Edition</h1>
                  <h3>$1,000.00</h3>
                  <button>Add to Cart</button>
                </div>
              </div>
              <div className="product_right_container1">
                <div className="product_right_top">
                  <NavLink><img src={image6} alt="" /></NavLink>
                </div>
                <div className="product_right_bottom">
                  <h1>L503 Headset</h1>
                  <h3><del>$29.99</del>$26.99</h3>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>

        {/* End */}

        {/* product_right_page 3 */}
        {/* Start */}

        <div className="product_right_03">
            <div className="product_right_img">
              <div className="product_right_container1">
                <div className="product_right_top">
                  <NavLink><img src={image7} alt="" /></NavLink>
                </div>
                <div className="product_right_bottom">
                  <h1>Gameflow Black</h1>
                  <h3><del>$1,000.00</del>$900.00</h3>
                  <button>Add to Cart</button>
                </div>
              </div>
              <div className="product_right_container1">
                <div className="product_right_top">
                  <NavLink><img src={image8} alt="" /></NavLink>
                </div>
                <div className="product_right_bottom">
                  <h1>Playbox XZ Gold Edition</h1>
                  <h3>$1,000.00</h3>
                  <button>Add to Cart</button>
                </div>
              </div>
              <div className="product_right_container1">
                <div className="product_right_top">
                  <NavLink><img src={image9} alt="" /></NavLink>
                </div>
                <div className="product_right_bottom">
                  <h1>L503 Headset</h1>
                  <h3><del>$29.99</del>$26.99</h3>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          
        {/* End */}

        {/* footer Start */}

        <footer>
          <div className="main10">
            <div className="footer1">
            <svg preserveAspectRatio="xMidYMid meet" data-bbox="17 17.002 166.002 165.999" viewBox="17 17.002 166.002 165.999" height="50" width="50" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage"><defs><style>#comp-kv9fnalf svg [data-color="1"] {'fill: #FFFFFF;'}</style></defs>
                <g>
                    <path d="M54.331 87.495c4.406-16.714 17.655-29.828 34.401-34.112 29.968-7.668 57.117 12.228 61.475 39.711.552 3.483 2.105 6.729 4.599 9.223l19.149 19.149c2.211 2.211 5.988 1.144 6.723-1.894 3.668-15.163 3.177-31.948-2.79-49.095-8.087-23.242-26.742-41.364-50.144-48.976C60.747-.296-.254 60.667 21.471 127.658c7.58 23.373 25.64 42.024 48.826 50.158 17.08 5.991 33.797 6.533 48.916 2.945 3.048-.723 4.124-4.511 1.909-6.726l-20.582-20.582c-2.285-2.285-5.217-3.788-8.388-4.413-26.668-5.25-45.59-32.077-37.821-61.545z" fill="#FFFFFF" data-color="1"></path>
                    <path d="M150.451 126.185a44.142 44.142 0 0 1-24.881 24.3c-3.495 1.347-4.473 5.821-1.824 8.469l21.968 21.968a7.092 7.092 0 0 0 5.014 2.077h26.29a5.56 5.56 0 0 0 5.559-5.559v-26.29a7.09 7.09 0 0 0-2.077-5.014L158.864 124.5c-2.603-2.601-7.009-1.717-8.413 1.685z" fill="#FFFFFF" data-color="1"></path>
                    <path fill="#FFFFFF" d="M126.255 100.847c0 13.565-10.996 24.561-24.561 24.561s-24.561-10.996-24.561-24.561 10.996-24.561 24.561-24.561 24.561 10.996 24.561 24.561z" data-color="1"></path>
                </g>
            </svg>
            <h1>ARCADE</h1>
            </div>
            <div className="main-footer footer2">
              <h1>Products</h1>
              <h4>Games</h4>
              <h4>Consoles</h4>
              <h4>Controllers</h4>
              <h4>Accessories</h4>
            </div>
            <div className="main-footer footer3">
              <h1>Store</h1>
              <h4>500 Terry Francine Street <br /> San Francisco, CA 94158</h4>
              <h4>Mon - Fri: 9am - 9pm</h4>
              <h4>info@mysite.com</h4>
              <h4>123-456-7890</h4>
            </div>
            <div className="main-footer footer4">
              <h1>Policy</h1>
              <h4>Terms & Conditions</h4>
              <h4>Shipping Policy</h4>
              <h4>Refund Policy</h4>
              <h4>Privacy Policy</h4>
              <h4>Cookie Policy</h4>
              <h4>FAQ</h4>
            </div>
          </div>
          <hr />
          <div className="main11">
            <div className="main11-left">
              <h4>Payment Methods</h4>
              <img src={img19} alt="" />
            </div>
            <div className="main11-right">
              <h4>Join the Community</h4>
              <i class="bi bi-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
              <i class="bi bi-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="bi bi-youtube"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="bi bi-tiktok"></i>
            </div>
          </div>
        </footer>

            {/* footer End   */}
    </>
      
  )
}

export default Product
