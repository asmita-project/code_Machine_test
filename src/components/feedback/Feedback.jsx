import React, { useState } from "react";
import './feedback.css'
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addFeedback } from "../../redux/action";

export default function Feedback() {

    const dispatch = useDispatch()
    const selectdata = state => state.UserReducer.feedBack
    const data = useSelector(selectdata)

    const [feedbackvalue, setFeedbackValue] = useState({
        first_name: "",
        LastName: "",
        address: "",
        country: "",
        email: "",
        phone: ""
    })


    const handlechange = (name) => (e) => {
        setFeedbackValue({ ...feedbackvalue, [name]: e.target.value })
        console.log(feedbackvalue)
    }
    const resetData = () => {
        feedbackvalue.first_name = "";
        feedbackvalue.LastName = "";
        feedbackvalue.email = "";
        feedbackvalue.phone = "";
        feedbackvalue.address = "";
        Swal.fire(
            'Reset',
            'Successfully',
            'success'
        )
    }
    const submitData = (e) => {
        e.preventDefault()

        const { first_name, LastName, email, phone, address, country } = feedbackvalue
        let data = {
            first_name: first_name,
            LastName: LastName,
            address: address,
            country: country,
            email: email,
            phone: phone
        }
        dispatch(addFeedback(data))
        resetData()

        // Swal.fire(
        //     'Feedback Added',
        //     'Successfully',
        //     'success'
        // )


        console.log(data, "datasubmit")



    }
    console.log(data, "useselector")




    return (
        <div className="tableBox">
            <div className="feedbackBox">
                <div>
                    <h3 style={{ textAlign: "left" }}>Thank You So Much For Taking The Time</h3>
                    <h5 style={{ textAlign: "left" }}>Please Provie A Below Details!</h5>
                </div>
                <div style={{ marginTop: "10px" }}>

                    <form id="form" onSubmit={submitData}>

                        <div className="form-group">
                            <label >First Name</label>
                            <input type="text" value={feedbackvalue.first_name} onChange={handlechange("first_name")} className="form-control inputstyle" id="inputEmail4" />
                        </div>
                        <div className="form-group">
                            <label >Last Name</label>
                            <input type="text" value={feedbackvalue.LastName} onChange={handlechange("LastName")} className="form-control inputstyle" id="inputPassword4" />
                        </div>
                        <div className="form-group">
                            <label >Address</label>
                            <textarea rows="4" cols="4" type="text" value={feedbackvalue.address} onChange={handlechange("address")} className="form-control inputstyle" id="inputAddress" />
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control inputstyle" value={feedbackvalue.country} onChange={handlechange("country")} id="inputAddress2" />
                        </div>
                        <div className="form-group ">
                            <label >Email Id</label>
                            <input type="email" className="form-control inputstyle" value={feedbackvalue.email} onChange={handlechange("email")} id="inputCity" />
                        </div>

                        <div className="form-group ">
                            <label >Phone Number</label>
                            <input type="tel" className="form-control inputstyle" min={10} value={feedbackvalue.phone} onChange={handlechange("phone")} id="inputCity" />
                        </div>

                        <div>
                            <button type="submit" value={"submit"} className="btn btn-primary">Submit Feedback</button>&nbsp;
                            <button type="cancel" onClick={() => { resetData() }} value={"cancel"} className="btn btn-primary">Reset</button>

                        </div>



                    </form>

                </div>

            </div>
        </div>
    )
}