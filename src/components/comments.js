import axios from "axios";
import { useState, useEffect } from "react";
import ScaleLoader  from "react-spinners/ScaleLoader";
const Comments = () => {
  const [comment, setComment] = useState([]);
  const [loader, setLoader] = useState(false);

  const topcomment = () => {
    setLoader(true);
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setLoader(false);
        console.log(response);
        setComment(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    topcomment();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="text-center mt-2">
            <ScaleLoader size={20} color={"#467708"} loading={loader} />
          </div>
          {comment.map((value) => {
            return (
              <div className="card mt-3">
                <div className="card-body">
                  <p className="card-text">{value.postId}</p>
                  <p className="card-text">{value.id}</p>
                  <h5 className="card-title">{value.name}</h5>
                  <p className="card-text">{value.email}</p>
                  <p className="card-text">{value.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Comments;
