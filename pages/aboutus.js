import ContactSection from "../components/ContactSection";
import Head from "next/head"
import Image from "next/image"

const aboutus = () => {
    return (
        <div>
            <Head>
            <title>OB&T | About Us</title>
            </Head>
            <section className="background about-section">
                <div className="container pt-4">
                    <div className="row pb-5">
                        <div className="col-lg-6">
                            <div>
                              <h1 className="text-center text-uppercase display-3">About Us</h1>
                                <p className="fs-5">We are the founders of OB&T Dispatching Service, a reputable company based in Dublin, Georgia. We have been in the transportation industry for more than 5 years and have not looked back since. We chose transportation because of the consistency it brings which has allowed us to advance and grow in our business. We believe in learning the industry, staying patient, and booking loads according to what makes sense. We are passionate about continuously learning and growing to ensure we are providing our clients with the best service possible. One unique thing about our business is that we are still in the field of hauling freight. This allows us to stay in tune with what is going on in the market and adapt as needed.</p>  
                            </div>
                            <div>
                                <h1 className="text-center">Mission Statement</h1>
                                <p className="fs-5">Our top priority is to ensure we are meeting all of your needs in a timely and professional manner at all times. We have built our business on a strong foundation which includes honesty, respect, integrity, and hard work. Effective communication is one of our key principles which is why we will always strive to communicate with our clients one-on-one to understand their specific needs and provide assistance based on those needs. <br /><br /> We look forward to working with you and are excited about the journey ahead. So, with that being said, let’s get started on the journey of keeping you happy and your truck loaded. Our slogan, “No Empty Wagons!”.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 m-auto">
                            <div className="text-center">
                               <Image
                                    className="couple-image border border-warning rounded-3 border-5 couple-image p-5 w-75"
                                    src="/images/couple.png"
                                    width={100}
                                    height={100}
                                    alt="couple-image"
                                    layout="responsive"
                                />
                            </div>   
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />

        </div>
    );
}

export default aboutus;