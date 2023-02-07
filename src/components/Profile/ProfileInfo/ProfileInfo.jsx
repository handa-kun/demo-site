import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css'
import Photo from '../../../images/user.png'
import ProfileStatusHook from '../ProfileStatus/ProfileStatusHook';

const ProfileInfo = ({ status, updateStatus, profile, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }

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
                <div>
                    <span>{profile.fullName}</span>
                </div>
                <div>
                    <span>{profile.aboutMe}</span>
                </div>
                <div>
                    <span>{profile.lookingForAJobDescription}</span>
                </div>
                <ProfileStatusHook status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
};

export default ProfileInfo;