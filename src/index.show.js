import React from 'react';
import ReactDOM from 'react-dom';
import Show from './Show';

let element = document.getElementById('root');
let postId = element.getAttribute("postId");

ReactDOM.render(<Show postId={Number.parseInt(postId)} />, element);
