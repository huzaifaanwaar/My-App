import axios from "axios";
import { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Todos = () => {
    const [todo, setTodo] = useState([]);
    const [loader, setLoader] = useState(false);

  const toptodos = () => {
    setLoader(true);
    axios
      .get(
        "https://jsonplaceholder.typicode.com/todos"
      )
      .then((response) => {
        setLoader(false);
                console.log(response);
        setTodo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    toptodos();
  }, []);
    return (
        <>
           <div className="container">
        <div className="row">
        <div className="text-center mt-2">
            <ScaleLoader size={20} color={"#467708"} loading={loader} />
          </div>
          {todo.map((value) => {
            return (
              <div className="card mt-3">
                <div className="card-body">
                <p className="card-text">{value.id}</p>
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.completed}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
        </>
    )
}
export default Todos;