import classes from './Post.module.css'

const Post = ( props ) => {
    return (
            <div className={classes.item}>
              <img src='https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png' />
              <span>{ props.message }</span> 
              <div>
                <button>
                  Like
                </button>
              </div>
            </div>
    )
};



export default Post;