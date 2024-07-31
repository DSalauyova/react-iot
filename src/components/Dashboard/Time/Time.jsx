import style from '../Dashboard.module.css';

const Time = (props) => {
    return (
        <div className={style.title}>
            <img src="/icons/chrono.png" height="50px" alt="watch icon" />
            <p className='hidden-text'>Temps de la dernière session</p>
            <p>{props.time} h</p>
        </div>
    )
}

export default Time;