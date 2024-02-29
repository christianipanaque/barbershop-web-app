import React, { useState } from 'react';

const PhotoUploadComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setSelectedImage(URL.createObjectURL(img));
    }
  };

  return (
    <div className="photo-upload-component">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <img src={selectedImage} alt="Uploaded" style={{ width: '100%', marginTop: '20px' }} />
      )}
    </div>
  );
};

export default PhotoUploadComponent;
