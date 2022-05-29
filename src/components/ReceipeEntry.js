import React, { useState } from 'react'
import Header from './Header'

const ReceipeEntry = () => {
    var [title,setTitle]=useState("")
    var [category,setCategory]=useState("")
    var [description,setDescription]=useState("")
    var [preparedby,setPreparedby]=useState("")
    const titleData=()=>{
        const data={"title":title,"category":category,"description":description,"preparedby":preparedby}
        console.log(data)
    }
  return (
    <div>
<Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Receipe Title</label>
                    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Category</label>
                    <select onChange={(e)=>{setCategory(e.target.value)}} name="" id="" className="form-control">
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Description</label>
                    <textarea onChange={(e)=>{setDescription(e.target.value)}} name="" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Prepared By</label>
                    <input onChange={(e)=>{setPreparedby(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={titleData} className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default ReceipeEntry