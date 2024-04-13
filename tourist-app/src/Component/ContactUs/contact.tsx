import "./contact.css";

function contact() {
  return (
    <div className="page-container">
      <div className="content-container">
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>Fantastic Four Tourism</p>
          <p>Contact Information: 9666816471</p>
          <p>fantasticfour96@gmail.com</p>
          <p>RoadNo-2,BanjaraHills,Hyderabad</p>
          <div className="social-links">
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.twitter.com">Twitter</a>
            <a href="https://www.instagram.com">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default contact;