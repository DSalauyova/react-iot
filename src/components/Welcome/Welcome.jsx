import style from './Welcome.module.css';

const Welcome = (props) => {
    return <div className={style.welcome}>
        Yo [ {props.username} ] !
    </div>
}

export default Welcome;