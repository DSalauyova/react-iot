import style from '../Dashboard.module.css';

const Trips = () => {
    return (
        <div className={style.title}>
            <img src="/icons/globe.png" height='40px' alt='Globe icon' />
            <p>Derniers trajets</p>
            <a href="##">Voir</a>
        </div>
    )
}

export default Trips;