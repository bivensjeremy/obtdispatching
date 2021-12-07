import { useState } from 'react';
import { companyInfo } from "../data/companyinfo";
import { useRouter } from "next/router";
import Head from "next/head"

const Contact = () => {
    
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');
    const [Phone, setPhone] = useState('');
    const router = useRouter();
    const [Processing, setProcessing] = useState('');
    const [Succeeded, setSucceeded] = useState(false);
        
    const submitRequest = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const response = await fetch("/api/contact", { 
            method: 'POST', 
            headers: { 
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({Name, Phone, Email, Message}) 
            });
        const resData = await response.json();
            if (resData.status === 'success'){
                setProcessing(false);
                setSucceeded(true);
                router.push('/messagesent');
            }else if(resData.status === 'fail'){
                setProcessing(false);
                alert("Message failed to send.")
            }
        };
       
        return (
            <div className="background contact-page vh-100">
                <Head>
                <title>OB&T | Contact Us</title>
                </Head>

                <div className="row py-5">
                    <div className="col-md-4">
                        <h1 className="text-uppercase pb-3">Send us a message!</h1>
                        <div className="p-2 fs-6">
                            <a className="text-decoration-none" href="tel:%4047205819"><span className="material-icons mi-contact p-2 border border-2 align-middle">phone</span> {companyInfo[0].phone}</a>
                        </div>
                        <div className="p-2 fs-6">
                            <a className="text-decoration-none" href="mailto:john@smith.com?subject=Contact"><span className="material-icons mi-contact p-2 border border-2 align-middle">email</span> {companyInfo[0].email}</a>
                        </div>

                        <h3 className="text-center">Hours of Operation</h3>
                        <span className="material-icons mi-contact p-2 border border-2 align-middle">schedule</span> 24 Hours a Day | 7 Days a Week
                    </div>
                       
                     <div className="col-md-8">
                         <form className="row g-2" onSubmit={submitRequest}> 
                             <div className="col-md-12 pb-2 form-floating">
                                 <input type="text" className="text-light form-control bg-transparent" placeholder="Your Name" id="name" onChange={e => setName(e.target.value)} />
                                 <label htmlFor="name">Your Name</label>
                             </div>

                             <div className="col-md-12 pb-2 form-floating">
                                 <input type="email" className="text-light form-control bg-transparent" placeholder="Your Email" id="email" onChange={e => setEmail(e.target.value)} />
                                 <label htmlFor="email">Your Email </label>
                             </div>

                             <div className="form-group col-md-12 pb-2 form-floating">
                                 <input type="text" name="Phone" className="text-light form-control  bg-transparent" placeholder="Phone Number" id="phone" onChange={e => setPhone(e.target.value)} />
                                 <label htmlFor="phone">Phone Number</label>
                             </div>

                             <div className="form-group pb-2 form-floating">
                                 <textarea name="Message" className="text-light form-control bg-transparent" placeholder="Message" id="message" style={{height: 10 + 'em'}} onChange={e => setMessage(e.target.value)} />
                                 <label htmlFor="message">Message</label>
                             </div>

                             <div className="form-group d-grid gap-2 col-4">
                                 <button disabled={Processing || Succeeded} id="submit" className="btn btn-lg btn-primary" type="submit"><span id="button-text"> 
                                     {Processing ? (
                                    <div className="spinner-border text-light" role="status"></div>
                                    ) : (
                                    "Send"
                                    )}
                                </span></button>
                            </div>
                        </form>   
                    </div>
                </div>
            </div>
        )
    }

export default Contact;