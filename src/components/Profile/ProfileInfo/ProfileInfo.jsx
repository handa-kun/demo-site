import Preloader from '../../common/Preloader';
import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    debugger;
    return (
        <div>
            <div className={styles.header_content}>
                <img src='https://www.freepnglogos.com/uploads/book-png/library-archive-books-png-transparent-14.png' alt='logo'/>
            </div>
            <div>
                <img src={props.profile.photos.large} alt="logo" />
                ava+dis
            </div>
        </div>
    )
};

export default ProfileInfo;