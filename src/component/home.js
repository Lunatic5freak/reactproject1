import React from 'react'
import {Link} from 'react-router-dom'
import Fulldata from './data/fulldata.json'

const FullData=Fulldata.map((Fulldata)=>{
        return (
            <div className="card"  key={Fulldata.id}>
            <img src={Fulldata.image} alt="logo" className="card-img-top img1"  />
            <div className="card-body">
                <h5 className="card-title">{Fulldata.subject}</h5>
                <p className="card-text">{Fulldata.faculty}</p>
                 <button><Link to={'/allsubjectDetails/'+`${Fulldata.id}`}>Details</Link></button>    
            </div>
        </div>        
        );
    }
)

const Home=()=>{
    return (
        <div className="card-deck conten" >{FullData}</div>
    );
}

export default Home;