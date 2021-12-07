//import PricingCard from "./PricingCard";

// function createPricingCard(props) {
//     return(
//         <PricingCard
//             key={props.id}
//             active={props.active}
//             icon={props.icon}
//             name={props.name}
//             data={props.data}
//         />
//     )
// }

const PricingSection = (props) => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* {props.pricingInfo.map(createPricingCard)} */}

                    <div className="carousel-item active">
                        <div className="d-block m-auto w-50">
                            <div className="card pricing-card text-center py-5">
                                <div className="card-body">
                                    <h1 className="card-title display-4">Communication</h1>
                                    <span className="material-icons mi-pricing text-white">message</span>
                                    <h3 className="card-text py-3">Simple and direct communication between client & dispatcher.</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="d-block m-auto w-50">
                            <div className="card pricing-card text-center py-5">
                                <div className="card-body">
                                    <h1 className="card-title display-4">Trusted Experience</h1>
                                    <span className="material-icons mi-pricing text-white">travel_explore</span>
                                    <h3 className="card-text py-3">Over 5 years of industry experience trucking and booking loads. </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="d-block m-auto w-50">
                            <div className="card pricing-card text-center py-5">
                                <div className="card-body">
                                    <h1 className="card-title display-4">Rate Plan</h1>
                                    <span className="material-icons mi-pricing text-white">request_quote</span>
                                    <h3 className="card-text py-3">Flat fee of 10% per load making service agreements easy to manage.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
</div>
        </div>
    );
}

export default PricingSection;