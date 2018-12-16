import cloudinaryCore from 'cloudinary-core';

// https://cloudinary.com/documentation/javascript_integration
const cloudinary = new cloudinaryCore.Cloudinary({
  cloud_name: 'pinvite', // this is the Cloudinary cloud project name at https://cloudinary.com/console
  secure: true,
})

export function cloudinaryImageUrl(title: string, time: string, amount: string) {
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
          overlay: new cloudinaryCore.TextLayer()
            .fontFamily("NotoSansJP-Black.otf")
            .fontSize(60)
            .textAlign('left')
            .text(encodeURI(title))
            .toString(),
          crop: "fit"
        },
        {
          width: 1000,
          height: 100,
          x: 100,
          y: 400,
          overlay: new cloudinaryCore.TextLayer()
            .fontFamily("NotoSansJP-Black.otf")
            .fontSize(60)
            .textAlign('start')
            .text(encodeURI('勉強会のギャラ: ' + amount + ' 円'))
            .toString(),
          gravity: "north_west",
          crop: "fit"
        },
        {
          width: 1000,
          height: 94,
          x: 100,
          y: 500,
          overlay: new cloudinaryCore.TextLayer()
            .fontFamily("NotoSansJP-Black.otf")
            .fontSize(60)
            .textAlign('left')
            .text(encodeURI('勉強会の時間: ' + time + ' 時間'))
            .toString(),
          gravity: "north_west",
          crop: "fit"
        }
    ]
  }))
};

export default cloudinary;