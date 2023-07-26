import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

const Gallery = () => {
  return (
    <div>
        <Header/>
        <NavBar/>
            <section className="ds gallery s-pt-10 s-pb-70 s-pt-lg-40 s-pb-lg-100 s-pt-xl-90 s-pb-xl-140 container-px-0">
            <div className="text-center animate" data-animation="scaleAppear" data-delay={150}>
                <h1>Gallery</h1>
                <hr />
            </div>				
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="row c-gutter-30 isotope-wrapper masonry-layout" data-filters=".gallery-filters">
                    <div className="col-xs-12 col-md-6 col-lg-4 animate" data-animation="slideInLeft" data-delay={150}>
                        <div className="vertical-item text-center ">
                        <div className="item-media">
                            <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img className="d-block w-100" src="images/gallery/Institutional-Workshop/IMG_01.jpg" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src="images/gallery/Institutional-Workshop/IMG_02.jpg" alt="Second slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                        </div>
                        <div className="item-content bg-darkblue2">
                            <h3 className="color_1">
                            <a href="#">Institutional<br /> Workshop</a>
                            </h3>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4 branding animate" data-animation="fadeIn" data-delay={200}>
                        <div className="vertical-item text-center ">
                        <div className="item-media">
                            <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img className="d-block w-100" src="images/gallery/Digital Marketing Workshop/IMG_01.jpg" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src="images/gallery/Digital Marketing Workshop/IMG_02.jpg" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src="images/gallery/Digital Marketing Workshop/IMG_03.jpg" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                        </div>
                        <div className="item-content bg-darkblue2">
                            <h3 className="color_1">
                            <a href="#">Digital Marketing Workshop</a>
                            </h3>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4 branding animate" data-animation="slideInRight" data-delay={250}>
                        <div className="vertical-item text-center ">
                        <div className="item-media">
                            <div id="carouselExampleControls3" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img className="d-block w-100" src="images/gallery/Pro Excelancers/IMG_01.jpg" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src="images/gallery/Pro Excelancers/IMG_02.jpg" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src="images/gallery/Pro Excelancers/IMG_03.jpg" alt="Third slide" />
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src="images/gallery/Pro Excelancers/IMG_04.jpg" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls3" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls3" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                        </div>
                        <div className="item-content bg-darkblue2">
                            <h3 className="color_1">
                            <a href="#">Corporate Training<br />Pro Excelancers</a>
                            </h3>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4 branding animate" data-animation="slideInLeft" data-delay={150}>
                        <div className="vertical-item text-center ">
                        <div className="item-media">
                            <div id="carouselExampleControls4" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img className="d-block w-100" src="images/gallery/SLC/IMG_01.jpeg" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src="images/gallery/SLC/IMG_02.jpeg" alt="Second slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls4" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls4" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                        </div>
                        <div className="item-content bg-darkblue2">
                            <h3 className="color_1">
                            <a href="gallery-single.php">Shree Laxmi <br />Consultancy</a>
                            </h3>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4 web animate" data-animation="fadeIn" data-delay={200}>
                        <div className="vertical-item text-center ">
                        <div className="item-media">
                            <img src="images/gallery/IMG_04.jpg" alt="image" />
                            <div className="media-links">
                            <div className="links-wrap">
                                <a className="link-zoom photoswipe-link" title href="images/gallery/05.jpg" />
                                <a className="link-anchor" title href="gallery-single.php" />
                            </div>
                            </div>
                        </div>
                        <div className="item-content bg-darkblue2">
                            <h3 className="color_1">
                            <a href="gallery-single.php">Ashadeep School <br />Staff Training</a>
                            </h3>
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4 branding animate" data-animation="slideInRight" data-delay={250}>
                        <div className="vertical-item text-center ">
                        <div className="item-media">
                            <div id="carouselExampleControls6" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img className="d-block w-100" src="images/gallery/AD-Tech/IMG_01.jpeg" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src="images/gallery/AD-Tech/IMG_02.jpeg" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100" src="images/gallery/AD-Tech/IMG_03.jpeg" alt="Second slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls6" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls6" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                        </div>
                        <div className="item-content bg-darkblue2">
                            <h3 className="color_1">
                            <a href="gallery-single.php">AD-Tech Institute <br />Staff Training</a>
                            </h3>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* .isotope-wrapper*/}
                    <div className="fw-divider-space mt-50" />
                    <div className="row">
                    <div className="col-sm-12 text-center">
                        <a href="#" className="btn btn-outline-maincolor color_white">Load More</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        <Footer/>
    </div>
  )
}

export default Gallery
