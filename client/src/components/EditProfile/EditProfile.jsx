import React, { useState } from 'react';
import edit from '../../assets/edit.png';

function EditProfile() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("https://cdn.builder.io/api/v1/image/assets/TEMP/cd0e2c4ace1e4f0b9d4328caab53c4ccd055a1af18626f7864523aa76e0978e2?apiKey=cb0dbcd120c84cf4a6cf9d039ebac0a2&");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData, image);
  };

  return (
    <div className="bg-custom-black h-[85vh] w-full flex items-center">
      <div className="bg-gray-800 h-[90%] w-[90vw] sm:w-[80vw] md:w-[50vw] m-auto border border-gray-800 rounded-lg flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 px-10 md:p-6 rounded-lg shadow-lg text-white w-full max-w-[400px]"
        >
          <div className="flex flex-col items-center mb-6">
            <label htmlFor="image-upload" className="relative cursor-pointer">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-custom-black">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <span className="text-gray-400">Upload</span>
                  </div>
                )}
              </div>
              <span className="absolute bottom-8 right-8 bg-transparent p-1 rounded-full text-xs">
                <img src={edit} alt="Edit" />
              </span>
            </label>
            <input
              id="image-upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-3 py-2 bg-custom-black rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@example.com"
              className="w-full px-3 py-2 bg-custom-black rounded-lg"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full h-24 md:h-[15vh] px-3 py-2 bg-custom-black rounded-lg overflow-auto"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-5 md:relative md:right-[-25vw] md:bottom-[-2vh] md:w-[130px] bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
