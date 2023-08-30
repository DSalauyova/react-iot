import style from './SignUp.module.css';

const SignUp = (props) => {
    return <div className={style.sign}>
        <div>
            <span>Email :</span>
            <input className="fixe" />
        </div>
        <div>
            <span>Password :</span>
            <input className='fixe'/>
        </div>
        <div>
            <span>Confirm password :</span>
            <input className='fixe'/>
        </div>
        <div>
            <button className=''>Ok</button>
        </div>
    </div>
    
}

export default SignUp;