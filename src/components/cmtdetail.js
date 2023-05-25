import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ScaleLoader  from "react-spinners/ScaleLoader";

const Cmtdetail = () => {
  const params = useParams();

  const [cmtdet, setCmtdet] = useState([]);
  const [loader, setLoader] = useState(false);

  const topcmtdet = () => {
    setLoader(true);
    const id = params.id;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        setLoader(false);
        console.log(response);
        setCmtdet(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    topcmtdet();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="card mt-3">  
        <div className="text-center mt-2">
            <ScaleLoader size={20} color={"#467708"} loading={loader} />
          </div>
          {cmtdet.map((value) => (
            <div className="card-body">
              <p className="card-text">{value.postId}</p>
              <p className="card-text">{value.id}</p>
              <h5 className="card-title">{value.name}</h5>
              <p className="card-text">{value.email}</p>
              <p className="card-text">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Cmtdetail;
