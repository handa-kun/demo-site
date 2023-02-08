import { reduxForm } from 'redux-form';
import { createField, Element } from '../../common/FormsControl/FormsControl';

const ProfileDataForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            <div>
                <span>Full name:</span>{createField('Full name', 'fullName', Input, [])}
            </div>
            <div>
                <span>My professional skills:</span>{createField('', 'lookingForAJobDescription', Input, [])}
            </div>
            <div>
                <span>About me:</span>{createField('About Me', 'aboutMe', Textarea, [])}
            </div>
        </form>
    )
};

const Input = Element('input');
const Textarea = Element('textarea');
export const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);



