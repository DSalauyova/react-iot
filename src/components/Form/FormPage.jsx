import { Route } from 'react-router-dom';
import Login from '../../logIn/Log_in';
import style from './FormPage.module.css';

const FormPage = (props) => {
    return (
        <div className={style.content}>
            <Route path='/Sign_up' component={Sign_up} />
            <Route component={Login} />
        </div>
    )
}

export default FormPage;