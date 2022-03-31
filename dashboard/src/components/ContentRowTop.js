import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import Cards from './Cards';
import ListProducts from './ListProducts';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h2 className="h3 mb-0 text-gray-800">Lo que tenés que saber:</h2>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<Cards />
					<ContentRowCenter />
					<ListProducts />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;