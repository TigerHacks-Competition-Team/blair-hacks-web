import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";
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
}

export default BlazeFace;
