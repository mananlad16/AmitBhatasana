import React from 'react'
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const KnowMore = () => {
  return (
    <>
     <Header />
      <NavBar />
        <div>
            <section className="ds ms">
                <div className="embed-responsive embed-responsive-21by9">
                <img className="embed-responsive-item" src="images/About_01.jpg" alt />
                </div>
            </section>
            <section className="ds blog s-py-70 s-pb-lg-100 s-pb-xl-150 c-gutter-20">
                <div className="container ">
                <div className="row">
                    <main className="offset-lg-1 col-lg-10 bg-darkblue2">
                    <article className="vertical-item post type-post format-standard has-post-thumbnail border-bottom">
                    </article>
                    <div className="fw-divider-space hidden-below-sm mt-50" />
                    <div className="row">
                        <div className="col-xs-12 col-lg-12 animate" data-animation="slideRight" data-delay={150}>
                        <div className="img-wrap ">
                            <p>Along with this, by profession, he is a competent Business Consultant, but he is a passionate content creator by heart. Many people witness this in his training programs and workshops which you can also witness in his upcoming book “Grab that ice cream before it melts” you can also check his life changing journal<br /> The Easy 75.</p>
                        </div>
                        </div>
                        <div className="col-xs-12 col-lg-12 animate" data-animation="expandUp" data-delay={150}>
                        <div className="img-wrap ">
                            <p>He has transformed many lives of people with his signature programs Zero to infinity, Boost Your Start up,10x Your Business, Selling Without Selling &amp; Go Digital With Phygital.</p>
                        </div>
                        </div>
                        <div className="col-xs-12 col-lg-12 animate" data-animation="slideLeft" data-delay={150}>
                        <div className="img-wrap ">
                            <p>Amit always believes, Strategy that looks perfect on paper, fails drastically on the field and under such circumstances, his consulting experience plays crucial role in designing strategy based on practical thinking, expertise at the ground level and consideration of 360-degree market perspective.</p>
                        </div>
                        </div>
                        <div className="col-xs-12 col-lg-12 animate" data-animation="slideRight" data-delay={150}>
                        <div className="img-wrap ">
                            <p>He is pioneer in executing business growth strategy. At a certain phase, implementation of strategies is a big issue, where most of the organization struggles. Thus, he helps the organization to take strategies on execution level and make sure that desired results are achieved.</p>
                        </div>
                        </div>
                        <div className="col-xs-12 col-lg-12 animate" data-animation="expandUp" data-delay={150}>
                        <div className="img-wrap ">
                            <p>Till now He has inspired many students, professionals and businessmen by his workshop &amp; seminars at various academies &amp; organisations, and with this his dream is to create maximum aspiring entrepreneurs, which will be a contribution to the economy of our nation.</p>
                        </div>
                        </div>
                    </div>
                    </main>
                </div>
                </div>
            </section>
        </div>
        <Footer/>
    </>
    

  )
}

export default KnowMore
