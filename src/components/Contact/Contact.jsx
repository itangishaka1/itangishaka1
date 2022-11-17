
import './Contact.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'

// email
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com'

// Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef()


  const notify = () => toast.success("Message sent successfully 👌!");
  const notifyError = () => toast.error("Error!! please use email or whatsapp to contact me")

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
  //     .then((result) => {
  //         // console.log(result.text);
  //         notify()
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       notifyError()
  //     });

  //     e.target.reset()
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          // console.log(result.text);
          notify()
      }, (error) => {
          // console.log(error.text);
          notifyError()
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail  className='contact__option__icon'/>
            <h4>Email</h4>
            <h5>abdullahitangishaka@gmail.com</h5>
            <a href="mailto:abdullahitangishaka@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option__icon'/>
            <h4>LinkedIn</h4>
            <h5>itangishaka</h5>
            <a href="https://www.linkedin.com/in/itangishaka/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option__icon'/>
            <h4>Whatsapp</h4>
            <h5>+1 (437) 345 9921</h5>
            <a href="https://api.whatsapp.com/send?phone=14373459921" target="_blank">Send a message</a>
            {/* <div class="elfsight-app-918f5361-5038-4a37-b32c-18abff28545d"></div> */}
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}> 
          <input type="text" name="user_name" placeholder='Your Full Name' required />
          <input type="email" name="user_email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <ToastContainer  
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

/*
/           To send an email:

Go to https://www.emailjs.com/

// email
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(typeof result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };



*/