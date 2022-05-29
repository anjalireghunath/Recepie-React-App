import React, { useState } from 'react'

const ViewRec = () => {
    var [viewlist,setViewlist]=useState([
        {
            "title":"Aviyal",
            "category":"veg",
            "description":"It is very tasty",
            "preparedby":"Anjana"
        },
        {
            "title":"sambar",
            "category":"veg",
            "description":"It is very tasty",
            "preparedby":"Devika"
        },
        {
            "title":"Fish curry",
            "category":"non-veg",
            "description":"sea food",
            "preparedby":"Shamna"
        },
        {
            "title":"Ladu",
            "category":"veg",
            "description":"yellow food",
            "preparedby":"shamees"
        },
        {
            "title":"chicken curry",
            "category":"non-veg",
            "description":"fghvfgvhvgvhbhgbhbnj",
            "preparedby":"Lekshmi"
        }
    ])
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
           {viewlist.map((value,key)=>{
               return <div className='col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
               <div className="card" style={{height:500}}>
           
               <div className="card-body">
                 <p className="card-text">Title:  {value.title}</p>
                 <p className="card-text">Category:  {value.category}</p>
                 <p className="card-text">Description:  {value.description}</p>
                 <p className="card-text">Preparedby:  {value.preparedby}</p>
               </div>
             </div>
             </div>
           })}
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ViewRec