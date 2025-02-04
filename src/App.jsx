// import logo from './logo.svg';
import './App.css';
import { useGSAP } from '@gsap/react'
// import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import gsap from 'gsap';
import img2 from './img/2.avif'
import img3 from './img/3.webp'
import img4 from './img/4.webp'
import img5 from './img/5.webp'
import img6 from './img/6.webp'
import img7 from './img/page03-01.jpg'
import img8 from './img/page03-02.jpg'
import img9 from './img/page03-03.jpg'
import img10 from './img/page04-01.jpg'
import img11 from './img/page04-02.jpg'
import img12 from './img/page04-03.jpg'
import img13 from './img/page_06.avif'
import img14 from './img/main7_01.webp'
import img15 from './img/main7_02.webp'
import img16 from './img/main7_03.webp'
import img17 from './img/main7_04.webp'
import img19 from './img/footerimg.png'


// import { useEffect, useState } from 'react';

// gsap.registerPlugin(ScrollTrigger);

function App() {

  useGSAP(()=>{
    
    // gsap.to.ScrollTrigger("main",{
    //   ScrollTrigger:".main"      
    // })
    gsap.to(".left",{
      x:200,
      duration: 2,
      delay: 1,
      opacity: 1
    })
    gsap.to(".img2",{
      x:-200,
      duration:2,
      delay:1,
      opacity:1
    })
    gsap.to(".page_04-01",{
      x:200,
      duration:2,
      delay:1.5,
      opacity:1,
    })
    gsap.to(".page_04-02",{
      x:-200,
      duration:2,
      delay:1.8,
      opacity:1,
    })
    gsap.to(".page_04-03",{
      x:200,
      duration:2,
      delay:2,
      opacity:1,
    })
    gsap.to(".page_04-04",{
      x:-200,
      duration:2,
      delay:2,
      opacity:1,
    })
    gsap.to(".main9-img",{
      y:-200,
      duration:2,
      delay:1,
      opacity:1
    })
  })

    // const [scale, setScale] = useState(1);
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     // Dynamically change scale based on scroll position
    //     setScale(1 + window.scrollY / 500); // Adjust 500 for desired zoom speed
    //   };
  
    //   // Listen to the scroll event
    //   window.addEventListener("scroll", handleScroll);
  
    //   // Cleanup the event listener when component is unmounted
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, []);
  

  return (
    <>
    
      <div className="main">
        <img src={img2} className='img2' alt="" />
        <div className="left">
          <h1>Power up your game</h1>
          <h2>CYBER KID </h2>
          <h3>INFINITE</h3>
          <h4>Now Available on PC & Console</h4>
          <button>Buy Now</button>
        </div>
      </div>
      <div className="main2">
        <div className="top">
          <h1>BEST SELLERS</h1>
          <button>View All</button>
        </div>
        <div className="bottom">
          <img src={img3} className='img img4' alt="" />
          <img src={img4} className='img img5' alt="" />
          <img src={img5} className='img img3' alt="" />
          <img src={img6} className='img img6' alt="" />
        </div>
          <div className="bottom-bottom">
            <div className="box box1">
              <h1>Playbox XZ Gold <br /> Edition</h1>
              <h5>$1,000.00</h5>
              <button>Add to Cart</button>
            </div>
            <div className="box box2">
              <h1>Echo Headset</h1>
              <h5>$39.99</h5>
              <button>Add to Cart</button>
            </div>
            <div className="box box3">
              <h1>Mach Gaming Chair</h1>
              <h5><del>$129.99</del> $116.99</h5>
              <button>Add to Cart</button>
            </div>
            <div className="box box4">
              <h1>X-2 WirelessMouse</h1>
              <h5>$24.99</h5>
              <button>Add to Cart</button>
            </div>
          </div>
      </div>
      <div className="page_03">
        <div className="page_03_top">
          <h1>SHOP BY CATEGORY</h1>
        </div>
        <div className="page_03_bottom">
          <div className="product product1">
            <a href="#" >
              <img src={img7} alt=  ""/>
            </a>
          </div>
          <div className="product product2">
            <a href="#" >
              <img src={img8} alt="" />
            </a>
              <h1>Accessories</h1>
          </div>
          <div className="product product3">
            <a href="#">
              <img src={img9} alt="" />
            </a>
              <h1>Controllers</h1>
          </div>
        </div>
      </div>
      <div className="page_04">
        <div className="page_04-01">
          <img src={img10} alt="" />
        </div>
        <div className="page_04-02">
          <h1>THIS WEEK'S DEALS</h1 >
          <h2>10%</h2>
          <h3>off all games</h3>
          <button>Shop  ow</button>
        </div>
        <div className="page_04-03">
          <img src={img11} alt="" />
        </div>
        <div className="page_04-04">
          <img src={img12} alt="" />
        </div>
      </div>
      <div className="main4">
        <div className="up">
          <h1>BEST SELLERS</h1>
          <button>View All</button>
        </div>
        <div className="down">
          <img src={img3} className='img img4' alt="" />
          <img src={img4} className='img img5' alt="" />
          <img src={img5} className='img img3' alt="" />
          <img src={img6} className='img img6' alt="" />
        </div>
          <div className="down-bottom">
            <div className="container container1">
              <h1>Playbox XZ Gold <br /> Edition</h1>
              <h5>$1,000.00</h5>
              <button>Add to Cart</button>
            </div>
            <div className="container container2">
              <h1>Echo Headset</h1>
              <h5>$39.99</h5>
              <button>Add to Cart</button>
            </div>
            <div className="container container3">
              <h1>Mach Gaming Chair</h1>
              <h5>$129.99 $116.99</h5>
              <button>Add to Cart</button>
            </div>
            <div className="container container4">
              <h1>X-2 WirelessMouse</h1>
              <h5>$24.99</h5>
              <button>Add to Cart</button>
            </div>
          </div>
      </div>
      <div className="Zoom-image">
        <img src={img13} className='Zoom-image_01' alt="" width="100%" height="100%" />
          <h1>SPEND & SAVE</h1>        
          <h2>Save 20% when you spend more than $125</h2>
          <button>Shop Now</button>
      </div>
      <div className="main7">
        <div className="up-07">
          <h1>BEST SELLERS</h1>
          <button>View All</button>
        </div>
        <div className="down-07">
          <img src={img14} className='img img4' alt="" />
          <img src={img15} className='img img5' alt="" />
          <img src={img16} className='img img3' alt="" />
          <img src={img17} className='img img6' alt="" />
        </div>
          <div className="down-bottom-07">
            <div className="content content1">
              <h1>Playbox XZ Gold <br /> Edition</h1>
              <h5>$1,000.00</h5>
              <button>Add to Cart</button>
            </div>
            <div className="content content2">
              <h1>Echo Headset</h1>
              <h5>$39.99</h5>
              <button>Add to Cart</button>
            </div>
            <div className="content content3">
              <h1>Mach Gaming Chair</h1>
              <h5><del>$129.99</del> $116.99</h5>
              <button>Add to Cart</button>
            </div>
            <div className="content content4">
              <h1>X-2 WirelessMouse</h1>
              <h5>$24.99</h5>
              <button>Add to Cart</button>
            </div>
        </div>
      </div>
      <div className="main8">
        <div className="main8_text">
          <h1>NEWSLETTER</h1>
          <p>Sign up to receive updates on new <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;products and special offers</p>
          <h2>Email*</h2>
          <input type="email" />
          <div className="main8_text_bottom">
            <span><input type="checkbox" /></span>
            <h6>Yes, subscribe me to your <br /> newsletter.</h6>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="main9">
        <div className="main9-img"></div>
      </div>
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
    </>
  );
}

export default App;
