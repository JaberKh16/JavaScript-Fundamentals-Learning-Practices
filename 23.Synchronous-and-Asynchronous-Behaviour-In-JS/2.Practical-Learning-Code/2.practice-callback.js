const posts = [
    { post_id: 1, post_title: 'First Post' },
    { post_id: 2, post_title: 'Second Post' },
    { post_id: 3, post_title: 'Third Post' },
];

const comments = [
    { post_id: 2, comment: 'Great!'},
    { post_id: 2, comment: 'Nice Post!'},
    { post_id: 3, comment: 'Awesome Post!'},
];

const getPostInfo = (postId, fn) =>{
    const post = posts.find(post => posts.post_id === postId);
    if(post){
        fn(null, post);
    }else{
        fn("No such post", undefined)
    }
}

const getCommentInfo = (postId, fn) =>{
    const comment =  comments.filter(comment => comment.post_id === postId);
    if(comment){
        fn(null, comment);
    }else{
        fn("No such comment", undefined)
    }
}