import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light display-1">Jason Zhu</h1>
            <h4 class="font-weight-light">
              BSc | Major in Statistics | UBC
            </h4>
            <p>
              My name is Jason Zhu and I am a Statistics major studying at the University of British Columbia,
              and I am currently in my second year. 
            </p>
            {/* <img className="image"
              src="https://wallpaper.dog/large/20496215.jpg"
              alt=""
              style={{
                width: 600,
              }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;