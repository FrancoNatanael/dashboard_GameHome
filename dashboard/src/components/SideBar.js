import React from 'react';
import Cards from './Cards'
import LastProduct from './LastProduct';
import ListProducts from './ListProducts';
import Categories from './Categories';
import ListUsers from './ListUsers';
import PrincipalContent from './ContentWrapper'
import {Link, Route, Routes} from 'react-router-dom';
import { FcCustomerSupport, FcBarChart, FcSearch, FcSelfServiceKiosk, FcHome,  FcDataBackup} from "react-icons/fc";
import Logo from '../assets/image/logo-174px.ico'








function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar" style={{background: "#5529ac"}}>

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-50" src={Logo} alt="Game Home"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active" >
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <FcHome/>
                        <strong id='inicio'>INICIO</strong></Link>
                </li>

                <hr className="sidebar-divider"/>

              
                <div className="sidebar-heading">Opciones</div>

                <li className="nav-item">
                    <Link className="nav-link" to="/Totals">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <FcBarChart/>
                        <span id='actions'>Totales</span></Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link" to="/ListProducts">
                        <i className="fas fa-fw fa-folder"></i>
                        <FcSearch/>
                        <span id='actions'>Lista de productos</span>
                    </Link>
                </li>

                
                

               
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/LastProduct">
                        <i className="fas fa-fw fa-table"></i>
                        <FcSelfServiceKiosk/>
                        <span id='actions'>Último producto</span></Link>
                </li>
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/Categories">
                        <i className="fas fa-search"></i>
                        < FcDataBackup/>
                        <span id='actions'>Categorías</span>
                    </Link>
                </li>
                
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/ListUsers">
                        <i className="fas fa-search"></i>
                        < FcCustomerSupport/>
                        <span id='actions'>Usuarios</span>
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
                   
                <Route path="/Categories" element={  <Categories/>}/>     
               
                <Route path="/ListUsers" element ={<ListUsers/>}/>
                    
               
                {/*<Route component={NotFound} />*/}
            </Routes>
           
        </React.Fragment>
    )
}
export default SideBar;