import React from 'react';


function Header(){
    return(
        <React.Fragment>
			
				<nav className="navbar navbar-expand topbar mb-4 static-top shadow" id="nav">

					
					<ul className="navbar-nav ml-auto ">
				
					
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small" id='letra'>¡Hola, Admin!</span>
								
							</a>
						</li>

					</ul>

				</nav>
				

        </React.Fragment>
    )
}
export default Header;