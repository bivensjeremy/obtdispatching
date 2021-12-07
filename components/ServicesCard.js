const ServicesCard = (props) => {
    return (
        <div className="col-lg py-2">
            <div className="service-card border h-100 rounded">
                <div className="card-body">
                    <div className="text-center">
                        <span className="material-icons mi-service">{props.image}</span>
                    </div>
                    <h2 className="card-title text-center">
                        {props.name} 
                    </h2>
                    <div className="container">
                        <ul className="text-light m-auto">
                        {props.data.map(data => <li key={props.id}> <span className="material-icons align-middle text-white">check_circle</span> {data} </li>)}
                    </ul>
                    </div>
                    
                </div>
            </div>
        </div> 
    );
}

export default ServicesCard;