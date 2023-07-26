import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Home() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const mob = inputs.tel;
    var pattern = new RegExp(/^[0-9\b]+$/);

    if (!pattern.test(mob)) {
      toast.error("Please enter only number.", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (mob.length != 10) {
      toast.error("Please enter valid phone number.", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      axios
        .post(
          "http://localhost/React%20Course/amitbhatasana/api/insert.php",
          inputs
        )
        .then((res) => {
          if (res.data) {
            toast.success("Data Inserted Successfully.", {
              position: toast.POSITION.TOP_CENTER,
            });
          } else {
            toast.error("Error!");
          }
        });
      console.log(inputs);
    }
  };

  return (
    <>
      <Header />
      <NavBar />
      <section className="ds page_slider">
        <ToastContainer />
        <div className="flexslider">
          <ul className="slides">
            <li className="cs ">
              <div className="flex-bg ds z-5 ">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={0}
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={1}
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={2}
                    />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src="images/Slider/Slider_01.jpg"
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="images/Slider/Slider_02.jpg"
                        alt="Second slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="images/Slider/Slider_03.jpg"
                        alt="Third slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="intro_layers_wrapper">
                      <div className="intro_layers">
                        <div
                          className="intro_layer"
                          data-animation="fadeInRight"
                        >
                          <img
                            src="images/Artboard 7 copy 2@4x-8.png"
                            className="pull-left"
                            alt="slide-img"
                          />
                        </div>
                        <div
                          className="intro_layer text-right"
                          data-animation="fadeInLeft"
                        >
                          <p className="title">
                            <span className="light">
                              <br />
                              Meet Digital
                              <br />
                              Enterpreneur
                            </span>
                          </p>
                        </div>
                      </div>{" "}
                      {/* eof .intro_layers */}
                    </div>{" "}
                    {/* eof .intro_layers_wrapper */}
                  </div>{" "}
                  {/* eof .col-* */}
                </div>
                {/* eof .row */}
              </div>
              {/* eof .container-fluid */}
            </li>
          </ul>
        </div>{" "}
        {/* eof flexslider */}
      </section>

      <section id="team" className="ds  s-pt-lg-90 s-py-xl-90">
        <h3 className="hidden"> Team Slider</h3>
        <div className="container c-mb-0">
          <div className="row">
            <div className="col-12 flex-column">
              <div className="team-slider-shortcode">
                <div className="team-slider-item active">
                  <div className="team-slider-image animated fadeInLeft from-right">
                    <img src="images/team/IMG_7253.png" alt="team-slide" />
                  </div>
                  <div className="team-slider-name">
                    <h3 className="slide-title">
                      <span>
                        Digital <span className="last">marketing</span>
                      </span>
                    </h3>
                    <h4>
                      <p>
                        {" "}
                        is not an art
                        <br /> of selling a product. <br />
                        It is an art of making <br />
                        people buy the product
                        <br /> that you sell.
                      </p>
                    </h4>
                  </div>
                  {/* eof .team-slider-name */}
                </div>
                {/* eof .team-slider-item */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="bio"
        className="ds bio-parallax s-parallax ms s-pt-50 s-pt-md-80 s-py-lg-100 s-py-xl-200 c-gutter-15"
      >
        <h3 className="hidden">Bio</h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-right">
              <div className="fw-divider-space mt-30" />
              <div className="special-heading text-center">
                <div className="section__header extra-light">
                  <h2 className="text-transform-none">
                    My{" "}
                    <strong>
                      Way<span className="color-main">2</span>
                    </strong>{" "}
                    Bio
                  </h2>
                </div>
              </div>
              <div className="fw-divider-space hidden-above-lg mt-65" />
              <div className="fw-divider-space hidden-below-lg mt-30" />
              <div className="author-bio-shortcode">
                <div
                  id="author_bio_shortcode_carusel"
                  className="owl-carousel-bio"
                  data-owl-carousel-slider="#author_bio_shortcode_slider"
                  data-items={1}
                  data-responsive-xs={1}
                  data-responsive-sm={1}
                  data-responsive-md={1}
                  data-responsive-lg={1}
                >
                  <div className="bio-text">
                    The first experience in digital entrepreneuring, freelance
                    projects for local companies.
                  </div>
                  <div className="bio-text">
                    Started working at the entrepreneuring company and passed
                    all way from Junior Manager to Senior
                  </div>
                  <div className="bio-text">
                    My partners and I founded{" "}
                    <strong>
                      Hi<span className="color-main">5</span>
                    </strong>
                    entrepreneuring company.
                  </div>
                  <div className="bio-text">
                    <strong>
                      Hi<span className="color-main">5</span>
                    </strong>
                    got a leading position in the Internet advertising market.
                  </div>
                  <div className="bio-text">
                    I joined Power Home Remodeling as an innovator marketer.
                  </div>
                </div>
                <div className="custom-nav" />
                <div
                  className="owl-carousel-slider"
                  id="author_bio_shortcode_slider"
                  data-items-count={4}
                  data-carousel="#author_bio_shortcode_carusel"
                >
                  <div className="author-bio-flex">
                    <span className="year-dot active" />
                    <span className="year-dot " />
                    <span className="year-dot " />
                    <span className="year-dot " />
                    <span className="year-dot " />
                  </div>
                  <div className="author-bio-flex">
                    <span className="year-label active">2012</span>
                    <span className="year-label ">2013</span>
                    <span className="year-label ">2015</span>
                    <span className="year-label ">2017</span>
                    <span className="year-label ">2018</span>
                  </div>
                  <div className="author-bio-word">Biography</div>
                </div>
              </div>
              <div className="fw-divider-space hidden-above-lg mt-75" />
              <div className="fw-divider-space hidden-below-lg mt-130" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="ds s-pt-50 s-pt-md-140 s-pt-xl-240 s-pb-50 s-pb-md-60 s-pb-lg-100 s-pb-xl-160 c-gutter-60"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xs-12 col-lg-6 animate"
              data-animation="fadeInRight"
              data-delay={150}
            >
              <div className="img-wrap text-center">
                <img src="images/about_home2.png" alt="above img" />
              </div>
            </div>
            <div
              className="col-xs-12 col-lg-6 animate"
              data-animation="fadeInLeft"
              data-delay={150}
            >
              <div className="fw-divider-space  hidden-md hidden-sm hidden-xs hidden-lg mt-75" />
              <div className="fw-divider-space  hidden-lg mt-30" />
              {/*<div class="section__header push-right">*/}
              {/*<h2 class="mt-0 mb-0"><span>Hi<span class="color-main">5</span>, I’m Clive,</span><span class=" extra-light"> a Digital</span></h2>*/}
              {/*<h2 class="mt-0 mb-0 extra-light">Enterpreneur based in</h2>*/}
              {/*<h2 class="mt-0 extra-light">San Diego...</h2>*/}
              {/*</div>*/}
              <div className="section__header">
                <h2>
                  <span>Amit Bhatasana,</span>
                  <span className=" extra-light">
                    {" "}
                    best Business Consultant in India...
                  </span>
                </h2>
              </div>
              <div className="fw-divider-space hidden-above-lg mt-30" />
              <div className="fw-divider-space hidden-below-lg mt-60" />
              <div className="section__content">
                <p className="fs-24">
                  <span className="color-main2 bold">
                    He is also “internationally certified corporate trainer”
                    Recognized in India.
                  </span>{" "}
                  He is the CEO and co-founder of{" "}
                  <a href="https://phygitalbusinessclinic.com/" target="_blank">
                    Phygital business clinic
                  </a>{" "}
                  where he is working as a business consultant and corporate
                  trainer. He has more than 10 years of experience in sales and
                  marketing. His expertise is to inspire individuals to
                  transform themselves and their businesses. By providing
                  business solution such as, marketing strategy, ultimate
                  success blueprint and business management techniques, He is
                  known as growth multiplier.{" "}
                </p>
              </div>
              <div className="fw-divider-space hidden-above-lg mt-40" />
              <div className="fw-divider-space hidden-below-lg mt-70" />
              <div className="section__btn">
                {/*<button type="button" class="btn btn-outline-maincolor push-right color_white">about</button>*/}
                <a
                  href="about"
                  type="button"
                  className="btn btn-outline-maincolor color_white"
                >
                  about
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="ds s-pb-60 c-gutter-60">
        <div className="container">
          <div className="row">
            <div
              className="col-xs-12 col-lg-6 position-relative z-index-2 animate"
              data-animation="fadeInLeft"
              data-delay={150}
            >
              <div className="fw-divider-space  hidden-md hidden-sm hidden-xs hidden-lg mt-70" />
              <div className="section__header">
                <h2 className="push-left">
                  <span className="extra-light">
                    Say <span className="bold">Hello</span> to Me!
                  </span>
                </h2>
              </div>
              <div className="fw-divider-space hidden-above-lg mt-30" />
              <div className="fw-divider-space hidden-below-lg mt-60" />
              <div className="section__content c-gutter-20">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="user_name"
                      onChange={handleChange}
                      placeholder="full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="row ">
                      <div className="col-xs-12 col-lg-6">
                        <input
                          type="tel"
                          className="form-control"
                          name="tel"
                          onChange={handleChange}
                          placeholder="phone number"
                          required
                        />
                      </div>
                      <div className="col-xs-12 col-lg-6">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={handleChange}
                          placeholder="email address"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows={6}
                      placeholder="your message"
                      name="message"
                      onChange={handleChange}
                      defaultValue={""}
                    />
                  </div>
                  <div className="fw-divider-space hidden-above-lg mt-45" />
                  <div className="fw-divider-space hidden-below-lg mt-65" />
                  <div className="section__btn">
                    <button
                      type="submit"
                      className="btn btn-outline-maincolor2 color_white"
                    >
                      send
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-xs-12 col-lg-6 animate"
              data-animation="fadeInRight"
              data-delay={150}
            >
              <div className="fw-divider-space hidden-above-lg mt-60" />
              <div className="img-wrap text-sm-center">
                <img
                  src="images/contact_home2.png"
                  style={{
                    background:
                      "linear-gradient(29deg, rgba(115,210,233,1) 0%, rgba(136,136,228,1) 35%, rgba(115,210,233,1) 100%)",
                  }}
                  alt="above img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="video"
        className="ds s-overlay s-py-50 s-py-md-100 s-py-xl-200 c-gutter-15 s-parallax section_home video-shortcode"
      >
        <h3 className="hidden"> Video</h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <div className="fw-divider-space  hidden-above-lg mt-20" />
              <div className="icon-styled color_white round icon-bordered bordered w2 br-color_1">
                <a href="#" className="themeicon-play center-class" />
              </div>
              <div className="section__header mt-30 color_white">
                <h4>Why You Need Me</h4>
                <p className="text-uppercase bold mt-0 c-mt-md-10 c-mt-lg-10 c-mt-xl-10 ">
                  VIDEO PRESENTATION
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ds s-py-70 s-py-lg-100 s-py-xl-150 c-gutter-60">
        <div className="container">
          <h2>HAPPY CLIENTS:</h2>
          <hr />
          <div className="cart-collaterals">
            <div className="cross-sells">
              <ul className="products">
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/search-india.png"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/green-piece.png"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/Vishwakarma-academy.png"
                      style={{ width: "40% !important" }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/Sparsh.png"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/Shree-laxmi.png"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/A-Beauty.png"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/Shivam.png"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/Skik.png"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/Proexelancers.png"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/Delta-Edutech.png"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/Health-Plus.png"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/Ashadeep.jpg"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/Neelkanth.png"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/Shah.png"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/Avd.png"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
                <li className="product type-product">
                  <a href="shop-product-right.html">
                    <img
                      className="rounded-circle"
                      src="images/logo/Instafood.png"
                      style={{
                        width: "40% !important",
                        backgroundColor: "white",
                      }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
