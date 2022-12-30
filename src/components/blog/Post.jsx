import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">This is a Post Title</h1>
        <h6 className="mb-5">The post slug is, {postSlug}</h6>
        <p>
          This photo is from my favourite anime movie, Your Name. It depicts the female lead, 
          Mitsuha, admiring a meteor in the night sky as it splits into two. I would definitely
          recommend this movie to anybody, as it has beautiful animation as seen here, as well
          as an extraordinary plot. 
        </p>
      </div>
    </div>
  );
}

export default Post;