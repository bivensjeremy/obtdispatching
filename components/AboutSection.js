import AboutCard from '../components/AboutCard';

function createAboutCard(props) {
    return(
        <AboutCard 
            key={props.id}
            icon={props.icon}
            name={props.name}
            header={props.header}
            data={props.data} 
        />
    );
}
function AboutSection(props) {
    return (
        <div className="container">
            <div className="row px-3">
                {props.aboutInfo.map(createAboutCard)}
            </div>
        </div>
    );
}

export default AboutSection;