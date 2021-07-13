import React from 'react'

function Soup() {
  return (
    <div className="collapsible-menu">
                            <input type="checkbox" id="menu" />
                            <label >Soup</label>
                            <div className="menu-content">
                                <ul>
                                    <li>
                                    <div className="collapsible-menu">
                                    <input type="checkbox" id="menu" />
                                    <label >Minestrone</label>
                                    <div className="menu-content">
                                        <ul>
                                            <li><div className="collapsible-menu">
                                            <p>You might also want: </p>
                                    <input type="checkbox" id="menu" />
                                    <label >Bread</label>
                                    <div className="menu-content">
                                        <ul>
                                            <li><a href="#"></a><input type="checkbox" id="menu" />Breadsticks</li>
                
                
                                        </ul>
                                    </div>
                                    </div></li>
                                            <li><div className="collapsible-menu">
                
                
                                    </div></li>
                
                
                                        </ul>
                                    </div>
                                    </div></li>
                
                                    <li><div className="collapsible-menu">
                                    <input type="checkbox" id="menu" />
                                    <label >Hot and Sour</label>
                                    <div className="menu-content">
                                        <ul>
                                            <li><div className="collapsible-menu">
                                    <p>You might also want: </p>
                
                                    <input type="checkbox" id="menu" />
                                    <label >Bread</label>
                                    <div className="menu-content">
                                        <ul>
                                            <li><a href="#"></a><input type="checkbox" id="menu" />Breadsticks</li>
                
                
                                        </ul>
                                    </div>
                                    </div></li>
                                            <li><div className="collapsible-menu">
                
                
                                    </div></li>
                
                
                                        </ul>
                                    </div>
                                    </div></li>
                
                                    <li><div className="collapsible-menu">
                                    <input type="checkbox" id="menu" />
                                    <label >Miso</label>
                                    <div className="menu-content">
                                        <ul>
                                            <li><div className="collapsible-menu">
                                    <p>You might also want: </p>
                
                                    <input type="checkbox" id="menu" />
                                    <label>Bread</label>
                                    <div className="menu-content">
                                        <ul>
                                            <li><a href="#"></a><input type="checkbox" id="menu" />Breadsticks</li>
                
                
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
                
                                </ul>
                            </div>
                        </div>
  )
}

export default Soup;
