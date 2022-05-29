import React, { useState } from 'react'

const Search = () => {
    var [title,setTitle]=useState("")
    const dataTitle=()=>{
        const data={"title":title}
        console.log(data)
    }
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Receipe Title</label>
                    <input onChange={(a)=>{setTitle(a.target.value)}} type="text" className="form-control"/>
                </div>
                
                <div className="col  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={dataTitle} className="btn btn-success">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Search