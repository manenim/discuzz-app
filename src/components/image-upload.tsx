"use client"

import { CldUploadWidget } from "next-cloudinary";

const ImageUpload = () => {
  return (
    <div>
      <CldUploadWidget uploadPreset="zvqjybs7">
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
