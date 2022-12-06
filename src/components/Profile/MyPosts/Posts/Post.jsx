import classes from './Post.module.css'

const Post = ( props ) => {
    return (
            <div className={classes.item}>
              <img //src='https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg' 
              alt="logo" />
              <span>{ props.message }</span>
              <div>
                <button>
                  Like {props.counter}
                </button>
              </div>
            </div>
    )
};



export default Post;