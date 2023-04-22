import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./scss/PostList.scss";

import PostListItem from './PostListItem';

const PostListScene = () => {
    // 1. 데이터 호출
    const [posts, setPosts] = useState([]);
    const fetch = async () => {
        const response = await axios({
            method: "get",
            url: "https://koreanjson.com/posts",
        });
        setPosts(response.data);
    }

    useEffect(() => {
        fetch();
    }, []);

    // 2. 데이터를 배출할 HTML 구성
    // 3. HTML을 스타일
    return (
        <div className='post-list-container'>
            {posts.map((item, idx) => {
                return <PostListItem key={idx} post={item} />
            })}
        </div>
    )
}

export default PostListScene