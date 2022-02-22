import CommentList from '../components/CommentList';
import {useState} from 'react';
import CommentForm from '../components/CommentForm';

const CommentBox = () => {
    const [comments, setComments] = useState(				
        [
          {
            id: 1,
            author: "Rick Henry",
            text: "React is such a great framework!"
          },
          {
            id: 2,
            author: "Valerie Gibson",
            text: "I'm dreaming in React..."
          },
          {
            id: 3,
            author: "Zsolt Podoba-Szalai",
            text: "Eh, it's ok..."
          },
          {
            id: 4,
            author: "Jim Jones",
            text: "What's a 'react'?"
          }
        ]
      );

      const addComment = (comment) => {
        comment.id = Date.now();
        const updatedComments = [...comments, comment];
        setComments(updatedComments);
      };
    return (
      <>
        <div className="comment-box">
            <CommentList comments={comments}/>
        </div>
        <div>
          <h1>Add a comment:</h1>
          <CommentForm onCommentSubmit={addComment}/>
        </div>
      </>

    );
};

export default CommentBox;

