import { Link } from 'react-router-dom';
import './Home.css';
import temp from '../images/401-logo.png';
function Home() {
  return (
    <div>
      <div className="webpage">
        <video muted autoPlay loop plays-inline className="back-video">
          <source src="https://videos.pexels.com/video-files/4119480/4119480-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <nav>
          <img src={ temp } alt="logo"/>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <Link to="/package">POPULAR PACKAGES</Link>
            </li>
            <li>
              <Link to="/aboutus">ABOUT US</Link>
            </li>
            <li>
              <Link to="/contactus">CONTACT US</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <h1>TRAVEL</h1>
          <Link to='/package'>Explore</Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
