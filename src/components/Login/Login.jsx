import { reduxForm } from 'redux-form';
import styles from './Login.module.css';
import s from './../common/FormsControl/FormsControl.module.css'
import { required } from '../../utils/validation/validator';
import { createField, Element } from '../common/FormsControl/FormsControl';
import { connect } from 'react-redux';
import { login } from '../../Redux/authReducer';
import { Navigate } from 'react-router-dom';

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {createField('Enter your email', 'email', Input, [required])}
            {createField('Enter your password', 'password', Input, [required], { type: 'password' })}
            {createField(null, 'rememberMe', Input, null, { type: 'checkbox' })} <span>RememberMe</span>
            {error && <div className={s.commonError}>
                {error}
            </div>}
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const Input = Element('input');

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return <div className={styles.form}>
        <h1>SIGN IN</h1>
        <ReduxLoginForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);