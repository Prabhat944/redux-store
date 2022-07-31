import styles from './Notification.module.css';
const Notification=(props)=>{

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.loading}>
                <span>Loading...</span>
                <span>sending data to cart</span>
                </div>
                <div className={styles.completed}>
                <span>Sent</span>
                <span>Successfull</span>
                </div>
                <div className={styles.failed}>
                <span>Error</span>
                <span>Failed to send data to cart</span>
                </div>
            </div>
        </div>
    )
};

export default Notification;