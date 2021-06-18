const Footer = () => {
    return (
        <>
            <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="widget clearfix">
                            <div className="widget-title">
                                <h3>About US</h3>
                            </div>
                            <p> The College of Technology (COT) of the university of Buea was created as a component of the university by decree No.93/034 of 19 January 1993. The college is dedicated in providing high quality education.</p>
                            <div className="footer-right">
                                <ul className="footer-links-soi">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-github"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="widget clearfix">
                            <div className="widget-title">
                                <h3>Information Link</h3>
                            </div>
                            <ul className="footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="widget clearfix">
                            <div className="widget-title">
                                <h3>Contact Details</h3>
                            </div>

                            <ul className="footer-links">
                                <li><a href="mailto:#">info@yoursite.com</a></li>
                                <li><a href="#">www.yoursite.com</a></li>
                                <li>PO Box 16122 Collins Street West Victoria 8007 Australia</li>
                                <li>+61 3 8376 6284</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

        <div className="copyrights">
            <div className="container">
                <div className="footer-distributed">
                    <div className="footer-center">
                        <p class="footer-company-name">All Rights Reserved. &copy; 2021 <a href="#">COT-UB</a> Design
                            By : <a href="https://google.com">NGORAN_THE_NERD & Partner</a></p>
                    </div>
                </div>
            </div>
        </div>

            <a href="#" id="scroll-to-top" className="dmtop global-radius"><i className="fa fa-angle-up"></i></a>
            
        </>
    )
}

export default Footer
