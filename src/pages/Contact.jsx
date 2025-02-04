import React, { useState } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { question } from "./Contact_Question";
import { question_02 } from "./Contact_Question";

const Contact = () => {
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
                    name=""
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
      <div className="main2">
        <div className="contact_main2_top">
          <h1>Frequently Asked Question</h1>
        </div>
        <div className="contact_main2_mid">
          <h3>Frequently Asked Question</h3>
        </div>
        <div className="contact_main2_link">
          <span className="span1" onClick={() => { setQuestion(false); setShow(question); }}>General</span>
          <span className="span2" onClick={() => { setQuestion(true); setShow(question_02); }}>Setting up FAQs</span>
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
      
    </>
  );
};

export default Contact;
