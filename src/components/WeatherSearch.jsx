const WeatherSearch =()=>{

    const handleSubmit=()=>{

    }
return(
    <div>
         <div className="row mb-3">
      <div className="col">
        <form onSubmit={handleSubmit}>
          <div className="container rounded p-3 text-white" style={{ backgroundColor: "#202b3c" }}>
            <div className="row">
              <div className="col">
                <label htmlFor="latitude" className="form-label">
                  Latitude:
                </label>
                <input type="text" className="form-control" id="latitude" placeholder="Enter latitude" required />
              </div>
              <div className="col">
                <label htmlFor="longitude" className="form-label">
                  Longitude:
                </label>
                <input type="text" className="form-control" id="longitude" placeholder="Enter longitude" required />
              </div>
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
)

    
}
export default WeatherSearch;