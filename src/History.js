import React, { useEffect, useState } from "react";
import { withFirebase } from "./context";
import NavBar from "./NavBar";
import "./App.css";

const History = (props) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    props.firebase.getData().then((snap) => {
      const doc = snap.data();
      setSessions(doc.workouts);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="main-page">
        <div className="page-title">
          <p>History</p>
        </div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default withFirebase(History);
