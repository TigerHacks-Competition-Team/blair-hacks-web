import React, { useEffect, useState } from "react";
import { withFirebase } from "./context";
import HeartRate from "./HeartRate";
import NavBar from "./NavBar";
import "./App.css";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const Workout = (props) => {
  const [session, setSession] = useState(null);
  const [workingOut, setWorkingOut] = useState(false);
  const [bpm, setBpm] = useState(0);

  useEffect(() => {
    onBPMChange(bpm);
  }, [bpm]);

  const onBPMChange = (bpm) => {
    console.log("bpm: ", bpm, "workingout", workingOut);
    // document.getElementById("bpm").innerText = Math.round(bpm);
    // currentWorkout.shift();
    // console.log(currentWorkout);
    // currentWorkout[currentWorkout.length - 1] = {bpm: bpm};
    // console.log(currentWorkout);

    if (workingOut) {
      setSession((prev) => {
        const updated = { ...prev };
        console.log("updated", updated);
        updated.heartRate.push({
          bpm,
          date: Date.now(),
        });
        return updated;
      });
    }
  };

  useEffect(() => {
    console.log(session);
  }, [session]);

  useEffect(() => {
    if (!workingOut && session) {
      console.log(JSON.stringify(session));
      if (session.heartRate.length > 5) {
        session.end = Date.now();
        props.firebase.updateData(session);
        console.log("SESSION SAVED");
      }
      setSession(null);
    } else if (workingOut && !session) {
      setSession({ start: Date.now(), heartRate: [] });
    }
  }, [workingOut]);

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

  // document.getElementById("start-button").addEventListener("click", () => {
  //   document.getElementById("start-button").style.display = "none";
  //   document.getElementById("workout-ui").style.display = "initial";
  // });

  return (
    <div>
      <NavBar />
      {/* <HeartRate onBPMChange={(bpm) => setBpm(bpm)} />

      <button onClick={() => setWorkingOut((prev) => !prev)}>
        {workingOut ? "Done" : "Start"}
      </button> */}

      <div className="main-page">
        <div className="page-title">
          <p>Workout</p>
        </div>
        <div
          id="start-button"
          onClick={() => {
            setWorkingOut(true);
            document.getElementById("start-button").style.display = "none";
            document.getElementById("workout-ui").style.display = "initial";
          }}
        >
          <p>Start Workout</p>
        </div>
        <div id="workout-ui">
          <div className="center">
            <div className="camera">
              {workingOut && (
                <HeartRate id="video-feed" onBPMChange={(bpm) => setBpm(bpm)} />
              )}
              {/* <div id="video-feed"></div> */}
            </div>
            <div className="bpm-feed">
              {/* <p id="bpm">82</p>
                <p className="bpm-text">BPM</p> */}
              {session && (
                <>
                  <LineChart
                    width={640}
                    height={480}
                    data={session.heartRate.map((hr) => ({
                      ...hr,
                      name: String(hr.date),
                    }))}
                  >
                    <XAxis dataKey="name" tickFormatter={formatDate} />
                    <YAxis />
                    <Line
                      type="monotone"
                      dataKey="bpm"
                      stroke="rgb(255, 0, 0)"
                    />
                  </LineChart>
                </>
              )}
            </div>
          </div>
          <div
            id="stop-button"
            onClick={() => {
              setWorkingOut(false);
              document.getElementById("start-button").style.display = "initial";
              document.getElementById("workout-ui").style.display = "none";
            }}
          >
            <p>End Workout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withFirebase(Workout);
