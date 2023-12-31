import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import  { useState, useEffect  } from "react";
import logox from "../../public/logox.png"

const Navbar=()=>{
    
  const navigate = useNavigate();

  useEffect(() => {
   
    const auth = getAuth();

    // Check if the user is logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
       
        navigate('/login', { replace: true });
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Logout function
  const handleLogout = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);

      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error during logout:', error.message);
  
    }
  };

  return(
    <>
       <nav className="navbar navbar-expand-lg text-white rounded-4  mb-3 ms-3 me-3 " style={{backgroundColor:"#202b3c"}}>
      <div className="container" style={{backgroundColor:"#202b3c"}}> 
        <a className="navbar-brand" href="#home">
<img src={logox} alt="" className='w-25' />
        </a>
   
      
        
          
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="btn text-white" 
                onClick={handleLogout}
                style={{ backgroundColor: '#202b3c', outline:"1px solid #1dafca" }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      
    </nav>

    </>
  )

}

export default Navbar;