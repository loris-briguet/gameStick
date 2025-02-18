const PARAMS = {
  dev: {
    state: true, //all Tools for Developement
    videoStream: true,
  },
  game: {
    initialLevel: 1,
  },
  grid: {
    nbBallsOnWidth: 20,
  },
  stick: {
    lineWidth: 60,
  },
  canvas: {
    id: "main-container",
    obj: null,
    ctx: "2d",
    width: null,
    height: null,
  },
  video: {
    width: 640, //270-Screen MID - 0 for window width - it will be the same size for the canvas
    height: 480, //480-Screen MID - 0 for window height - it will be the same size for the canvas
    videoIsReady: false,
    obj: null,
  },
  poseNet: {
    isLoaded: false,
    poses: {
      key: null,
      someoneIsFront: false,
    },
  },
};

export default PARAMS;
