import React, { useState } from "react";

import profile from '../../image/3135715.png'
import './Admin.css';
import TongleOne from "../tongle/Tongle1";
import TongleTwo from "../tongle/Tongle2";
import Feedback from "../feedback/Feedback";

export default function Admin() {

    const [page,setPage]=useState(1)
    return (
        <div>

            <div className="container-fluid MainBox">
                <div className="sidePanel">
                    <aside>
                        <div className="Cardbox">

                            <div>
                                <img src={profile} width={"40px"} alt="Profile" height={"40px"} />
                            </div>
                            <div className="titleBox">
                                <label style={{ fontSize: "15px", fontWeight: "bold" }}> Hi Reader</label>
                                <label style={{ fontSize: "15px" }}>Here's Your News</label>
                            </div>
                        </div>
                        <div className="tonglrBox">
                            <div className="titleFont">
                                <label className="titleFont">View Tongle</label>
                            </div>
                            <div className="buttonBox">
                                <div className="ButtonBoxitem" onClick={()=>{setPage(1)}}>
                                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                                </div>
                                <div className="ButtonBoxitem1" onClick={()=>{setPage(2)}}>
                                <i className="fa fa-list" aria-hidden="true"></i>

                                </div>
                            </div>

                        </div>

                        <div className="tonglrBox">
                            <div className="titleFont">
                                <label className="titleFont">Have A Feedback</label>
                            </div>
                            <div className="buttonBox" onClick={()=>{setPage(3)}}>
                               <button className="btn btn-info" style={{fontSize:"15px"}}>We're Listening</button>
                            </div>

                        </div>
                        
                    </aside>
                </div>
                <div className="sideBoxMain">
                    {
                    page === 1?
                    <TongleOne/>
                    :
                    page === 2?
                    <TongleTwo/>
                    :
                    page === 3?
                    <Feedback/>
                    :
                    null
                    }
                </div>

            </div>

        </div>
    )
}