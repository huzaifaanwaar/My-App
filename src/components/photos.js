import axios from "axios";
import { useState, useEffect } from "react";
import ScaleLoader  from "react-spinners/ScaleLoader";

const Photos = () => {
  const [photo, setPhoto] = useState([]);
  const [loader, setLoader] = useState(false);
  const topphotos = () => {
    setLoader(true);
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setLoader(false);
        console.log(response);
        setPhoto(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    topphotos();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="text-center mt-2">
            <ScaleLoader size={20} color={"#467708"} loading={loader} />
          </div>
                    {photo.map((value) => {
            return (
              <div className="card mt-3">
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <img src={value.thumbnailUrl} />
                  <p className="card-text">{value.url}</p>
                  <p className="card-text">{value.thumbnailUrl}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Photos;
