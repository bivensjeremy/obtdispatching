import ServicesCard from "./ServicesCard";

function createServiceCard(servicesInfo) {
    return(
        <ServicesCard 
            key={servicesInfo.id}
            image={servicesInfo.image}
            name={servicesInfo.name}
            data={servicesInfo.data} 
        />
    );
}

const ServicesSection = (props) => {
    return (
        <div className="container">
            <div className="row" key={props.id}>
                {props.servicesInfo.slice(0, 3).map(createServiceCard)} 
            </div>
            <div className="row" key={props.id}>
                <div className="col-lg-12">
                    {props.servicesInfo.slice(3,4).map(createServiceCard)} 
                </div>
                
            </div>
        </div>
    );
}

export default ServicesSection;