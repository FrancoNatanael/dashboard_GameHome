import React from 'react';

import LastProduct from './LastProduct';
import Categories from './Categories';
import LastUserCreated from './LastUserCreated';

function ContentRowCenter(){
    return (
        <div className="row">
            {/*<!-- Last Movie in DB -->*/}
            <LastProduct />
            <LastUserCreated />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Categories />

        </div>
    )
}

export default ContentRowCenter;