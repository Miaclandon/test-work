import React from 'react';
import './NavbarMedium.css'
import NavbarMediumLeft from "./NavbarMediumLeft/NavbarMediumLeft";
import NavbarMediumRight from "./NavbarMediumRight/NavbarMediumRight";
import ComponentSearch from "./ComponentSearch/ComponentSearch";

function NavbarMedium() {
    return (
        <div className="navbar__medium">
            <React.Fragment>
                <NavbarMediumLeft/>
                <ComponentSearch/>
                <NavbarMediumRight/>
        </React.Fragment>
        </div>

    );
}

export default NavbarMedium;
