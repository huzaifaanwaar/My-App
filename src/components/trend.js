import Mostpp from './mostpp'
import Sports from './sports';
import Tranding from '../data/trend.json';

function Trend() {
    return (
        <>
            <div className='bg-light'>
                <h1 className="text-center bg-success p-4 text-white mb-5">Trending</h1>
                <div className="container-fluid">
                    <div className="row">
                        {Tranding.map((item, index) => (
                            <div className="col-lg-4 mb-5" key={index}>
                                <div className="card">
                                    <img src={item.image} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.contant}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Mostpp />
                <Sports />
            </div>
        </>
    )
}
export default Trend;