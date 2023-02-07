import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css'
import Photo from '../../../images/user.png'
import ProfileStatusHook from '../ProfileStatus/ProfileStatusHook';
import { useState } from 'react';
import { ProfileDataReduxForm } from './ProfileDataForm';

const ProfileInfo = ({ status, updateStatus, profile, savePhoto }) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    };

    const selectedPhoto = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        };
    };

    return (
        <div>
            <div className={styles.header_content}>
                <img src='https://www.freepnglogos.com/uploads/book-png/library-archive-books-png-transparent-14.png' alt='logo' />
            </div>
            <div>
                <img src={profile.photos.large || Photo} className={styles.userPhoto} alt="logo" />
                <input type="file" onChange={selectedPhoto} />
                {editMode
                    ? <ProfileDataReduxForm profile={profile} />
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
                <span>About me:</span> {profile.aboutMe}
            </div>
            <div>
                <span>Job:</span> {profile.lookingForAJobDescription}
            </div>
        </div>
    )
};


export default ProfileInfo;