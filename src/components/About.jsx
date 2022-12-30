import React from "react";

function About() {
  return (
    <div className="about">

        <div class="container">
        <h1 class="font-weight-light my-5">Projects and Skills</h1>

            <div class="row align-items-center my-5">

                <div class="col-lg-7">
                    <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src="https://wallpaper.dog/large/20496215.jpg"
                    alt=""
                    />
                </div>

                <div class="col-lg-5">
                    <h4>Calorie Tracker</h4>
                    <h6>Technologies: Java, Java Swing</h6>
                    <p>
                        <li>
                            Designed a GUI based program that can help users to balance workout and diet plans on a daily basis
                        </li>
                        <li>
                            Developed 30+ unit tests to validate functionality of the program, resolving 50+ bugs
                        </li>
                        <li>
                            Worked with a client to perform a user acceptance test (UAT), ensuring the program meets the client's initial need
                        </li>
                        <li>
                            Presented and demoed the program in front of 20+ students, showcasing the purpose and operation of the product 
                        </li>
                    </p>
                </div>

                <div class="row align-items-center my-5 col-lg-7">
                    <h4>Knowledge Level Predictor</h4>
                    <h6>Technologies: R, Jupyter Notebook</h6>
                    <p>
                        <li>
                            Used cross validation and k-nearest neighbours algorithms to predict if user knowledge levels are related to exam scores
                        </li>
                        <li>
                            Spearheaded the development of this application and collaborated with multiple group members
                        </li>
                    </p>

                </div>

                <div class="col-lg-5 float-right my-5">
                    <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src="https://wallpaper.dog/large/20496215.jpg"
                        alt=""
                    />
                </div>

            </div>

        </div>

    </div>
  );
//   col-lg-7 is the width of the text, my-5 is padding on top
}

export default About;