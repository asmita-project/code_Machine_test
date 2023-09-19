import axios from "axios";
import React, { useEffect, useState } from "react";
import Profile from '../../image/3135715.png';
import './tongle.css'

import Swal from "sweetalert2";
export default function TongleOne() {

    const [Data, SetData] = useState([])
    const [deletearray,setdeletarray]=useState([])

    useEffect(() => {
        getallCard()
    }, [])

    const getallCard = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res.data)
                SetData(res.data)
                setdeletarray(res.data)
            }).catch((err) => {
                console.log("error")
            })
    }

    const removeData =(id)=>{
        const updatedItems = Data.filter((_,index) => index !== id);
        SetData(updatedItems);
        Swal.fire(
            'Deleted',
            'Successfully',
            'success'
        )
     
    }

    // console.log(Data,"datadelete")
   


    return (
        <div>
            <div className="tableBox">
                {
                    Data.map((item, index) => (
                        <div key={item.id} className="CardMain">
                            <div className="CardBox">
                            <div className="CardItem">
                              <div>
                                <img src={Profile} alt="image" width={"60px"} height={"60px"}/>
                              </div>
                              <div>
                                <div className="titleBox">
                                    <label style={{fontSize:"17px",fontWeight:"bold"}}>{item.title}</label>
                                    <label style={{fontSize:"17px"}}>{item.body.substring(0,50)}</label>
                                    <label style={{fontSize:"15px",fontWeight:"bold",color:"grey"}}>Mon, 21 Des 2023 14:57 GMT</label>
                                </div>
                              </div>
                            </div>
                            <div className="removecircle" onClick={()=>{removeData(index)}}>
                            <i className="fa fa-remove" style={{fontSize:"25px"}}></i>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}