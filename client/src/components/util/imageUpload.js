import React, { useState } from 'react';

const Example = function () {
  // Declare a new state variable, which we'll call "count"

  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const uploadImage = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'profile_pictures');
    data.append('cloud_name', 'dgpsupioy');
    fetch('https://api.cloudinary.com/v1_1/dgpsupioy/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={url} />
      </div>
    </div>
  );
};
export default Example;
