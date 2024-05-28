import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Blog = React.forwardRef((props, ref) => {
  const [comments, setComments] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const commentRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:8000/comments', { withCredentials: true });
        if (response.data.success) {
          setComments(response.data.comments);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/blogs', { withCredentials: true });
        if (response.data.success) {
          setBlogs(response.data.blogs);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchComments();
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:8000/blogs', { withCredentials: true });
      if (response.data.success) {
        setBlogs(response.data.blogs);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (!newComment.trim()) {
      return;
    }

    const userName = sessionStorage.getItem('name');
    if (!userName) {
      router.push("/Login/login");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/add-comment', {
        text: newComment,
        userName: userName
      }, { withCredentials: true });

      if (response.data.success) {
        setComments((prevComments) => [response.data.comment, ...prevComments]);
        setNewComment('');
        commentRef.current.scrollTop = 0;
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleBlogSubmit = async (event) => {
    event.preventDefault();
    if (!newBlogTitle.trim() || !newBlogContent.trim()) {
      return;
    }

    const userName = sessionStorage.getItem('name');
    if (!userName) {
      router.push("/Login/login");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/add-blog', {
        title: newBlogTitle,
        content: newBlogContent,
        author: userName
      }, { withCredentials: true });

      if (response.data.success) {
        alert("Blog Posted")
        setNewBlogTitle('');
        setNewBlogContent('');
        fetchBlogs();
      }
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div>
      <section ref={ref} className="bg-slate-200 bg-no-repeat overflow-hidden bg-cover w-full min-h-screen flex flex-col justify-start items-center py-10">

        <section className="w-full max-w-2xl mx-auto mt-16">
          <h2 className="font-cursive text-4xl text-center text-black font-bold pl-32">Blogs</h2>
          <div className="overflow-y-auto h-64 p-4 mt-4 border-2 bg-gray-200 border-gray-300">
            {blogs.map((blog) => (
              <div key={blog._id} className="flex items-start mb-4 cursor-pointer" onClick={() => handleBlogClick(blog)}>
                <div className="flex-shrink-0 mr-4">
                  <span className="text-lg text-black font-bold">{blog.author}: </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-cursive text-lg text-black">{blog.title}</h3>
                    <span className="text-sm text-gray-600">{new Date(blog.createdAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedBlog && (
          <div className='flex flex-col justify-center items-center mt-8' >
            <h1 className='text-black font-bold text-2xl ml-28'>Blog Content</h1>
            <div className="w-full max-w-2xl mx-auto mt-8 p-4 border-2 border-gray-300 bg-gray-200 text-black">


              <h3 className="font-bold text-lg">{selectedBlog.title}</h3>
              <p className="text-gray-600">Author: {selectedBlog.author}</p>
              <p className="mt-2">{selectedBlog.content}</p>
            </div>
          </div>
        )}

        <section className="w-full max-w-2xl mx-auto mt-16">
          <h2 className="font-cursive text-4xl text-center text-black font-bold pl-32">Write a Blog</h2>
          <form onSubmit={handleBlogSubmit} className="w-full max-w-md mx-auto mt-8">
            <div className="mb-4">
              <label className="block text-lg text-gray-700 font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                type="text"
                value={newBlogTitle}
                onChange={(event) => setNewBlogTitle(event.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter blog title"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg text-gray-700 font-bold mb-2" htmlFor="content">
                Content (Up to 500 words)
              </label>
              <textarea
                id="content"
                value={newBlogContent}
                onChange={(event) => setNewBlogContent(event.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                placeholder="Write your blog content here"
                maxLength={500}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit Blog
            </button>
          </form>
        </section>

        <section className="w-full max-w-2xl mx-auto mt-16">
          <h2 className="font-cursive text-4xl text-center text-black font-bold pl-32">Comments</h2>
          <div ref={commentRef} className="overflow-y-auto h-64 p-4 mt-4 border-2 bg-gray-200 border-gray-300">
            {comments.map((comment) => (
              <div key={comment._id} className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <span className="text-lg text-black font-bold">{comment.userName}: </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-cursive text-lg text-black">{comment.text}</h3>
                    <span className="text-sm text-gray-600">{new Date(comment.createdAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleCommentSubmit} className="w-full max-w-md mx-auto mt-8">
            <div className="flex items-center border-b-2 border-teal-500 py-2">
              <input value={newComment} onChange={(event) => setNewComment(event.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Add a comment..." aria-label="Add a comment" />
              <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                Submit
              </button>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
});

export default Blog;
