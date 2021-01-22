import React from 'react';
import {Link} from 'react-router-dom'
import data from './data/data1.json'


const url="https://picsum.photos/id/1/200/300";

const Subject1=data.map((data)=>{
 
    return (
        
            <div className="card" key={data.id}>
                <img src={url} alt="logo" className="card-img-top img1" />
                <div className="card-body">
                    <h5 className="card-title">{data.subject}</h5>
                    <p className="card-text">{data.faculty}</p>
                     <button><Link to={'/tenthdetail/'+`${data.id  }`}>Details</Link></button>    
                </div>
            </div>        
        
    );
    
}
)

 const SubjectTenth=()=>{
     return (
        <div className="card-deck subject1">{Subject1}</div>
     );
 }
export default SubjectTenth;