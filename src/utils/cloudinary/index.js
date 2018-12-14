import cloudinaryCore from 'cloudinary-core';

// https://cloudinary.com/documentation/javascript_integration
const cloudinary = new cloudinaryCore.Cloudinary({
  cloud_name: 'pinvite', // this is the Cloudinary cloud project name at https://cloudinary.com/console
  secure: true,
})

export function cloudinaryImageUrl(title, time, amount) {
  // https://cloudinary.com/documentation/image_transformations#adding_text_captions
  return (cloudinary.url(
    'pinvite-background2.png',
    {
      transformation: [
        {
          width: 1000,
          height: 400,
          x: 100,
          y: 50,
          gravity: "north_west",
          overlay: {
            font_family: "NotoSansJP-Black.otf",
            font_size: 60, 
            font_antialias: "best",
            text_align: "left",
            text: encodeURI(title)
          },
          crop: "fit"
        },
        {
          width: 1000,
          height: 100,
          x: 100,
          y: 400,
          overlay: {
            font_family: "NotoSansJP-Black.otf",
            font_size: 60, 
            text_align: "start",
            text: encodeURI('勉強会のギャラ: ' + amount + ' 円')
          },
          gravity: "north_west",
          crop: "fit"
        },
        {
          width: 1000,
          height: 94,
          x: 100,
          y: 500,
          overlay: {
            font_family: "NotoSansJP-Black.otf",
            font_size: 60, 
            text_align: "left",
            text: encodeURI('勉強会の時間: ' + time + ' ' + ' 時間')
          },
          gravity: "north_west",
          crop: "fit"
        }
    ]
  }))
};

export default cloudinary;