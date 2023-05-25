import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

const Postdetail = () => {
  const params = useParams();

  const [postdet, setPostdet] = useState([]);
  const [loader, setLoader] = useState(false);

  const toppostdet = () => {
    const id = params.id;
    setLoader(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setLoader(false);
        console.log(response);
        setPostdet(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    toppostdet();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card mt-3">
          <div className="text-center mt-2">
            <ScaleLoader size={20} color={"#467708"} loading={loader} />
          </div>
            <div className="card-body">
              <p className="card-text">{postdet.id}</p>
              <h5 className="card-title">{postdet.userId}</h5>
              <p className="card-text">{postdet.title}</p>
              <p className="card-text">{postdet.body}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Postdetail;
