import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={styles.header_content}>
                <img src='https://www.freepnglogos.com/uploads/book-png/library-archive-books-png-transparent-14.png' alt='logo'/>
            </div>
            <div>
                ava+dis
            </div>
        </div>
    )
};

export default ProfileInfo;