import style from './Time.module.css';

const Time = (props) => {
    return (
        <div className={style.title}>
            <img src="/icons/chrono.png" height="50px" />
            <p>Temps de la dernière session</p>
            <p>{props.time} h</p>
        </div>
    )
}

export default Time;