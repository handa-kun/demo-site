import { useState, useEffect } from 'react';
import styles from './Post.module.css'

const Post = (props) => {
  const [counter, setCounter] = useState(props.counter);

  useEffect(() => {
    setCounter(props.counter)
  }, [props.counter]);

  return (
    <div className={styles.item}>
      <img src='https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg'
        alt="logo" />
      <span>{props.message}</span>
      <div>
        <button onClick={() => setCounter(counter + 1)}>
          Like {counter}
        </button>
        <button onClick={() => setCounter(counter - 1)}>
          Dislike
        </button>
      </div>
    </div>
  )
};



export default Post;