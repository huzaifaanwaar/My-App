import Food from "../data/sports.json"
function Sports(){
    return(
        <>
        <h1 className="p-4 text-center bg-success text-white mb-5 mt-5">Sports and Business </h1>
        <div className="card mb-5 ms-2 me-2">
        <div className="row p-3 mb-1">
            {Food.map((item, index) => (
                <>
                <div className="col-lg-2 p-3 ">
                <img src={item.img}  alt="image" className="w-75 h-50 rounded"/>
                </div>
                <div className="col-lg-4 ">
                    <div className="card-body border">
                        <h5 className="card-title fs-3">{item.title}</h5>
                        <p className="card-text fs-5">{item.text}</p>
                    </div>
                </div>
                </>
                

            ))}
            
        </div>
        </div>
        </>
    )
}
export default Sports;