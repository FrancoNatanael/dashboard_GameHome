import React from 'react';

import LastProduct from './LastProduct';
import Categories from './Categories';
import LastUserCreated from './LastUserCreated';

function ContentRowCenter(){
    return (
        <div className="row">
            
            <LastProduct />
            <LastUserCreated />
            
            <Categories />

        </div>
    )
}

export default ContentRowCenter;