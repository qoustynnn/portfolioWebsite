import React from "react";

function Footer(props) {
  return (
    <footer className="site-footer">

        <div class="custom-shape-divider-top-1646009558">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      
      <div className="footer">
          <div className="col-12 footer-top">
         <h2 className="footer-header">Get In Touch!</h2>
            <a className="email-btn" href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%71%6F%75%73%74%79%6E%40%67%6D%61%69%6C%2E%63%6F%6D">
              Email Me
            </a>
          </div>
          <div className="col text-center mb-5">
            <a className="link" href="#home">
              Home
            </a>
            <a className="link" href="#portfolio">
              Portfolio
            </a>  
            <p className="credits">© Qoustyn Yang</p>
          </div>
        </div>
    </footer> 
  );
}

export default Footer;
