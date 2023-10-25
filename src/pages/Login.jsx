
import sideimg from "../../public/Images/login.avif"
import LoginForm from "../components/Loginform";


const Login=()=>{


    return (
        <section className="vh-100"  style={{backgroundColor:"#303837"}}>
        <div className="container py-5 h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: '1rem' , backgroundColor:"#0b121e"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
           
                    <img
                      src={sideimg}
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: '1rem 0 0 1rem' }}
                    />
                   
                
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                   <LoginForm></LoginForm>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Login;
