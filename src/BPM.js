import React, { useState, useRef, useEffect } from "react";
import BlazeFace from "./BlazeFace";
import Webcam from "react-webcam";

const BPM = (props) => {
  const webcamRef = useRef(null);
  const [predictions, setPredictions] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) {
      runPredict();
    }
  }, [done]);

  const runPredict = async () => {
    setDone(false);
    if (
      webcamRef.current &&
      webcamRef.current.video &&
      webcamRef.current.video.readyState === 4
    ) {
      const results = await BlazeFace.predict(webcamRef.current.video);
      setPredictions(JSON.stringify(results));
      console.log(results);
    }
    setDone(true);
  };

  const runBackBlaze = async () => {
    await BlazeFace.initModel();
    setDone(true);
  };

  useEffect(() => {
    runBackBlaze();
  }, [webcamRef.current]);
  return (
    <div>
      <Webcam ref={webcamRef} />
      <button onClick={() => runPredict()}>predict</button>
      <p>{predictions}</p>
    </div>
  );
};

export default BPM;
