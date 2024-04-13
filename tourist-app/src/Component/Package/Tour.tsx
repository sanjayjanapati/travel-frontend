import { useEffect, useState } from "react";
import "./Tour.css";
import axios from "axios";
import "./Tour.css";
import { Link } from "react-router-dom";

function Tour() {
  interface Tours {
    name: string;
    imgUrl: string;
    price: string;
  }
  const [place, setPlaces] = useState<Tours[]>([]);
  useEffect(() => {
    axios.get<Tours[]>("http://localhost:8080/tourism/get").then((res) => {
      console.log(res.data);
      setPlaces(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="heading">OUR POPULAR HOLIDAY PACKAGES</h1>
      <div className="container" style={{ marginLeft: "6.5em" }}>
        <div className="row">
          {place.map((place, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div style={{ overflow: "hidden", maxHeight: "200px" }}>
                  <img
                    src={place.imgUrl}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{place.name}</h5>
                  <p className="card-text">Starting Price at/- {place.price}</p>
                  <a href="#" className="btn btn-primary">
                    Customise & Send Enquiry
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="row mt-4">
        <div className="col text-center">
          <Link to="/" className="btn btn-secondary" style={{color:"white",background:"green"}}>
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Tour;
