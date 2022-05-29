import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
const [data,setData]=useState([
    {
        "title":"",
        "category":"",
        "description":"",
        "preparedby":""
    }
])

    var [title,setTitle]=useState("")
    const dataTitle=()=>{
        const data={"title":title}
        console.log(data)
        axios.post("http://localhost:4008/api/search",data).then((response)=>{
            console.log(response.data)
            setData(response.data)
        })
    }

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
{data.map((value,key)=>{
    return <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Category</label>
                    <select value={value.category} name="" id="" className="form-control">
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Description</label>
                    <input value={value.description} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Prepared By</label>
                    <input value={value.preparedby} type="text" className="form-control"/>
                </div>
            </div><br></br>
            <button className='btn btn-danger' onClick={()=>{deleteData(value._id)}}>DELETE</button>
        </div>
    </div>
</div>
})}


    </div>
  )
}

export default Search