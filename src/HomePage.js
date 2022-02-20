import React from "react";
import NavBar from "./NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./logo.svg";
import wave from "./wave.svg";

import { LineChart, Line, XAxis, YAxis } from "recharts";

var formatDate = (unixtime) => {
  var newDate = new Date();
  newDate.setTime(unixtime);
  var dateString =
    newDate.getHours() +
    ":" +
    newDate.getMinutes() +
    ":" +
    newDate.getSeconds();
  return dateString;
};

const data = [
  { bpm: 72.02095154954168, date: 1645366835964 },
  { bpm: 72.02095154954168, date: 1645366835964 },
  { bpm: 71.80937874007182, date: 1645366836040 },
  { date: 1645366836040, bpm: 71.80937874007182 },
  { date: 1645366836259, bpm: 71.52145643693108 },
  { bpm: 71.52145643693108, date: 1645366836259 },
  { bpm: 71.27429805615552, date: 1645366836504 },
  { date: 1645366836504, bpm: 71.27429805615552 },
  { bpm: 68.77865777407253, date: 1645366836988 },
  { bpm: 68.77865777407253, date: 1645366836989 },
  { date: 1645366837247, bpm: 70.86106935795577 },
  { date: 1645366837247, bpm: 70.86106935795577 },
  { date: 1645366837519, bpm: 51.45797598627788 },
  { date: 1645366837519, bpm: 51.45797598627788 },
  { date: 1645366837990, bpm: 49.77187888842804 },
  { date: 1645366837990, bpm: 49.77187888842804 },
  { date: 1645366838275, bpm: 51.150895140664964 },
  { bpm: 51.150895140664964, date: 1645366838275 },
  { date: 1645366838493, bpm: 50.98789037603569 },
  { date: 1645366838493, bpm: 50.98789037603569 },
  { date: 1645366839012, bpm: 49.19544942092857 },
  { date: 1645366839012, bpm: 49.19544942092857 },
  { date: 1645366839255, bpm: 49.05968928863451 },
  { date: 1645366839255, bpm: 49.05968928863451 },
  { bpm: 50.36726128016789, date: 1645366839502 },
  { bpm: 50.36726128016789, date: 1645366839502 },
  { bpm: 48.80528723945095, date: 1645366839993 },
  { bpm: 48.80528723945095, date: 1645366839993 },
  { bpm: 48.67660480681472, date: 1645366840241 },
  { date: 1645366840241, bpm: 48.67660480681472 },
  { date: 1645366840539, bpm: 50.02084201750729 },
  { date: 1645366840540, bpm: 50.02084201750729 },
  { date: 1645366840995, bpm: 60.477774417901415 },
  { bpm: 60.477774417901415, date: 1645366840995 },
  { date: 1645366841272, bpm: 60.368246302444916 },
  { date: 1645366841272, bpm: 60.368246302444916 },
  { date: 1645366841498, bpm: 48.27031375703942 },
  { bpm: 48.27031375703942, date: 1645366841498 },
  { bpm: 48.28696252011957, date: 1645366851015 },
  { date: 1645366851015, bpm: 48.28696252011957 },
  { bpm: 46.57868470666518, date: 1645366851128 },
  { date: 1645366851128, bpm: 46.57868470666518 },
  { date: 1645366851270, bpm: 46.362733193509214 },
  { bpm: 46.362733193509214, date: 1645366851273 },
  { bpm: 46.194456665200185, date: 1645366851489 },
  { bpm: 46.194456665200185, date: 1645366851489 },
  { bpm: 40.84874617043004, date: 1645366852058 },
  { date: 1645366852058, bpm: 40.84874617043004 },
  { bpm: 39.42181340341656, date: 1645366852161 },
  { bpm: 39.42181340341656, date: 1645366852161 },
  { bpm: 39.275583678813014, date: 1645366852259 },
  { date: 1645366852259, bpm: 39.275583678813014 },
  { bpm: 39.117679017711616, date: 1645366852475 },
  { bpm: 39.117679017711616, date: 1645366852475 },
];

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
            their workouts, see their progress and assess risks like heart
            attacks.
          </p>
          <p className="blurb-sub">
            Developed with open source machine learning technologies, AutoHealth
            is the best way to monitor heart rate for those without access to
            heart rate monitoring equipment otherwise.
          </p>
        </div>

        <img src={wave} alt="" className="wave" />

        <div className="blurb-right" data-aos="fade-up">
          <h1 className="blurb-title">Analyze your workouts</h1>
          <p className="blurb-text">
            Get live insight into your workout progress with our advanced heart
            rate monitoring system. By graphing your workout intensity in real
            time, you're more easily able to see how you're doing, and when to
            take a break.
          </p>
        </div>

        <div className="graph" data-aos="fade-up">
          <LineChart
            width={640}
            height={480}
            data={data.map((hr) => ({
              ...hr,
              name: String(hr.date),
            }))}
          >
            <XAxis dataKey="name" tickFormatter={formatDate} />
            <YAxis />
            <Line type="monotone" dataKey="bpm" stroke="#497CE4" />
          </LineChart>
        </div>

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
            After the pandemic, more and more people started working out at
            home. Nine in ten americans who workout regularly, workout at home.
            However, over 805,000 people will have a heart attack in the United
            States every year. AutoHealth can see your previous workout progress
            and determine when a heart attack is likely to orccor.
          </p>
        </div>

        <div className="bottom-curve">
          <div id="signup" data-aos="fade-up">
            <p
              className="signup-text"
              onClick={() => {
                window.location.pathname = "/login";
              }}
            >
              Sign Up Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
