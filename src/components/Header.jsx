import globeImage from '../assets/images/globe.png'

export function Header() {
    return (
        <header className="header">
            <img src={globeImage} alt="globe-image" />
            <span className="site-heading">my travel journal.</span>
        </header>
    )
}