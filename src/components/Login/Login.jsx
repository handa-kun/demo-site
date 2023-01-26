import { Field, reduxForm } from 'redux-form';
import styles from './Login.module.css';
import { required } from '../../utils/validation/validator';
import { Element } from '../common/FormsControl/FormsControl';
import { connect } from 'react-redux';
import { login, logout } from '../../Redux/authReducer';
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your email'}
                    name={'email'}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field placeholder={'Enter your password'}
                    name={'password'}
                    type={'password'}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} /> Remember me
            </div>
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
export default connect(mapStateToProps, { login, logout })(Login);