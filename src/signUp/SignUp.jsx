import Button from '../components/Button/Button';
import style from './SignUp.module.css';

const SignUp = () => {
    return (
        <div className={style.sign}>
            <div>
                <input className={style.fixe} placeholder='Email' />
            </div>
            <div>
                <input className={style.fixe} placeholder='Password' />
            </div>
            <div>
                <input className={style.fixe} placeholder='Confirm Password' />
            </div>
            <Button label='OK' className='' />
        </div>
    );
}

export default SignUp;