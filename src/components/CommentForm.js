import {useState} from 'react';

const initialComment = {
    author: '',
    text: ''
}

const CommentForm = ({onCommentSubmit}) => {
    const [newComment, setNewComment] = useState(initialComment)

    const handleInputChange = (event) => {
        const comment = {
            ...newComment,
            [event.target.name] : event.target.value
        };
        setNewComment(comment);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const author = newComment.author.trim();
        const text = newComment.text.trim();
        if (!author || !text) return //if no author or text return
        
        onCommentSubmit({
            author,
            text
        });

        setNewComment(initialComment);
        //pass new comment 'up' to the comment box -Update list of comments.
    };


    return (
      <form className="comment-form" onSubmit={handleFormSubmit}>
          <input name="author" type="text" placeholder="Your name"  value={newComment.author} onChange={handleInputChange}/>
          <input name="text" type="text" placeholder="Say something" value={newComment.text} onChange={handleInputChange}/>
          <input type="submit" value="Post"/>
      </form>  
    );  
};

export default CommentForm