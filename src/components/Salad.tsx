import React from 'react';

interface Sal{
   name: string; 
   choices: { 
       name: string;
     }[]; 
   related: { 
       name: string; 
       choices: { 
           name: string; 
        }[]; 
    }[];
}


function Salad({food}:{food:Sal}) {
  return (
     <>
                   <div className="card highlight-card card-small" >

</div>
    <div className="collapsible-menu">
    
<input type="checkbox" id="menu" />
<label > {food.name} </label>
<div className="menu-content">
<ul>
{food.choices.map((sub)=>
<li>
<div className="collapsible-menu">
<input type="checkbox" id="menu" />                                                                                                                       
<label >{sub.name}</label>
<div className="menu-content">
 <ul>
 {food.related.map((subMenu)=>
     <li>
       <div className="collapsible-menu">
     <p>You might also want: </p>
<input type="checkbox" id="menu" />
<label >{subMenu.name}</label>
<div className="menu-content">
 <ul>
 {subMenu.choices.map((subm)=>
     <li><input type="checkbox" id="menu" />{subm.name}</li>
 )}
 </ul>
</div>
</div>
</li>
 )}
 </ul>
</div>
</div></li>

)}
     
</ul>
</div>
</div>
</>
       
 )
}

export default Salad;
