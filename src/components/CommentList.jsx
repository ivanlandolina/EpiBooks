import React from 'react';
import SingleComment from './SingleComment';


function CommentList ({comments,  onEditOrDeleteComment , colorText}) {
    return (
        <div>
            <h6 style={{color:colorText}}>Commenti</h6>
            {comments.map(comment => (
                <SingleComment key={comment._id} comment={comment} onEditOrDeleteComment={onEditOrDeleteComment} colorText={colorText} />
            ))}
        </div>
    );
};
export default CommentList;