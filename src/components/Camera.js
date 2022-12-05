import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 420,
  facingMode: "environment",
};

function Camera({ onClick }) {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    onClick(imageSrc);
  }, [webcamRef]);

  //   const onUserMedia = (e) => {
  //     console.log(e);
  //   };
  return (
    <>
      {url !== null ? (
        <img src={url} alt="Screenshot" />
      ) : (
        <>
          <Webcam
            ref={webcamRef}
            audio={true}
            screenshotFormat="image/png"
            videoConstraints={videoConstraints}
            // onUserMedia={onUserMedia}
            mirrored={true}
          />
          <button onClick={capturePhoto} className="capture">
            Capture
          </button>
        </>
      )}
    </>
  );
}

export default Camera;
