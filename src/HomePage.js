import React from "react";
import NavBar from "./NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./logo.svg";
import wave from "./wave.svg";

// Add pages down here
function HomePage() {
  AOS.init({ offset: 350 });
  return (
    <div>
      <NavBar />
      <div className="main-page">
        <div className="blurb-left">
          <h1 className="blurb-title">AutoHealth</h1>
          <p className="blurb-text">
            AutoHealth is an AI driven web-app designed to help people analyze 
            their workouts, see their progress and assess risks like heart attacks. 
          </p>
          <p className="blurb-sub">
            Developed with open source machine learning technologies, AutoHealth
            is the best way to monitor heart rate for those without access 
            to heart rate monitoring equipment otherwise.
          </p>
        </div>

        <img src={wave} alt="" className="wave" />

        <div className="blurb-right" data-aos="fade-up">
          <h1 className="blurb-title">Analyze your workouts</h1>
          <p className="blurb-text">
            Get live insight into your workout progress with our
            advanced heart rate monitoring system. By graphing your workout
            intensity in real time, you're more easily able to see how 
            you're doing, and when to take a break. 
          </p>
        </div>

        <div className="graph" data-aos="fade-up"></div>

        <div className="blob" data-aos="fade-up">
          <div className="blob-content">
            <p className="blurb-title">See your progrss</p>
            <p className="blurb-text">
              With an account, you can save each of your workouts, and
              review them at any time. This is a great way to see how
              your workouts have improved over time. Even if you don't
              have an account, though, you can still use the app, your
              workout history just won't save.
            </p>
          </div>
        </div>

        <div className="blurb-left blurb-left-2" data-aos="fade-up">
          <h1 className="blurb-title">Assess risk</h1>
          <p className="blurb-text">
            After the pandemic, more and more people started working out at home.
            Nine in ten americans who workout regularly, workout at home. However, 
            over 805,000 people will have a heart attack in the United States every year.
            AutoHealth can see your previous workout progress and determine when a heart
            attack is likely to orccor.
          </p>
        </div>

        <div className="bottom-curve">
          <div id="signup" data-aos="fade-up">
            <p className="signup-text" onClick={() => {
              window.location.pathname = "/login"
            }}>Sign Up Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
