const {ImageKit} = require('@imagekit/nodejs')
require('dotenv').config()


const client = new ImageKit({
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

const uploadFile=async (buffer) => {
  
  const result = await client.files.upload({
    file: buffer.toString('base64'),
    fileName: "image.jpg",
  });
  
  return result

}

module.exports=uploadFile