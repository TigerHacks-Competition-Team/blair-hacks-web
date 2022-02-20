import { useOpenCv } from "opencv-react";
import React, { useEffect, useReducer, useRef } from "react";
import { Heartbeat } from "./heartbeat.js";

const OPENCV_URI = "https://docs.opencv.org/master/opencv.js";
const HAARCASCADE_URI = "haarcascade_frontalface_alt.xml";

const HeartRate = (props) => {
  const { loaded, cv } = useOpenCv();
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    let demo = new Heartbeat(
      "webcam",
      "canvas",
      HAARCASCADE_URI,
      30,
      6,
      250,
      cv,
      canvasRef,
      videoRef,
      (bpm) => (props.onBPMChange ? props.onBPMChange(bpm) : console.log(bpm))
    );
    demo.init();
  }, [loaded]);

  return (
    <div>
      <video hidden id="webcam" width="640" height="480" ref={videoRef}></video>
      <canvas id="canvas" width="640" height="480" ref={canvasRef}></canvas>
    </div>
  );
};

export default HeartRate;
