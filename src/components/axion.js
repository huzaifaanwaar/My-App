import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

const Axion = () => {
  const [news, setNews] = useState([]);
  const [loader, setLoader] = useState(false);

  const topnews = () => {
    setLoader(true);
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=eb9a17736d644fdda54da71f29bc708b"
      )
      .then((response) => {
        setLoader(false);
        console.log(response);
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    topnews();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="text-center mt-2">
            <ScaleLoader size={20} color={"#467708"} loading={loader} />
          </div>
          {news.map((value) => {
            return (
              <div className="card m-3" style={{ width: "18rem" }}>
                <img
                  src={value.urlToImage}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description}</p>
                  <Link to="/" className="btn btn-primary">
                    Main
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Axion;
