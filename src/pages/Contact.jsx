import React, { useContext, useEffect, useState } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { question } from "./Contact_Question";
import { question_02 } from "./Contact_Question";
import { MyContext } from "../Store/Store";
import img19 from '../img/footerimg.png'


const Contact = () => {

  const { bgColor , setBgColor } = useContext(MyContext)

  useEffect(()=>{

    setBgColor("black")
    console.log("Product : "+bgColor);
    
    return ()=> {
      setBgColor("")
      // console.log(bgColor);
    }
  },[bgColor])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
  };
  
  

  const [box, setBox] = useState(false);
  const [show, setShow] = useState();
  const [show_02, setShow_02] = useState();
  const [active, setActive] = useState(0);
  

  const [questions , setQuestion] = useState(true)

  console.log(questions);
  

  return (
    <>
      <div className="Contact_main1">
        <div className="Contact_top">
          <h1>NEED A HAND ?</h1>
        </div>
        <div className="Contact_Container1">
          <div className="Contact_left">
            <h2 className="contact_us">Contact Us</h2>
            <h2 className="email">info@mysite.com</h2>
            <h2 className="num">123-456-7890</h2>
            <p>
              500 Terry Francine Street San <br /> Francisco, CA 94158
            </p>
            <div className="map">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30107.151268879337!2d72.8399872!3d19.3953792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1736949496146!5m2!1sen!2sin"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="Contact_right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="Contact_right_top">
                <p>
                  First Name* <br />
                  <input
                    type="text"
                    id="First Name"
                    {...register("FirstName", {
                      required: {
                        value: true,
                        message: "Enter Your First Name",
                      },
                    })}
                  />
                  {errors.FirstName && (
                    <div className="error">{errors.FirstName.message}</div>
                  )}
                </p>
                <p>
                  Last Name* <br />
                  <input
                    type="text"
                    name=""
                    id="Last Name"
                    {...register("LastName", {
                      required: {
                        value: true,
                        message: "Enter Your Last Name",
                      },
                    })}
                  />
                  {errors.LastName && (
                    <div className="error">{errors.LastName.message}</div>
                  )}
                </p>
              </div>
              <div className="Contact_right_mid">
                <p>
                  Email* <br />
                  <input
                    type="text"
                    id="Email"
                    {...register("Email", {
                      required: {
                        value: true,
                        message: "Enter Your Email Address",
                      },
                    })}
                  />
                  {errors.Email && (
                    <div className="error">{errors.Email.message}</div>
                  )}
                </p>
                <p>
                  Phone <br />
                  <input
                    type="text"
                    id="Phone"
                    {...register("Phone", {
                      required: {
                        value: true,
                        message: "Enter Your Phone Number",
                      },
                    })}
                  />
                  {errors.Phone && (
                    <div className="error">{errors.Phone.message}</div>
                  )}
                </p>
              </div>
              <p className="msg">
                leave us a message <br />
                <textarea
                  id="message"
                  name="message"
                  {...register("message", {
                    required: { value: true },
                  })}
                />
              </p>

              <button className="btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>

                  {/* accordion Start */}

      <div className="contact_main2">
        <div className="contact_main2_top">
          <h1>Frequently Asked Question</h1>
        </div>
        <div className="contact_main2_mid">
          <h3>Frequently Asked Question</h3>
        </div>
        <div className={`contact_main2_link ${active === 0 ? `active` : ''}`}>
          <span className="span1" onClick={() => { setQuestion(true); setShow(question); }}>General</span>
          <span className="span2" onClick={() => { setQuestion(false); setShow(question_02); }}>Setting up FAQs</span>
        </div>
        {
      questions ? 
        <div className="contact_main2_accordion">
          
          <div className="contact_main2_bottom 1">
            {question.map((accordion, i) => {
              return (
                <div key={i} className="accordion">
                  <h3
                    onDoubleClick={() => setShow(5)}
                    onClick={() => setShow(accordion.id)}
                  >
                    {accordion.question}
                  </h3>
                  <p className={show === accordion.id && "show"}>
                    {accordion.answer}
                  </p>
                  <hr />
                </div>
              );
            })}
          </div> 
          </div>: 
          <div className="contact_main2_bottom_02">
            {question_02.map((accordion, i) => {
              return (
                <div key={i} className="accordion">
                  <h3
                    onDoubleClick={() => setShow_02(5)}
                    onClick={() => setShow_02(accordion.id)}
                  >
                    {accordion.question}
                  </h3>
                  <p className={show_02 === accordion.id && "show"}>
                    {accordion.answer}
                  </p>
                  <hr />
                </div>
              );
            })}
          </div>
        }
      </div>

              {/* accordion End */}


      {/* footer Start */}
      
      <footer>
        <div className="contact_main10">
          <div className="contact_footer1">
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="17 17.002 166.002 165.999" viewBox="17 17.002 166.002 165.999" height="50" width="50" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage"><defs><style>#comp-kv9fnalf svg [data-color="1"] {'fill: #FFFFFF;'}</style></defs>
              <g>
                  <path d="M54.331 87.495c4.406-16.714 17.655-29.828 34.401-34.112 29.968-7.668 57.117 12.228 61.475 39.711.552 3.483 2.105 6.729 4.599 9.223l19.149 19.149c2.211 2.211 5.988 1.144 6.723-1.894 3.668-15.163 3.177-31.948-2.79-49.095-8.087-23.242-26.742-41.364-50.144-48.976C60.747-.296-.254 60.667 21.471 127.658c7.58 23.373 25.64 42.024 48.826 50.158 17.08 5.991 33.797 6.533 48.916 2.945 3.048-.723 4.124-4.511 1.909-6.726l-20.582-20.582c-2.285-2.285-5.217-3.788-8.388-4.413-26.668-5.25-45.59-32.077-37.821-61.545z" fill="#FFFFFF" data-color="1"></path>
                  <path d="M150.451 126.185a44.142 44.142 0 0 1-24.881 24.3c-3.495 1.347-4.473 5.821-1.824 8.469l21.968 21.968a7.092 7.092 0 0 0 5.014 2.077h26.29a5.56 5.56 0 0 0 5.559-5.559v-26.29a7.09 7.09 0 0 0-2.077-5.014L158.864 124.5c-2.603-2.601-7.009-1.717-8.413 1.685z" fill="#FFFFFF" data-color="1"></path>
                  <path fill="#FFFFFF" d="M126.255 100.847c0 13.565-10.996 24.561-24.561 24.561s-24.561-10.996-24.561-24.561 10.996-24.561 24.561-24.561 24.561 10.996 24.561 24.561z" data-color="1"></path>
              </g>
          </svg>
          <h1>ARCADE</h1>
          </div>
          <div className="contact_main-footer contact_footer2">
            <h1>Products</h1>
            <h4>Games</h4>
            <h4>Consoles</h4>
            <h4>Controllers</h4>
            <h4>Accessories</h4>
          </div>
          <div className="contact_main-footer contact_footer3">
            <h1>Store</h1>
            <h4>500 Terry Francine Street <br /> San Francisco, CA 94158</h4>
            <h4>Mon - Fri: 9am - 9pm</h4>
            <h4>info@mysite.com</h4>
            <h4>123-456-7890</h4>
          </div>
          <div className="contact_main-footer contact_footer4">
            <h1>Policy</h1>
            <h4>Terms & Conditions</h4>
            <h4>Shipping Policy</h4>
            <h4>Refund Policy</h4>
            <h4>Privacy Policy</h4>
            <h4>Cookie Policy</h4>
            <h4>FAQ</h4>
          </div>
        </div>
        <hr className="hr" />
        <div className="contact_main11">
          <div className="contact_main11-left">
            <h4>Payment Methods</h4>
            <img src={img19} alt="" />
          </div>
          <div className="contact_main11-right">
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
  );
};

export default Contact;
