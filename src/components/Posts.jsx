import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, deletePostById } from '../features/posts/postsSlice';
import { v4 } from 'uuid';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);

    return (
        <div className='flex flex-col items-center'>
            <button
                className='text-2xl px-4 py-2 rounded-sm border border-cyan-200 w-28 mb-16 hover:bg-gray-800'
                onClick={() => dispatch(getPosts())}
            >
                Posts
            </button>
            <div className=" max-w-96 min-w-96 bg-slate-600 h-96 overflow-hidden scrollbar overflow-y-auto px-4 py-2 rounded-lg mb-10">
                {posts?.map((post) => (
                    <div onClick={() => dispatch(deletePostById(post.id))} key={v4()} className="text-white mb-2 hover:cursor-pointer">
                        <p className=''>{post.id}</p>
                        {post.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;