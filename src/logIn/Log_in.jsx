import style from './Log_in.module.css';

const Login = () => {
    return <div className={style.background}>
        <div>
            <span>Email :</span>
            <input className="fixe" />
        </div>
        <div>
            <span>Password :</span>
            <input className='fixe'/>
        </div>
        <div>
            <button>Ok</button>
        </div>
    </div>
}

export default Login;