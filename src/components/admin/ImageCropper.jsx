import Cropper
  from "react-easy-crop";

import {
  useState,
} from "react";

import "../../css/ImageCropper.css";

function ImageCropper({

  image,

  setCroppedImage,

}) {

  const [crop, setCrop] =
    useState({

      x: 0,

      y: 0,

    });

  const [zoom, setZoom] =
    useState(1);

  return (
    <div className="cropper-container">

      <div className="cropper-box">

        <Cropper

          image={image}

          crop={crop}

          zoom={zoom}

          aspect={1}

          onCropChange={setCrop}

          onZoomChange={setZoom}

        />

      </div>

      {/* ZOOM */}

      <input
        type="range"

        min={1}

        max={3}

        step={0.1}

        value={zoom}

        onChange={(e) =>

          setZoom(e.target.value)

        }
      />

      {/* SAVE */}

      <button
        className="crop-btn"

        onClick={() =>

          setCroppedImage(image)

        }
      >
        Save Crop
      </button>

    </div>
  );
}

export default ImageCropper;