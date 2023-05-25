function Input(){
    return (
        <>
        <div className="p-4 mb-4 bg-danger">
        <h3 className="text-white">Subscribe to newsletter</h3>
        <div className="input-group">
            <input type="search" class="form-control rounded" placeholder="Enter You Email" aria-label="Enter Your Email" aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-primary text-white border-white">subscribe</button>
        </div>
        </div>
        </>
    )
}
export default Input;