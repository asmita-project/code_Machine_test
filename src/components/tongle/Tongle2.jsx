import axios from "axios";
import React, { useEffect, useState } from "react";
import flower from '../../image/images.jfif';
import Swal from "sweetalert2";
import './tongle.css'

export default function TongleTwo() {

    const [Data, SetData] = useState([])

    const [randomData,setRandomData]=useState([
        {
            id:1,
            name:"asmita"
,
        },
        {
            id:2,
            name:"samiksha"
,
        },
        {
            id:3,
            name:"amita"
,
        },
        {
            id:4,
            name:"kajal"
,
        }
    ])

    useEffect(() => {
        getallCard()
    }, [])

    const getallCard = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res.data)
                SetData(res.data)
            }).catch((err) => {
                console.log("error")
            })
    }
    const removeData =(id)=>{
        const updatedItems = Data.filter((item,index) => index !== id);
        console.log(updatedItems,"updateitem")
        SetData(updatedItems);
        Swal.fire(
            'Deleted',
            'Successfully',
            'success'
        )
     
    }

   
    return (
        <div className="tableBox">
            <div className="row">
                {
                    Data.map((item, index) => (
                        <div key={item.id} className="col-sm-4">

                            <div className="CardBoxData">
                                <div style={{ height: "50%" }}>
                                    <div className="removeboxitem" onClick={()=>{removeData(index)}}>
                                        <i className="fa fa-remove" style={{ fontSize: "25px",color:"orange" }}></i>

                                    </div>
                                    <div className="descriptionbox">

                                        <label style={{ fontSize: "17px", fontWeight: "bold" ,textAlign:"left"}}>{item.title.substring(0, 50)}</label>
                                        <label style={{ fontSize: "17px",textAlign:"left" }}>{item.body.substring(0, 50)}</label>
                                        <label style={{ fontSize: "15px", fontWeight: "bold", color: "grey" }}>Mon, 21 Des 2023 14:57 GMT</label>
                                    </div>
                                </div>


                                <div style={{ height: "50%" }}>
                                    <div className="imagebox">
                                        <img src={flower} alt="image" width={"100%"} height={"100%"} style={{borderRadius:"5px"}} />
                                    </div>
                                </div>

                            </div>




                        </div>
                    ))
                }
            </div>


        </div>
    )
}