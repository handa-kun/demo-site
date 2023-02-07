import { reduxForm } from 'redux-form';
import { createField, Element } from '../../common/FormsControl/FormsControl';

const ProfileDataForm = ({ profile }) => {
    return (
        <form>
            <div>
                <button onClick={() => { }}>Save</button>
            </div>
            <div>
                <span>Full name:</span> {createField('Full name', 'fullName', Input, [])}
            </div>
            <div>
                <span>About me:</span> {createField('About Me', 'aboutMe', Input, [])}
            </div>
            <div>
                <span>Job:</span> {createField('Job', 'aboutMe', Input, [])}
            </div>
        </form>
    )
};

const Input = Element('input');
export const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);
