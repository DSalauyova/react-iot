import Button from '../components/Button/Button';
import Form from './Form/Form';
import style from './SignUp.module.css';

const SignUp = () => {
    return (
        <div className={style.sign}>
            <Form />
            <Button
                label='OK' className='' />
        </div>
    );
}

export default SignUp;