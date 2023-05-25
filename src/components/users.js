import axios from "axios";
import { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Users = () => {
    const [user, setUser] = useState([]);
    const[loader, setLoader] = useState(false);
  const topusers = () => {
    setLoader(true);
    axios
      .get(
        "https://jsonplaceholder.typicode.com/users"
      )
      .then((response) => {
        setLoader(false);
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    topusers();
  }, []);
    return (
        <>
           <div className="container">
        <div className="row">
          <div className="text-center mt-2">
            <ScaleLoader size={20} color={"#467708"} loading={loader} />
          </div>
          {user.map((value) => {
            return (
              <div className="card mt-3">
                <div className="card-body">
                <p className="card-text">{value.id}</p>
                  <h5 className="card-title">{value.name}</h5>
                  <p className="card-text">{value.username}</p>
                  <p className="card-text">{value.email}</p>
                  <p className="card-text">{value.address.street}</p>
                  <p className="card-text">{value.address.suite}</p>
                  <p className="card-text">{value.address.city}</p>
                  <p className="card-text">{value.address.geo.lat}</p>
                  <p className="card-text">{value.address.geo.lng}</p>
                  <p className="card-text">{value.phone}</p>
                  <p className="card-text">{value.website}</p>
                  <p className="card-text">{value.company.name}</p>
                  <p className="card-text">{value.company.catchPhrase}</p>
                  <p className="card-text">{value.company.bs}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
        </>
    )
}
export default Users;