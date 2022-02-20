import React, { useEffect, useState } from "react";
import { withFirebase } from "./context";
import HeartRate from "./HeartRate";
import NavBar from "./NavBar";

const Workout = (props) => {
  const [session, setSession] = useState(null);
  const [workingOut, setWorkingOut] = useState(false);
  const [bpm, setBpm] = useState(0);

  useEffect(() => {
    onBPMChange(bpm);
  }, [bpm]);

  const onBPMChange = (bpm) => {
    console.log("bpm: ", bpm, "workingout", workingOut);
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
        props.firebase.addUserDoc();
        session.end = Date.now();
        props.firebase.updateData(session);
      }
      setSession(null);
    } else if (workingOut && !session) {
      setSession({ start: Date.now(), heartRate: [] });
    }
  }, [workingOut]);

  return (
    <div>
      <NavBar />
      <HeartRate onBPMChange={(bpm) => setBpm(bpm)} />

      <button onClick={() => setWorkingOut((prev) => !prev)}>
        {workingOut ? "Done" : "Start"}
      </button>
    </div>
  );
};

export default withFirebase(Workout);
