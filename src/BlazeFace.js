import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";
import * as tf from "@tensorflow/tfjs";
import * as blazeface from "@tensorflow-models/blazeface";

class BlazeFace {
  static model;
  static async initModel() {
    if (!this.model) {
      this.model = await blazeface.load();
    }
    return "done";
  }
  static predict(img) {
    return this.model.estimateFaces(img, false);
  }
  static async extractROI(img, predictions) {
    const face = predictions[0];
    let x1 = face.landmarks[0][0];
    let x2 = face.landmarks[1][0];
    let y1 = face.topLeft[1];
    let y2 = face.bottomRight[1];
    let deltaX = face.landmarks[1][0] - face.landmarks[0][0];
    let deltaY = face.landmarks[1][1] - face.landmarks[0][1];
    let rotateAngle = Math.atan(deltaY / deltaX);
    img = tf.expandDims(img);
    console.log(img.shape);
    let croppedImg = tf.image.cropAndResize(img, [x1, y1, x2, y2], [0]);
    return croppedImg;
  }

  static async imageToTensor(img) {
    return tf.browser.fromPixels(img);
  }

  static rotateImage(imageBase64, rotation) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.src = imageBase64;
      img.onload = () => {
        var canvas = document.createElement("canvas");
        const maxDim = Math.max(img.height, img.width);
        if ([90, 270].indexOf(rotation) > -1) {
          canvas.width = img.height;
          canvas.height = img.width;
        } else {
          canvas.width = img.width;
          canvas.height = img.height;
        }
        var ctx = canvas.getContext("2d");
        ctx.setTransform(1, 0, 0, 1, maxDim / 2, maxDim / 2);
        ctx.rotate(90 * (Math.PI / 180));
        ctx.drawImage(img, -maxDim / 2, -maxDim / 2);
        resolve(canvas.toDataURL("image/jpeg"));
      };
    });
  }
}

export default BlazeFace;
