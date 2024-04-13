import { Link } from 'react-router-dom';
import './about.css';
function About() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="jumbotron jumbotron-video mb-4 position-relative">
            <div className="video-overlay"></div>
            <video autoPlay loop muted className="w-100 h-100">
              <source src="https://videos.pexels.com/video-files/3214448/3214448-uhd_3840_2160_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="text-white position-absolute top-50 start-50 translate-middle">
              <h1 className="display-4" >Welcome to ExploreWorld</h1>
              <p className="lead" >Your gateway to unforgettable adventures</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-12">
          <div className="about-section p-4 rounded">
            <h2 className="text-center mb-4">About Us</h2>
            <p>ExploreWorld is your trusted partner in discovering the world's most breathtaking destinations. Our mission is to provide unforgettable travel experiences that exceed your expectations.</p>
            <p>With a team of passionate travelers and expert guides, we curate unique itineraries that cater to every type of adventurer. Whether you're seeking adrenaline-pumping activities, cultural immersion, or serene getaways, we have the perfect journey for you.</p>
            <p>At ExploreWorld, we believe that travel has the power to enrich lives and foster connections across borders. Join us in exploring the wonders of our planet and creating memories that will last a lifetime.</p>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-12">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <div className="row">
            <div className="col-lg-3 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">"Absolutely amazing experience! The tour guides were knowledgeable and friendly, and the itinerary was well-planned. Will definitely book with ExploreWorld again!"</p>
                  <p className="card-text star-rating">&#9733;&#9733;&#9733;&#9733;</p>
                  <p className="card-text"><small className="text-muted">- John Doe</small></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">"Fantastic service! The tour exceeded my expectations. Knowledgeable guides, breathtaking sights, and seamless organization. Highly recommend!"</p>
                  <p className="card-text star-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                  <p className="card-text"><small className="text-muted">- Jane Smith</small></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">"I had an unforgettable experience with ExploreWorld. The trip was well-planned, and the guides were incredibly knowledgeable and friendly. Can't wait for my next adventure!"</p>
                  <p className="card-text star-rating">&#9733;&#9733;&#9733;</p>
                  <p className="card-text"><small className="text-muted">- Robert Johnson</small></p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">"Outstanding experience! ExploreWorld made our trip unforgettable. Everything was well-organized, and the guides were exceptional. Highly recommend booking with them!"</p>
                  <p className="card-text star-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                  <p className="card-text"><small className="text-muted">- Emily Brown</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 text-center">
          <Link to="/" className="btn btn-primary">Return to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default About;
