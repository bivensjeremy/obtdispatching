const AboutCard = (props) => {
    return (
        <div className="col-md-6 p-1">
            <div className="card about-card h-100 text-center">
                <div className="card-body">
                    <span className="material-icons mi-about">{props.icon}</span>
                    <h2 className="card-title">{props.name}</h2>
                    <hr className="m-auto"/>
                    <p className="card-text py-3">{props.data}</p>
                </div>
            </div> 
        </div>
    );
}

export default AboutCard;