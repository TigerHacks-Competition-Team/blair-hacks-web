import React, { useState, useRef, useEffect } from "react";
import BlazeFace from "./BlazeFace";
import Webcam from "react-webcam";

const BPM = (props) => {
  const webcamRef = useRef(null);
  const [predictions, setPredictions] = useState([]);
  const [canvasImg, setCanvasImg] = useState("");
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
      const img = await webcamRef.current.video;
      const tensor = await BlazeFace.imageToTensor(img);
      console.log(tensor);
      const results = await BlazeFace.predict(img);
      setPredictions(JSON.stringify(results));
      const croppedImg = await BlazeFace.extractROI(tensor, results);
      console.log(croppedImg);
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
      <Webcam
        ref={webcamRef}
        width={640}
        height={480}
        screenshotFormat="image/png"
      />
      <button onClick={() => runPredict()}>predict</button>
      <p>{predictions}</p>
    </div>
  );
};

export default BPM;
