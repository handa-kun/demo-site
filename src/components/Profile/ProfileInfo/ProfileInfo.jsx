import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css'
//import ProfileStatus from '../ProfileStatus/ProfileStatus'
import ProfileStatusHook from '../ProfileStatus/ProfileStatusHook';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={styles.header_content}>
                <img src='https://www.freepnglogos.com/uploads/book-png/library-archive-books-png-transparent-14.png' alt='logo' />
            </div>
            <div>
                <img src={props.profile.photos.large} alt="logo" />
                <div>
                    <span>{props.profile.fullName}</span>
                </div>
                <div>
                    <span>{props.profile.aboutMe}</span>
                </div>
                <div>
                    <span>{props.profile.lookingForAJobDescription}</span>
                </div>
                <ProfileStatusHook status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
};

export default ProfileInfo;