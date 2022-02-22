import Comment from './Comment.js'

const CommentList = ({comments}) => {

    const commentNodes = comments.map((comment) => {
        return (
            <Comment author={comment.author} text={comment.text}/>
        );  
    });

    return(
        <>
            <h2>Comments: </h2>
            {commentNodes}
        </>
    );
};

export default CommentList;