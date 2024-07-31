import Button from '../components/Button/Button';
import Form from './Form/Form';
import style from './Log_in.module.css';

const Login = () => {
    return (
        <div className={style.container_form}>
            <Form />
            <Button
                label='Se Connecter' />
        </div >
    );
}

export default Login;