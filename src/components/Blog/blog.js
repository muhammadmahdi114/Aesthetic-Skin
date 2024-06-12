import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Blog = React.forwardRef((props, ref) => {
  const [blogs, setBlogs] = useState([]);
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const router = useRouter();

  useEffect(() => {
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
    fetchBlogs();
  }, []);

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
        alert("Blog Posted");
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
    <div className='flex flex-col justify-start items-center text-white'>
      <section ref={ref} className="bg-bgblog bg-no-repeat overflow-hidden bg-cover w-full min-h-screen font-cursive py-10 pl-36">
        <h2 className="text-4xl text-center font-bold">Blog</h2>
        <section className="w-full max-w-2xl mx-auto mt-16">
          <h2 className="text-2xl text-center font-bold">Read a Blog</h2>
          <div className="overflow-y-auto h-64 p-4 mt-4 border-2 bg-gray-200 border-gray-300">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="flex items-start mb-4 cursor-pointer p-4 rounded hover:bg-gray-300 hover:shadow-md transition duration-300 ease-in-out"
                onClick={() => handleBlogClick(blog)}
              >
                <div className="flex-shrink-0 mr-4">
                  <span className="text-lg text-black font-bold">{blog.author}: </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg text-black">{blog.title}</h3>
                    <span className="text-sm text-gray-600">{new Date(blog.createdAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedBlog && (
          <div className="flex flex-col justify-center items-center mt-8">
            <h1 className="font-bold text-2xl">Blog Content</h1>
            <div className="w-full max-w-2xl mx-auto mt-8 p-4 border-2 border-gray-300 bg-gray-200 text-black">
              <h3 className="font-bold text-lg">{selectedBlog.title}</h3>
              <p className="text-gray-600">Author: {selectedBlog.author}</p>
              <p className="mt-2">{selectedBlog.content}</p>
            </div>
          </div>
        )}
        <section className="w-full max-w-2xl mx-auto mt-16">
          <h2 className="text-2xl text-center font-bold">Write a Blog</h2>
          <form onSubmit={handleBlogSubmit} className="w-full mx-auto mt-8">
            <div className="mb-4">
              <label className="block text-lg text-gray-300 font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                type="text"
                value={newBlogTitle}
                onChange={(event) => setNewBlogTitle(event.target.value)}
                className="appearance-none border rounded w-full max-w-2xl py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter blog title"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg text-gray-300 font-bold mb-2" htmlFor="content">
                Content (Up to 500 words)
              </label>
              <textarea
                id="content"
                value={newBlogContent}
                onChange={(event) => setNewBlogContent(event.target.value)}
                className="appearance-none border rounded py-2 px-3 w-full max-w-2xl text-black leading-tight focus:outline-none focus:shadow-outline h-32"
                placeholder="Write your blog content here"
                maxLength={500}
              />
            </div>
            <div className='w-full flex justify-center items-center'>
            <button
              className="p-2 rounded text-center text-black border-white mt-4 bg-white w-60 hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit Blog
            </button>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
});

export default Blog;
