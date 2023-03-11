import Head from "next/head"
import Link from "next/link"
import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import PricingSection from "../components/PricingSection"
import { server } from "../config"
import Video from "../components/Video"
import Image from "next/image"

export async function getServerSideProps() {
  const [aboutInfoRes, companyInfoRes, pricingInfoRes] = await Promise.all([
    fetch(`${server}/api/aboutinfoapi`),
    fetch(`${server}/api/companyinfoapi`),
    fetch(`${server}/api/pricinginfoapi`)
  ]);
  const [aboutInfo, companyInfo, pricingInfo] = await Promise.all([
    aboutInfoRes.json(),
    companyInfoRes.json(),
    pricingInfoRes.json()
  ]);
  return { props: { aboutInfo, companyInfo, pricingInfo }};
}

export default function Home( {aboutInfo, companyInfo, pricingInfo} ) {
  
  return (
    <div>
      <Head>
        <title>OB&T Dispatching Service</title>
      </Head>

      <Video />

      <main className="main">
        <div className="m-auto">
                    
          <h1 className="text-center display-1">OB&T</h1>
          <h1 className="head-section text-center text-uppercase display-3">Dispatching Service, LLC</h1>
          
          <p className="text-center fs-5 fst-italic"> Our top priority is to ensure we are meeting all of your needs in a timely and professional manner at all times. We have built our business on a strong foundation which includes honesty, respect, integrity, and hard work. Effective communication is one of our key principles which is why we will always strive to communicate with our clients one-on-one to understand their specific needs and provide assistance based on those needs. No Empty Wagons!</p>

          <div className="d-grid gap-2 d-md-block py-4 text-center">
            <button type="button" className="btn border-3 btn-light btn-lg mx-2 shadow-lg"><Link legacyBehavior href='/requestservices'>Request Service</Link></button>
          </div>
        </div>
      </main>

      <section className="about-section">
        <div className="py-4">
          <div className="row justify-content-sm-center">
            <div className="col col-lg-4 m-3">
              <hr />
            </div>
            <div className="col col-md-auto border border-3 m-auto">
              <h3 className="text-uppercase text-center m-2">Professional Service</h3>
            </div>
            <div className="col col-lg-4 m-3">
              <hr />
            </div>
          </div>
        </div>
      </section>

      <section id="about-section" className="about-section py-5">
        <AboutSection 
          aboutInfo={aboutInfo}
        />    

      </section>

      <section className="pricing-section">
        <div className="py-5">
          <div className="row justify-content-md-center">
            <div className="col col-lg-4 m-3">
              <hr />
            </div>
            <div className="col-md-auto border border-3 m-auto">
              <h3 className="text-uppercase text-center m-2">What Sets Us Apart</h3>
            </div>
            <div className="col col-lg-4 m-3">
              <hr />
            </div>
          </div>
        </div>

        <PricingSection 
          pricingInfo={pricingInfo}
        />

      </section>
      
      <ContactSection
        companyInfo={companyInfo}
      />
      
    </div>
  )
}
