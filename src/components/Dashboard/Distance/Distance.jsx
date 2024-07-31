import style from '../Dashboard.module.css';

const Distance = (props) => {
    return (
        <div className={style.title}>
            <img src="/icons/distance.png" height="45px" alt='distance icon' />
            <p className='hidden-text'>Nombre de kilometres effectués</p>
            <p>{props.distance} km</p>
        </div>
    )
}

export default Distance;