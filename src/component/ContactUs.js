import React, { useState } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'   
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {

    
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs((values) => ({ ...values, [name]: value }));

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const mob=inputs.tel;
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(mob)) {
            
            toast.error("Please enter only number.", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if(mob.length != 10){
          toast.error("Please enter valid phone number.", {
            position: toast.POSITION.TOP_CENTER
        });
        }
        else
        {
            axios.post('http://localhost/React%20Course/amitbhatasana/api/insert.php', inputs).then((res) => {
                if (res.data) {
                    toast.success('Data Inserted Successfully.', {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
                else{
                toast.error("Error!");
                }
            });
            console.log(inputs);
        }

    }


  return (
    <>
    <Header />
    <NavBar />
        <section className="ds ms s-py-70">
        <ToastContainer />
        <div className="container">
            <div className="row">
            <div className="col-lg-8 animate" data-animation="scaleAppear">
                <div className="hero-bg p-30">
                <form className="c-gutter-20" onSubmit={handleSubmit} >
                    <h4 className="text-center">Contact Form</h4>
                    <div className="form-group mb-10">
                    <input type="text" className="form-control" name="user_name" onChange={handleChange} placeholder="full name" required />
                    </div>
                    <div className="form-group mb-10">
                    <div className="row ">
                        <div className="col-xs-12 col-lg-6">
                        <input type="tel" className="form-control" name="tel" onChange={handleChange} placeholder="phone number" required />
                        </div>
                        <div className="col-xs-12 col-lg-6">
                        <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="email address" required />
                        </div>
                    </div>
                    </div>
                    <div className="form-group mb-10">
                    <textarea className="form-control" rows={6} placeholder="your comment" name="message" onChange={handleChange} defaultValue={""} />
                    </div>
                    <div className="row mt-30">
                    <div className="col-sm-12">
                        <div className="form-group">
                        <button type="submit"  className="btn btn-outline-maincolor2 color_white">send</button>
                        </div>
                        

                    </div>
                    </div>
                </form>
                </div>
            </div>
            {/*.col-* */}
            <div className="col-lg-4 animate" data-animation="scaleAppear">
                <div className="hero-bg p-30">
                <h4>Contact Info</h4>
                <div className="media mb-20">
                    <div className="icon-styled color-main fs-24">
                    <i className="themeicon-marker" />
                    </div>
                    <div className="media-body mt-2">
                    <a href="https://www.google.com/maps/place/Phygital+Business+Clinic/@21.1435483,72.7944282,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0530ebec64217:0x9962c50d09d26549!8m2!3d21.1435483!4d72.7966169!16s%2Fg%2F11qpt7krmt?entry=ttu" target="_blank">
                        305,Aastha Corporate Capital, Nr. VIP Plaza, VIP Road, Vesu, Surat, Gujarat 395007.
                    </a>
                    </div>
                </div>
                <div className="media mb-20">
                    <div className="icon-styled color-main fs-24">
                    <i className="themeicon-phone" />
                    </div>
                    <div className="media-body">
                    <p className='mt-2'>
                       <span className='text-light'> +91 84692 03000</span>
                    </p>
                    </div>
                </div>
                <div className="media mb-20">
                    <div className="icon-styled color-main fs-24">
                    <i className="themeicon-mail" />
                    </div>
                    <div className="media-body">
                    <p className='mt-2'>
                        <a href="https://mail.google.com/mail/">ams2891@gmail.com</a>
                    </p>
                    </div>
                </div>
                <h4>Social Links</h4>
                <div className="social-icons justify-content-center">
                    <div className="icon-styled">
                    <a href="https://www.linkedin.com/in/amitkumar-bhatasana-b489a2190" className="fa fa-linkedin" title="linkedin" />
                    </div>
                    <div className="icon-styled">
                    <a href="https://instagram.com/amit_bhatasana?igshid=YmM0MjE2YWMzOA==" className="fa fa-instagram" title="instagram" />
                    </div>
                    <div className="icon-styled">
                    <a href="https://www.facebook.com/amit.bhatasana" className="fa fa-facebook" title="facebook" />
                    </div>
                </div>
                </div>
            </div>
            {/*.col-* */}
            <div className="divider-40 d-none d-xl-block" />
            </div>
        </div>
        </section>
    <Footer />
</>
  )
}
