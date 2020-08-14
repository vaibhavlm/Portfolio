import React from 'react';
const date = new Intl.DateTimeFormat('en-US', {year: "numeric"}).format(new Date(Date.parse(2020)))
function Footer() {
    return (
        <footer>
        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-auto mb-4">
                    <p>Copyright &copy; {date} All rights reserved <br/> Designed by Vaibhav | Inspired by <a style={{color:"#ccc"}} href="https://colorlib.com">Colorlib</a></p>
                </div>
            </div>
            
  <div className="row">
                    <div className="col-12 pb-4">
                        <div className="text-center">
                            <a className="px-2 media-icon" href="#"><i className="fa fa-github fa-lg icon"></i></a>
                            <a className="px-2 media-icon" href="#"><i className="fa fa-linkedin fa-lg icon"></i></a>
                            <a className="px-2 media-icon" href="http://google.com/+"><i className="fa fa-google fa-lg icon"></i></a>
                            <a className="px-2 media-icon" href="#"><span className="iconify fa-lg icon" data-icon="simple-icons:hackerrank"></span></a>
                            <a className="px-2 media-icon" href="#"><i className="fa fa-instagram fa-lg icon"></i></a>
                            <a className="px-2 media-icon" href="#"><i className="fa fa-facebook fa-lg icon"></i></a>
                        </div>
                    </div>
                </div>
        </div>
        </footer>
    );
}

export default Footer;