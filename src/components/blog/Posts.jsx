import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home">
      <div class="container">
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-5">
              {/* <h1 class="font-weight-light">This is a post title</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p> */}
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://wallpaper.dog/large/20496215.jpg"
                alt=""
              />
            </div>
          </div>
        </Link>
        <Link to="/blog/this-is-a-post-title-2">
          <div class="row align-items-center my-5">
            <div class="col-lg-5">
              {/* <h1 class="font-weight-light">This is a post title</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p> */}
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://static01.nyt.com/images/2019/06/14/sports/14nba-finals-promo/14nba-finals-promo-superJumbo.jpg"
                alt=""
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;