import React from 'react';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const About = React.forwardRef((props, ref) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const commentRef = useRef();

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

    fetchComments();
  }, []);

  const handleCommentSubmit = async (event) => {
    console.log("Comment handle")
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
  return (

    <div ref={ref}>
      <section className="bg-bgabout bg-no-repeat overflow-hidden bg-cover text-black w-full min-h-screen flex flex-col justify-start items-center pl-36 py-10">

        <h1 className="font-cursive text-6xl text-center font-extrabold">About</h1>
        <a className="text-center text-lg  font-bold font-cursive mt-16 w-[1100px]">
          In the era of globalization, increased consumer purchasing power, and a growing consciousness of hygiene and beauty,
          the skincare medicine industry is experiencing rapid growth. AESTHETIC SKIN, founded by Aamir Hanif in 2023,
          has become a leading player in Pakistan, offering a range of skincare products and equipment, while also collaborating
          with dermatologists and doctors.

          The company's dedication to promoting a healthy skincare routine aligns with the industry's expanding market worth,
          estimated at USD 14.5 billion in 2020, with a projected 9.2% CAGR growth from 2021 to 2027. Advancements in cosmetic
          techniques, increasing interest in aesthetic procedures,
          and joint research and development initiatives  are expected to drive further industry expansion and public awareness.
        </a>
        <section className="w-full max-w-2xl mx-auto mt-16 text-black">
          <h3 className="text-center text-2xl font-bold ">Comments</h3>
          <div ref={commentRef} className="overflow-y-auto h-64 p-4 mt-4 border-2 bg-gray-200 border-gray-300 bg-opacity-70">
            {comments.map((comment) => (
              <div key={comment._id} className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <span className="text-lg  font-bold">{comment.userName}: </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg ">{comment.text}</h3>
                    <span className="text-sm text-gray-600">{new Date(comment.createdAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-2xl text-center font-bold mt-10">What do you have to say?</h2>
          <h3 className="text-center text-xl">Leave a comment</h3>
          <form onSubmit={handleCommentSubmit} className="w-full max-w-md mx-auto mt-8">
            <div className="flex items-center border-b-2 border-white py-2">
              <input
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
                className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-black"
                type="text"
                placeholder="Add a comment..."
                aria-label="Add a comment"
              />
              <button
                className="p-2 rounded text-center border-white mt-4 bg-white w-28 hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:shadow-outline flex-shrink-0"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </section>

    </div>
  );
});
export default About;