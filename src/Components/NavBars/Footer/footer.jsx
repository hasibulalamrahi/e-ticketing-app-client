import '../../../Styles/Footer/footer.css'

const Footer = ()=>{
    return (
      <>
        <div>
          <div className='footer-container'>
            <div className="footer-content">
              <h3>Foolish Developer</h3>
              <p>
                Foolish Developer is a blog website where you will find great
                tutorials on web design and development. Here each tutorial is
                beautifully described step by step with the required source
                code.
              </p>
              <ul className="socials">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-bottom">
              <p>
                copyright &copy;2021 <a href="#">foolishdeveloper</a>
              </p>

            </div>
          </div>
        </div>
      </>
    );
}

export default Footer;