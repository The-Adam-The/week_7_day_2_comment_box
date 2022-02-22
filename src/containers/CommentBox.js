import CommentList from '../components/CommentList';
import {useState} from 'react';

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
      )
    return (
        <div className="comment-box">
            <CommentList comments={comments}/>
        </div>
    );
};

export default CommentBox;

