import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header />
      <NavBar />

      <div>
        <section className="ds s-pt-70 s-pt-md-100 s-pt-lg-150 s-pt-xl-150 s-pb-70 s-pb-md-100 s-pb-lg-150 s-pb-xl-150 c-gutter-60">
          <div
            className="text-center animate"
            data-animation="scaleAppear"
            data-delay={150}
          >
            <h1>About Amit Bhatasana</h1>
            <hr />
          </div>
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
                <div className="fw-divider-space hidden-below-lg mt-30" />
                <div className="section__btn">
                  {/*<button type="button" class="btn btn-outline-maincolor push-right color_white">about</button>*/}
                  <a
                    type="button"
                    href="/knowmore"
                    className="btn btn-outline-maincolor color_white"
                  >
                    Know more
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div id="accordion01" role="tablist">
                  <div className="card">
                    <div
                      className="card-header"
                      role="tab"
                      id="collapse02_header"
                    >
                      <h5>
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapse02"
                          aria-expanded="false"
                          aria-controls="collapse02"
                        >
                          What is the role of a business consultancy?
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse02"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="collapse02_header"
                      data-parent="#accordion01"
                    >
                      <div className="card-body bg-darkblue2">
                        A business consultancy provides expert advice and
                        guidance to businesses in various areas such as
                        strategy, operations, marketing, finance, and more. They
                        analyze business challenges, identify opportunities for
                        improvement, and offer practical solutions to help
                        businesses achieve their goals and overcome obstacles.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      role="tab"
                      id="collapse04_header"
                    >
                      <h5>
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapse04"
                          aria-expanded="false"
                          aria-controls="collapse04"
                        >
                          How can a business consultancy benefit my company?
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse04"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="collapse04_header"
                      data-parent="#accordion01"
                    >
                      <div className="card-body bg-darkblue2">
                        A business consultancy can bring valuable external
                        perspective and expertise to your company. They can help
                        optimize business processes, develop growth strategies,
                        improve operational efficiency, enhance marketing and
                        sales efforts, provide financial analysis, and offer
                        guidance on important decisions, ultimately helping your
                        company achieve better results and success.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      role="tab"
                      id="collapse05_header"
                    >
                      <h5>
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapse05"
                          aria-expanded="false"
                          aria-controls="collapse05"
                        >
                          When should I consider hiring a business consultancy?
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse05"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="collapse05_header"
                      data-parent="#accordion01"
                    >
                      <div className="card-body bg-darkblue2">
                        Hiring a business consultancy can be beneficial in
                        various situations. You may consider hiring one when
                        you're facing specific challenges or want to improve
                        certain aspects of your business. It could also be
                        valuable when you're launching a new product or service,
                        entering new markets, or seeking external advice to gain
                        a competitive advantage.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      role="tab"
                      id="collapse06_header"
                    >
                      <h5>
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapse06"
                          aria-expanded="false"
                          aria-controls="collapse06"
                        >
                          How do I choose the right business consultancy for my
                          company?
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse06"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="collapse06_header"
                      data-parent="#accordion01"
                    >
                      <div className="card-body bg-darkblue2">
                        When choosing a business consultancy, consider their
                        expertise, industry experience, track record, and client
                        testimonials. Look for consultants who have worked with
                        companies similar to yours and have a proven ability to
                        deliver results. It's also important to have clear
                        communication and a good rapport with the consultancy
                        team.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      className="card-header"
                      role="tab"
                      id="collapse07_header"
                    >
                      <h5>
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapse07"
                          aria-expanded="false"
                          aria-controls="collapse07"
                        >
                          How long does a typical engagement with a business
                          consultancy last?
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse07"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="collapse07_header"
                      data-parent="#accordion01"
                    >
                      <div className="card-body bg-darkblue2">
                        The duration of engagement with a business consultancy
                        varies depending on the scope and complexity of the
                        project or ongoing support required. It can range from a
                        few weeks for specific projects to several months or
                        longer for comprehensive business transformations. The
                        consultancy will work with you to determine the
                        appropriate timeline based on your needs and objectives.
                      </div>
                    </div>
                  </div>
                </div>
                {/* collapse */}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;
