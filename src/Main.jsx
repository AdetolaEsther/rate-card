import React from "react";
import  './Main.css';

const Main = () => {
    return (
        <div className="container-fluid">
            <div className="container"> 
            <h3>Uploaded Rate Card Data</h3>
            <div className="row">
                <div className="col">
                    <form id="rateCardForm">  
                    <div className="mb-3">
                       <label className="form-label">Customer ID</label> 
                       <input type="text"className="form-control form-control-lg" id="customerID" placeholder="enter customer id" aria-describedby="customerIDHelp"></input>
                       <div id="customerIDHelp" className="form-text">Entering a customer id will result in a custom rate card created for that account</div>
                    </div>
                    <div className="mb-3">
                        <label for="rateCardName" className="form-label">Name</label>
                        <input type="text" className="form-control form-control-lg" id="rateCardName" placeholder="enter rate card name"/>
                    </div>
                    <div className="mb-3">
                    <label for="rateType" className="form-label">Rate Type</label>
                            <select className="form-select form-control" aria-label="rate type" id="rateType">
                                <option selected>Select Rate Type</option>
                                <option value="delivery">Delivery</option>
                                <option value="fleet">Vehicle Booking</option>
                            </select>
                    </div>
                    <div className="mb-3">
                    <label for="formFileLg" className="form-label">Select file (.xlsx)</label>
                            <input className="form-control form-control-lg" id="formFileLg" type="file" required/>
                            <div id="fileError" className="invalid-feedback">Please select a file.</div>
                    </div>
                    <button className="btn btn-primary btn-lg">Submit</button>

                    </form>
                    <div className="dataTable" >
                        <h4>Records List</h4>
                        <table className="table" >
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Customer ID</th>
                                    <th scope="col">Rate Type</th>
                                </tr>
                            </thead>
                            <tbody id="rateCardTableBody"></tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div> 
        </div>
    );
  }

export default Main;