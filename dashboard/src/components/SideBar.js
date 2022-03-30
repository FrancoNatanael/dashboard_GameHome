import React from 'react';
import Cards from './Cards'
import LastProduct from './LastProduct';
import LastUserCreated from './LastUserCreated';
import ListProducts from './ListProducts';
import ListUsers from './ListUsers';
import PrincipalContent from './ContentWrapper'
import {Link, Route, Routes} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" /*src={image}*/ alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Game Home</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/ListProducts">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Productos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Totals">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Totales</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/LastProduct">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Ultimo producto </span></Link>
                </li>
                
                {/*<!-- Buscador -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/ListUsers">
                        <i className="fas fa-search"></i>
                        <span>Usuarios</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            
            <Routes>
                <Route exact path="/" element={ <PrincipalContent />}/>
                    
                
                <Route path="/ListProducts" element={ <ListProducts /> }/>
                    
                
                <Route path="/Totals" element={ <Cards/>}/>
                   
                <Route path="/LastProduct" element={  <LastProduct/>}/>
                   
                    
               
                {/*<Route path="/ListUsers" component ={<ListUsers/>}/>*/}
                    
               
                {/*<Route component={NotFound} />*/}
            </Routes>
           
        </React.Fragment>
    )
}
export default SideBar;