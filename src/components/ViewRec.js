import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const ViewRec = () => {
    var [viewlist,setViewlist]=useState([])
    axios.get("http://localhost:4008/api/recview").then((response)=>{
        console.log(response.data)
        setViewlist(response.data)
    })

    const deleteData=(id)=>{
        const data={"_id":id}
        console.log(data)
        axios.post("http://localhost:4008/api/delete",data).then((response)=>{
            if(response.data.status=="success")
            {
                alert("successfully deleted")
            }
            else
            {
                alert("failed to delete")
            }
        })
        }

  return (
    <div>
<Header/>
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
           <center>   <button onClick={()=>{deleteData(value._id)}} className="btn btn-danger">DELETE</button></center>
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