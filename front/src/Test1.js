import react from 'react'
import {Link} from "react-router"
import './Test1.css'
function Test1(){

    return(
  //      <>
        <div class="container my-3 bg-light">
        <div class="col-md-12 text-center">
    <Link to="/login"><button className="btn btn-primary btnn">LOG IN</button></Link>
    <Link to="/signup"><button className="btn btn-warning btnp">SIGN UP</button></Link>
        </div>
        </div>
//    </>
    )
}
export default Test1