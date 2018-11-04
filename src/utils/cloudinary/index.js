import cloudinaryCore from 'cloudinary-core';

//https://cloudinary.com/documentation/javascript_integration
const cloudinary = new cloudinaryCore.Cloudinary(
  {
    cloud_name: "pinvite", //this is the Cloudinary cloud project name at https://cloudinary.com/console
    secure: true
  }
);

export default cloudinary;