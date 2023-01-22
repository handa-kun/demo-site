import { Field, reduxForm } from 'redux-form';
import styles from './Login.module.css';
import { required } from '../../utils/validation/validator';
import { Element } from '../common/FormsControl/FormsControl';

const LoginForm = (props) => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your login'}
                    name={'login'}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field placeholder={'Enter your password'}
                    name={'password'}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} /> Remember me
            </div>
            <div>
                <button onSubmit={props.loginMe}>Send</button>
            </div>
        </form>
    )
}

const Input = Element('input');

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div className={styles.form}>
        <h1>SIGN IN</h1>
        <ReduxLoginForm onSubmit={onSubmit} />
    </div>
}

export default Login