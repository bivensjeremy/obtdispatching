const PricingCard = (props) => {
    return (
        <div>
            <div className={"carousel-item " + props.active}>
                <div className="d-block m-auto w-50">
                    <div className="card pricing-card text-center py-5">
                        <div className="card-body">
                            <span className="material-icons mi-pricing text-white">{props.icon}</span>
                            <h1 className="card-title">{props.name}</h1>
                            <h3 className="card-text py-3">{props.data}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingCard;