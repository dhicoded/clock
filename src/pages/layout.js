import { Outlet, Link } from "react-router-dom";

let Layout=()=>{
    return (    
    <div className="d-grid gap-2">
    <Link to="clock">
        <h1>              Clock          </h1>
    </Link>
    <Link to="stopwatch">
    <h1>          Stopwatch      </h1>
    </Link>    
    <Link to="timer">
    <h1>          Timer      </h1>
  </Link>
  </div>  
  );
}

export default Layout;