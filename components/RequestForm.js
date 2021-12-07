import React, { useState } from 'react';
import Image from "next/image"
import RequestFormSent from "../components/RequestFormSent";

const RequestForm = () => {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [cName, setcName] = useState('');
    const [Email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    // const [Address2, setAddress2] = useState('');
    const [City, setCity] = useState('');
    const [Zip, setZip] = useState('');
    const [USState, setState] = useState('');
    const [tType, settType] = useState('');
    const [freightGuard, setfreightGuard] = React.useState('');
    const [region48, setRegion48] = useState('');
    const [Southeast, setSoutheast] = useState('');
    const [Southwest, setSouthwest] = useState('');
    const [Northeast, setNortheast] = useState('');
    const [Midwest, setMidwest] = useState('');
    const [WestCoast, setWestCoast] = useState('');

    const [processing, setProcessing] = useState('');
    const [succeeded, setSucceeded] = useState(false);
    
    const handleRegion = () => { setRegion48(!region48); }
    const handleSoutheast = () => { setSoutheast(!Southeast)}
    const handleSouthwest = () => { setSouthwest(!Southwest)}
    const handleNortheast = () => { setNortheast(!Northeast)}
    const handleMidwest = () => { setMidwest(!Midwest)}
    const handleWestCoast = () => { setWestCoast(!WestCoast)}

    const submitRequest = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const response = await fetch("/api/servicerequest", { 
            method: 'POST', 
            headers: { 
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({ fName, lName, cName, Email, Address, City, Zip, USState, tType, freightGuard, region48, Southeast, Southeast, Southwest, Northeast, Midwest, WestCoast }) 
        });
        const resData = await response.json();
        if (resData.status === 'success'){
            setProcessing(false);
            setSucceeded(true);
        }else if(resData.status === 'fail'){
            setProcessing(false);
            alert("Message failed to send.")
        }
    };

    return (
        <div className="container">
            <h4 className="text-center display-6 mb-5">Please Complete the Form Below</h4>
                {succeeded ? (<RequestFormSent />) : (
                    
            <form className="dispatch-form row g-2 border border-3 rounded py-4 bg-dark" onSubmit={submitRequest}>
                <div className="col-md-6 form-floating">
                    <input type="text" value={fName} className="form-control" id="first name" placeholder="FirstName" required onChange={e => setfName(e.target.value)}/> 
                    <label htmlFor="first name" className="text-secondary">First Name</label>
                </div>
                <div className="col-md-6 form-floating">
                    <input type="text" value={lName} className="form-control" id="last name" placeholder="Last Name" required onChange={e => setlName(e.target.value)}/>
                    <label htmlFor="last name" className="text-secondary">Last Name</label>  
                </div>
                <div className="col-md-12 form-floating">
                    <input type="text" value={cName} className="form-control" id="company name" placeholder="Company Name" onChange={e => setcName(e.target.value)}/>
                    <label htmlFor="company name" className="text-secondary">Company Name</label>
                </div>
                <div className="col-md-12 form-floating">
                    <input type="email" value={Email} className="form-control" id="email address" placeholder="Email Address" onChange={e => setEmail(e.target.value)}/> 
                    <label htmlFor="email address" className="text-secondary">Email Address</label> 
                </div>
                <div className="col-12 form-floating">
                    <input type="text" value={Address} className="form-control" id="street address" placeholder="Street Address" required onChange={e => setAddress(e.target.value)}/>
                    <label htmlFor="street address" className="text-secondary">Street Address</label> 
                </div>
                {/* <div className="col-12 form-floating">
                    <input type="text" value={Address2} className="form-control" id="address2" placeholder="Apartment, Studio, or Floor (optional)" onChange={e => setAddress2(e.target.value)}/>
                    <label for="address2" className="text-secondary">Apartment, Studio, or Floor (optional)</label>
                </div> */}
                <div className="col-md-6 form-floating">
                    <input type="text" value={City} className="form-control" id="city" placeholder="City" required onChange={e => setCity(e.target.value)}/>
                    <label htmlFor="city" className="text-secondary">City</label>
                </div>
                <div className="col-md-4 form-floating">
                    <select className="form-select" value={USState} id="USState" placeholder="State" required onChange={event => setState(event.target.value)}>
                        <option value="">Select State...</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    <label htmlFor="USState" className="text-secondary">Select State</label>
                </div>
                <div className="col-md-2 form-floating">
                    <input type="text" value={Zip} className="form-control" id="zip" placeholder="Zip Code" required onChange={e => setZip(e.target.value)}/>
                    <label htmlFor="zip" className="text-secondary">Zip Code</label>
                </div>

                <hr className="my-4"/>
                
                <div className="col-md-4 text-center px-3">
                    <label htmlFor="trailer type" className="text-Light pb-3 fs-4">Trailer Type</label>
                    <select className="form-select" value={tType} id="trailer type" placeholder="Trailer Type" onChange={e => settType(e.target.value)}>
                        <option selected>Choose One...</option>
                        <option>Dry Van</option>
                        <option>Flat Bed</option>
                        <option>Step Deck</option>
                        <option>Reefer</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="col-md-4 px-3 border border-top-0 border-bottom-0" value={freightGuard} onChange={e => setfreightGuard(e.target.value)}>
                <label htmlFor="fGuard" className="form-label text-center fs-4">Do you have any Freight Guard Reports?</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="FreightGuard" value="Yes" id="fGuard" />
                        <label className="form-check-label" htmlFor="FreightGuard">Yes</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="FreightGuard" value="No" id="fGuard" />
                        <label className="form-check-label" htmlFor="FreightGuard">No</label>
                    </div>
                </div>

                <div className="col-md-4 text-center px-5">
                <label htmlFor="Region" className="form-label text-center fs-4">Region</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={region48} onChange={handleRegion} name="item" />
                        <label className="form-check-label text-start" htmlFor="Region" name="48-states">48 States</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" onChange={handleSoutheast}  value={Southeast}/>
                        <label className="form-check-label" name="Southeast">Southeast</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" onChange={handleSouthwest} value={Southwest} />
                        <label className="form-check-label" name="Southwest">Southwest</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" onChange={handleNortheast} value={Northeast} />
                        <label className="form-check-label" name="Northeast">Northeast</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" onChange={handleMidwest} value={Midwest} />
                        <label className="form-check-label" name="Midwest">Midwest</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" onChange={handleWestCoast} value={WestCoast} />
                        <label className="form-check-label" name="West Coast">West Coast</label>
                    </div>
                </div>

                
                <div className="form-group text-center py-3">
                    <button disabled={processing || succeeded} id="submit" className="btn btn-primary w-25" type="submit"><span id="button-text"> 
                        {processing ? (
                        <div className="spinner-border text-light" role="status"></div>
                        ) : (
                         "Send Request"
                        )}
                    </span></button>
                </div>

            </form> 
            
    
               )}
        </div>
    );
}

export default RequestForm;