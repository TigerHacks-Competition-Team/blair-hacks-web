import React, { useEffect, useState } from "react";
import { withFirebase } from "./context";
import NavBar from "./NavBar";
import "./App.css";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const History = (props) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    props.firebase.getData().then((snap) => {
      const doc = snap.data();
      setSessions(doc.workouts);
    });
  }, []);

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

  return (
    <div>
      <NavBar />
      <div className="main-page">
        <div className="page-title">
          <p>History</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {sessions.map((sess) => (
            <div key={sess.start}>
              <p>
                Avg. BPM:
                {Math.round(
                  sess.heartRate
                    .map((item) => item.bpm)
                    .reduce((prev, curr) => prev + curr, 0) /
                    sess.heartRate.length
                )}
              </p>
              <LineChart
                width={640}
                height={480}
                data={sess.heartRate.map((hr) => ({
                  ...hr,
                  name: String(hr.date),
                }))}
              >
                <XAxis dataKey="name" tickFormatter={formatDate} />
                <YAxis />
                <Line type="monotone" dataKey="bpm" stroke="rgb(255, 0, 0)" />
              </LineChart>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withFirebase(History);
