import styles from './Notification.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from '../../store/uiSlice';

const Notification=(props)=>{
  const dispatch=useDispatch();
  const notify=useSelector(state=>state.ui.notification)
  const status=notify.status;
  const message=notify.message;
  const type=notify.type;
  useEffect(()=>{
 
    setTimeout(()=>{
        dispatch(uiActions.showstatus(false));
    },3000);
  },[dispatch,status])
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {status==='pending' && <div className={styles.loading}>
                <span>{type}</span>
                <span>{message}</span>
                </div>}
                {status==='success' && <div className={styles.completed}>
                <span>{type}</span>
                <span>{message}</span>
                </div>}
                {status==='failed' && <div className={styles.failed}>
                <span>{type}</span>
                <span>{message}</span>
                </div>}
            </div>
        </div>
    )
};

export default Notification;