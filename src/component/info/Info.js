import React from "react";
import "./info.css";
import {Link} from 'react-router-dom'
const Info = () => {
  return (

     
        <div className="row mt-3 mx-2">
          <div className="col-md-6">
            <div className="card text-center">
           
              <div className="card-body">
                <h5 className="card-header card-title">Special title treatment</h5>
                <p className="card-text text-danger ">
                እንኳን ደህና መጡ፡፡ ለመመዝገብ በስልክዎት ወደ 7737 OK ብለው ይላኩ፡፡አገልግሎቱን ለ 3 ቀን በነፃ ከተጠቀሙ በኋላ በቀን አንድ ብር ብቻ ይከፍላሉ
                </p>
                <Link className="btn-success infoBtn">
                  Log In
                </Link>
              </div>
        
            </div>
          </div>
          <div className="col-md-6 top">
          <div className="card text-center">
         
              <div className="card-body">
                <h5 className="card-header card-title">Important Information</h5>
                <p className="card-text text-danger ">
                እንኳን ደህና መጡ፡፡ ለመመዝገብ በስልክዎት ወደ 7737 OK ብለው ይላኩ፡፡አገልግሎቱን ለ 3 ቀን በነፃ ከተጠቀሙ በኋላ በቀን አንድ ብር ብቻ ይከፍላሉ
                </p>
                <Link className="btn-success infoBtn">
                  Read More 
                </Link>
              </div>
        
            </div>
          </div>
        </div>
    
    
  );
};
export default Info;
