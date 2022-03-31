import React from 'react';

import LastProduct from './LastProduct';
import Categories from './Categories';

function ContentRowCenter(){
    return (
        <div className="row">
            {/*<!-- Last Movie in DB -->*/}
            <LastProduct />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Categories />

        </div>
    )
}

export default ContentRowCenter;