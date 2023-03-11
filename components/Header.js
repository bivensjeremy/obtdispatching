import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { companyInfo } from "../data/companyinfo";


const Header = () => {
    return (
        <div>  
             <Head>
                {/* Metadata */}
                <meta name="description" content="Professional dispatching services based in southwest Georgia" />
                <meta name="keywords" content="Designed by Bivens Blueprint LLC, dispatching, trucking, Georgia" /> 
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="canonical" href="https.obandt.bivensblueprint.com" />
                <meta name="robots" content="index, follow" />
                {/* Boostrap */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
                {/* Material UI Icons */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            </Head>

            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container-fluid px-5">
            
                <div className="me-5">
                    <Link href="/"><a><Image
                                        className="OB&T logo"
                                        src="/images/logo_crop.png"
                                        layout="intrinsic"
                                        width={100}
                                        height={100}
                                        alt="OB&T Logo"
                                    /></a></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarOBandT" aria-controls="navbarOBandT" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                        <div className="collapse navbar-collapse justify-content-evenly text-center" id="navbarOBandT">
                            <div className="navbar-nav">
                                <Link legacyBehavior href="/" aria-current="page"><a className="nav-link px-5 fs-6 text-uppercase rounded"><h2 className="text-secondary fs-3">Home</h2></a></Link>
                                <Link legacyBehavior href="/aboutus"><a className="nav-link px-5 fs-6 text-uppercase rounded"><h2 className="text-secondary fs-3">About</h2></a></Link>
                                <Link legacyBehavior href="/requestservices"><a className="nav-link fs-6 text-uppercase rounded"><h2 className="text-secondary fs-3">Request Service</h2></a></Link>
                                <Link legacyBehavior href="/contact"><a className="nav-link px-5 fs-6 text-uppercase rounded"><h2 className="text-secondary fs-3">Contact Us</h2></a></Link>
                                
                            </div> 
                        </div>
                        
                    <a href="tel:+14047205819" className="nav-link border rounded border-2"><span className="material-icons text-white align-middle">phone</span>  {companyInfo[0].phone}</a>
                </div> 
            </nav>
        </div>
    );
}

export default Header;