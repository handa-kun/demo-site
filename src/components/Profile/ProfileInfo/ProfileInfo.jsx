import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css'
import Photo from '../../../images/user.png'
import ProfileStatusHook from '../ProfileStatus/ProfileStatusHook';
import { useState } from 'react';
import { ProfileDataReduxForm } from './ProfileDataForm';

const ProfileInfo = ({ status, updateStatus, profile, savePhoto, saveProfile }) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    };

    const selectedPhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        };
    };

    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false);
    };

    return (
        <div className={styles.header_content}>
            <div>
                <img src={profile.photos.large || Photo} className={styles.userPhoto} alt="logo" />
                <input type="file" onChange={selectedPhoto} />
                {editMode
                    ? <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit} />
                    : <ProfileData profile={profile} goToEditMode={() => { setEditMode(true) }} />}
                <ProfileStatusHook status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
};
const ProfileData = ({ profile, goToEditMode }) => {
    return (
        <div>
            <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>
            <div>
                <span>Full name:</span> {profile.fullName}
            </div>
            <div>
                <span>My professional skills:</span> {profile.lookingForAJobDescription}
            </div>
            <div>
                <span>About me:</span> {profile.aboutMe}
            </div>
        </div>
    )
};


export default ProfileInfo;