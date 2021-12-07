import RequestForm from "../components/RequestForm"
import ServicesSection from "../components/ServicesSection";
import { server } from "../config"
import Head from "next/head"

export async function getServerSideProps() {
    const res = await fetch(`${server}/api/servicesinfoapi`)
    const servicesInfo = await res.json()
    return { props: { servicesInfo }}
}

const requestervices = ({servicesInfo}) => {
    return (
        <div className="background">
        <Head>
        <title>OB&T | Request Services</title>
        </Head>
            <h1 className="text-uppercase text-center text-black contact-title py-3">Obtain Dispatch Service</h1>
            
            <ServicesSection
                servicesInfo={servicesInfo} 
            />

            <div className="d-grid gap-2 py-4 d-md-flex justify-content-center">
               <a href='/documents/OB&T Dispatching Service Dispatch and Carrier Agreement2.pdf' download> <button className="btn btn-primary me-md-2" style={{width: 16 + 'em'}} type="button"> Download the Dispatch/Carrier Agreement</button></a>
            </div>
            <RequestForm />
        </div>
    );
}

export default requestervices;