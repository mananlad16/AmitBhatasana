import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="page_footer ds s-py-md-0 s-py-lg-50 s-py-xl-100 c-gutter-25">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <h4>Contact Info</h4>
            </div>
            <div className="col-lg-5 col-xl-4">
              <h4>Social Media</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div
                className="card text-white mb-3"
                style={{ backgroundColor: "#242d3c", height: "95%" }}
              >
                <div className="card-header">
                  <h5 className="card-title">
                    <div className="icon-styled color-main fs-50">
                      <i className="themeicon-marker" />
                    </div>{" "}
                    Address:
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <a
                      href="https://www.google.com/maps/place/Phygital+Business+Clinic/@21.1435483,72.7944282,17z/data=!3m1!4b1!4m6!3m5!1s0x3be0530ebec64217:0x9962c50d09d26549!8m2!3d21.1435483!4d72.7966169!16s%2Fg%2F11qpt7krmt?entry=ttu"
                      target="_blank"
                    >
                      305,Aastha Corporate Capital, Nr. VIP Plaza, VIP Road,
                      Vesu, Surat, Gujarat 395007.
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div
                className="card text-white mb-3"
                style={{ backgroundColor: "#242d3c" }}
              >
                <div className="card-header">
                  <h5 className="card-title">
                    <div className="icon-styled color-main fs-50">
                      <i className="themeicon-phone" />
                    </div>{" "}
                    Phone:
                  </h5>
                </div>
                <div className="card-body">
                  <a href>+91 84692 03000</a>
                </div>
              </div>
              <div
                className="card text-white mb-3"
                style={{ backgroundColor: "#242d3c" }}
              >
                <div className="card-header">
                  <h5 className="card-title">
                    <div className="icon-styled color-main fs-50">
                      <i className="themeicon-mail" />
                    </div>{" "}
                    Email:
                  </h5>
                </div>
                <div className="card-body">
                  <a href="https://mail.google.com/mail/">ams2891@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div
                className="card "
                style={{ backgroundColor: "#242d3c", height: "95%" }}
              >
                <div className="card-body ">
                  <h6>
                    <a
                      href="https://www.linkedin.com/in/amitkumar-bhatasana-b489a2190"
                      className="fa fa-linkedin color-bg-icon rounded-icon"
                    />
                    <label className="ml-2">LinkedIn</label>
                  </h6>
                  <h6>
                    <a
                      href="https://instagram.com/amit_bhatasana?igshid=YmM0MjE2YWMzOA=="
                      className="fa fa-instagram  color-bg-icon rounded-icon"
                      title="instagram"
                    />
                    <label className="ml-2">instagram</label>
                  </h6>
                  <h6>
                    <a
                      href="https://www.facebook.com/amit.bhatasana"
                      className="fa fa-facebook  color-bg-icon rounded-icon"
                      title="facebook"
                    />
                    <label className="ml-2">facebook</label>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section class="page_copyright ds s-py-12">
				<div class="container">
					<div class="row align-items-center">
						<div class="fw-divider-space d-none d-lg-block mt-15"></div>
						<div class="col-md-12 text-center fs-12">
							<p>Amit Bhatasana <span class="copyright_year">2023</span></p>
						</div>
						<div class="fw-divider-space d-none d-lg-block mt-15"></div>
					</div>
				</div>
			</section>
    </div>
  );
};

export default Footer;
