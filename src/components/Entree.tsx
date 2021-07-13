import React from 'react'

function Entree() {
  return (
    <div className="collapsible-menu">
    <input type="checkbox" id="menu" />
    <label >Entree</label>
    <div className="menu-content">
        <ul>
            <li><div className="collapsible-menu">
            <input type="checkbox" id="menu" />
            <label >Steak</label>
            <div className="menu-content">
                <ul>
                    <li><div className="collapsible-menu">

            <div className="menu-content">
                <ul>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Italian</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Blue Cheese</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Ranch</li>

                </ul>
            </div>
            </div></li>
                    <li><div className="collapsible-menu">

            <div className="menu-content">
                <ul>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Italian</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Flat</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Sour Dough</li>

                </ul>
            </div>
            </div></li>


                </ul>
            </div>
            </div></li>

            <li><div className="collapsible-menu">
            <input type="checkbox" id="menu" />
            <label >Salmon</label>
            <div className="menu-content">
                <ul>
                    <li><div className="collapsible-menu">

            <div className="menu-content">
                <ul>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Italian</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Blue Cheese</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Ranch</li>

                </ul>
            </div>
            </div></li>



                </ul>
            </div>
            </div></li>

            <li><div className="collapsible-menu">
            <input type="checkbox" id="menu" />
            <label >Rice</label>
            <div className="menu-content">
                <ul>
                    <li><div className="collapsible-menu">

            <div className="menu-content">
                <ul>


                </ul>
            </div>
            </div></li>
                    <li><div className="collapsible-menu">

            <div className="menu-content">
                <ul>
                    <li><input type="checkbox" id="menu" />Italian</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Flat</li>
                    <li><a href="#"></a><input type="checkbox" id="menu" />Sour Dough</li>

                </ul>
            </div>
            </div></li>


                </ul>
            </div>
            </div></li>

        </ul>
    </div>
</div>
  )
}

export default Entree;
