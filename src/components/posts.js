import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

const Posts = () => {
  const [post, setPost] = useState([]);
  const [loader, setLoader] = useState(false);

  const topposts = () => {
    setLoader(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setLoader(false);
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    topposts();
  }, []);
  return (
    <>
      <table className="table table-bordered w-60">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">UserID</th>
            <th scope="col">Title</th>
            <th scope="col">Describtion</th>
            <th scope="col">View</th>
            <th scope="col"> Comments</th>
          </tr>
        </thead>
        {loader ? (
          <tr>
            <td colSpan="6">
            <div className="text-center mt-2">
            <ScaleLoader size={20} color={"#467708"} loading={loader} />
          </div>
            </td>
          </tr>
        ) : null}

        {post.map((value) => (
          <tbody>
            <tr>
              <th scope="row">{value.id}</th>
              <td>{value.userId}</td>
              <td>{value.title}</td>
              <td>{value.body}</td>
              <td>
                <Link
                  to={`/posts/${value.id}`}
                  className="btn btn-success p-1 m-1"
                >
                  View
                </Link>
              </td>
              <td>
                <Link to={`/posts/${value.id}/comments`} className="btn btn-success ">
                  Read !
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
export default Posts;
