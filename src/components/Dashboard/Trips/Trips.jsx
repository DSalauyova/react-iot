import style from '../Dashboard.module.css';

const Trips = () => {
    return (
        <div className={style.title}>
            <img src="/icons/globe.png" height='40px' alt='Globe icon' />
            <p className='hidden-text'>Derniers trajets</p>
            <a href="##" className='hidden-text'>Voir</a>
        </div>
    )
}
export default Trips;