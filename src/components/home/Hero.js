const Hero = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide bs-slider box-slider" data-ride="carousel"
            data-pause="hover" data-interval="false">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <div id="home1" className="first-section" style={{ backgroundImage: "url('images/slider-01.jpg')" }}>
                        <div className="dtab">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 text-right">
                                        <div className="big-tagline">
                                            <h2><strong>COLLEGE OF TECHNOLOGY </strong>UB</h2>
                                            <p className="lead">TRAINING LOCALLY AND QUALIFYING GLOBALLY.</p>
                                            <a href="#" className="hover-btn-new"><span>Contact Us</span></a>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="#" className="hover-btn-new"><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div id="home2" className="first-section" style={{ backgroundImage: "url('images/slider-02.jpg')" }}>
                        <div className="dtab">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 text-left">
                                        <div className="big-tagline">
                                        <h2><strong>COLLEGE OF TECHNOLOGY </strong>UB</h2>
                                            <p className="lead">TRAINING LOCALLY AND QUALIFYING GLOBALLY.</p>
                                            <a href="#" className="hover-btn-new"><span>Contact Us</span></a>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="#" className="hover-btn-new"><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div id="home3" className="first-section" style={{backgroundImage: "url('images/slider-03.jpg')"}}>
                        <div className="dtab">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 text-center">
                                        <div className="big-tagline">
                                        <h2><strong>COLLEGE OF TECHNOLOGY </strong>UB</h2>
                                            <p className="lead">TRAINING LOCALLY AND QUALIFYING GLOBALLY.</p>
                                            <a href="#" className="hover-btn-new"><span>Contact Us</span></a>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a href="#" className="hover-btn-new"><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="new-effect carousel-control-prev" href="#carouselExampleControls" role="button"
                    data-slide="prev">
                    <span className="fa fa-angle-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a className="new-effect carousel-control-next" href="#carouselExampleControls" role="button"
                    data-slide="next">
                    <span className="fa fa-angle-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Hero
