import React from 'react';
import {Link,Route,BrowserRouter,Switch} from 'react-router-dom';
import Subjectdetail from './subject-detail';
import Subject from './subjects';
import Home from './home'
import Subjecttenth from './subject-tenth'
import Subjectdetailtenth from './subjectdetail-tenth'
import Alldetails from './alldetails'

// main page
//of the application


const Header=()=>{
    return (
        <BrowserRouter>
        <div className="header">
            <h1>welcome here</h1>
            <h3>here you will find all information about diferent subject of different class</h3>
            <div className="container">
        <nav className="navbar navbar-expand-md bg-primary navbar-dark" style={{justifyContent:'center'}}>
        <p className="navbar-brand">Book</p>
			<button className="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#collapsibleNavbar">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="navbar navbar-collapse" id="collapsibleNavbar">
				<ul className="navbar-nav" style={{marginLeft:'30%'}}>
                    	<li className="nav-item">
                        <Link to="/" style={{color:'black'}}>Home</Link>
					</li>
                
                    <li className="nav-item">
                        <Link to="/nineth" style={{color:'black'}} className="nav-link">class-9</Link>
                    </li>
                        <Link to="/tenthclass" style={{color:'black'}}>class-10</Link>
					<li className="nav-item">
						
					</li>
					
				</ul>
			</div>
		</nav>
	    </div>
        </div>
        <Switch>
            <Route path="/nineth" exact component={Subject} />
            <Route path="/details/:id" exact  component={Subjectdetail}></Route>
            <Route path="/tenthclass" exact component={Subjecttenth}></Route>
            <Route path="/tenthdetail/:id" exact  component={Subjectdetailtenth}></Route>
            <Route path="/allsubjectDetails/:id" exact component={Alldetails}></Route>
            <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Header;