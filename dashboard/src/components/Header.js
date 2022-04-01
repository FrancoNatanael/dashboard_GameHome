import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import { FcSearch } from "react-icons/fc"
import Css from '../assets/css/styles.css'

function Header(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand topbar mb-4 static-top shadow" id="nav">

					{/*<!-- Sidebar Toggle (Topbar) -->*/}
					

					{/*<!-- Topbar Navbar -->*/}
					<Navbar bg="light" expand="lg"id='search'  >
					<Container fluid>
					<Form className="d-flex " >
						<FormControl
						type="search"
						placeholder="Buscar"
						className="me-2"
						aria-label="Search"
						
						/>
						<Button variant="warning" id="side"><FcSearch/></Button>
					</Form>
					</Container>
					</Navbar>
					<ul className="navbar-nav ml-auto ">
					
					

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small" id='letra'>¡Hola, Admin!</span>
								
							</a>
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default Header;