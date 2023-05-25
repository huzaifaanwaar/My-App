import MostPopular from "../data/popular.json"
function Mostpp(){
  return (
    <>
       <h1 className="text-center bg-success p-4 text-white mb-5 mt-5">Most Popular Posts</h1>
         <div className="container-fluid">
            <div className="row">
              {MostPopular.map((item, index) => (
                <div className="col-12  col-lg-4">
                <div className="card">
                    <img src={item.image} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.contant}</p>
                    </div>
                </div>
            </div>
              )
              )}
                

              
            </div>
         </div>
    
    </>
  )

}
export default Mostpp;