import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import './scss/PostDetail.scss';

const PostDetailScene = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);

    const fetchPost = async (_postId) => {
        const response = await axios({
            method: "get",
            url: "https://koreanjson.com/posts/" + _postId,
        });
        setPost(response.data);
    };
    useEffect(() => {
        fetchPost(postId);
    }, [postId]);

    const fetchUser = async (_userId) => {
        const response = await axios({
            method: "get",
            url: "https://koreanjson.com/users/" + _userId,
        });
        setUser(response.data);
    };
    useEffect(() => {
        if (post) {
            console.log('a', post)
            fetchUser(post.UserId);
        }
    }, [postId]);


    return (
        <div className='post-detail-container'>
            <p>{post?.title}</p>
            <div>
                <p>작성자 : {
                    user?.username
                }</p>
                <p>작성일 :
                    {
                        moment(post?.createdAt).format("YYYY-MM-DD HH:MM:SS")
                    }
                </p>
            </div>
            <div>
                <p>{
                    post?.content
                }</p>
            </div>
        </div>
    )
}

export default PostDetailScene