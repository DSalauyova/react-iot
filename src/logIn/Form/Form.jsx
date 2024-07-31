import React from 'react';
import style from './Form.module.css';

const Form = () => {
    return (
        <div className="form-container">
            <form>
                <div>
                    <input className={style.form_input} placeholder='Email' />
                </div>
                <div>
                    <input className={style.form_input} placeholder='Password' />
                </div>
            </form>
        </div>

    );
};

export default Form;
