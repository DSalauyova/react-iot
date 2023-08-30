import style from "./Speed.module.css";

const Speed = (props) => {
    return (
        <div className={style.title}>
            <img src="/icons/speed.png" height="45px" />
            <p>Vitesse max</p>
            <p>{props.speed_max} km/h</p>
        </div>
    )
}

export default Speed;