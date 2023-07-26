import React from "react";

const NavBar = () => {
  return (
    <div>
      <div id="canvas">
        <div id="box_wrapper">
          {/*topline section visible only on small screens|*/}
          <section className="page_topline ds s-borderbottom c-my-10 d-lg-none">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-8 text-left">
                  <span className="social-icons">
                    <a
                      href="https://www.facebook.com/amit.bhatasana"
                      className="fa fa-facebook "
                      title="facebook"
                    />
                    <a
                      href="https://instagram.com/amit_bhatasana?igshid=YmM0MjE2YWMzOA=="
                      className="fa fa-instagram "
                      title="instagram"
                    />
                    <a
                      href="https://www.linkedin.com/in/amitkumar-bhatasana-b489a2190"
                      className="fa fa-linkedin"
                      title="linkedin"
                    />
                  </span>
                </div>
                <div className="col-4 text-right">
                  <span>
                    <a
                      href="#"
                      className="d-none d-xl-block search_modal_button"
                    >
                      <i className="fa fa-search" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/*eof topline*/}
          {/* header with three Bootstrap columns - left for logo, center for navigation and right for includes*/}
          <header className="page_header ds justify-nav-center">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-3 col-11">
                  <a href="index-2.html" className="logo">
                    <img src="images/AMIT BHATASANA LOGO.svg" alt />
                  </a>
                </div>
                <div className="col-xl-8 col-lg-6 col-1 text-sm-center">
                  {/* main nav start */}
                  <div id="myDIV">
                    <nav className="top-nav">
                      <ul className="nav sf-menu">
                        <li className>
                          <a className="c_a_check" href="/">
                            Home
                          </a>
                        </li>
                        <li>
                          <a className="c_a_check" href="about" >
                            About
                          </a>
                        </li>
                        <li>
                          <a className="c_a_check" href="gallery">
                            Gallery
                          </a>
                        </li>
                        <li>
                          <a>Services</a>
                          <ul>
                            <li>
                              <a href="BusinessConsultancy">
                                Business Consultancy
                              </a>
                            </li>
                            <li>
                              <a href="CorporateStaffTraining">
                                Corporate and staff training
                              </a>
                            </li>
                            <li>
                              <a href="BoostSartup">Boost your startup</a>
                            </li>
                            <li>
                              <a href="BusinessGrowth">
                                <span className="display-5">10x</span> business
                                growth
                              </a>
                            </li>
                            <li>
                              <a href="BrandingConsultancy">
                                Branding &amp; Marketing Consultancy
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="c_a_check" href="contactus">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* eof main nav */}
                </div>
                <div className="col-xl-2 col-lg-3  d-none d-lg-block">
                  <ul className="top-includes">
                    <li>
                      <span className="social-icons">
                        <a
                          href="https://www.facebook.com/amit.bhatasana"
                          className="fa fa-facebook color-icon border-icon rounded-icon"
                          title="facebook"
                        />
                        <a
                          href="https://instagram.com/amit_bhatasana?igshid=YmM0MjE2YWMzOA=="
                          className="fa fa-instagram color-icon border-icon rounded-icon"
                          title="instagram"
                        />
                        <a
                          href="https://www.linkedin.com/in/amitkumar-bhatasana-b489a2190"
                          className="fa fa-linkedin color-icon border-icon rounded-icon"
                          title="linkedin"
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* header toggler */}
            <span className="toggle_menu">
              <span />
            </span>
          </header>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
