import markerImage from '../assets/images/marker.png'

export function Entry(props) {
    return (
        <article>
            <div className='entry-image-container'>
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div className='entry-info'>
                <div className='entry-meta'>
                    <img src={markerImage} alt="location-pin-image" />
                    <span>{props.country}</span>
                    <a href={props.googleMapsLink} target='_blank'>View on Google Maps</a>
                </div>
                <h2 className='entry-title'>{props.title}</h2>
                <p className='entry-dates'>{props.dates}</p>
                <p className='entry-description'>{props.text}</p>
            </div>
        </article>
    );
}