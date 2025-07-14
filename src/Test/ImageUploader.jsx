import React, { useState, useRef } from "react";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setScale(1);
        setOffset({ x: 0, y: 0 });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.clientX - lastPosition.current.x;
    const dy = e.clientY - lastPosition.current.y;
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    setScale((prev) => {
      const newScale = e.deltaY < 0 ? prev + 0.05 : prev - 0.05;
      return Math.min(Math.max(newScale, 0.5), 3);
    });
  };

  return (
    <div className="flex flex-col items-center mb-8">
      {/* Image container */}
      <div
        ref={containerRef}
        className="relative w-32 h-32 border-2 border-dashed border-gray-300 rounded-full overflow-hidden mb-4 bg-gray-100"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{ cursor: image ? "grab" : "default" }}
      >
        {image ? (
          <img
            src={image}
            alt="Preview"
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        ) : (
          <span className="text-gray-400 flex items-center justify-center h-full text-center text-sm">
            No image selected
          </span>
        )}
      </div>

      {/* Upload */}
      <label
        htmlFor="fileInput"
        className="cursor-pointer text-green rounded-md hover:text-orange transition mb-4"
      >
        Choose Image
      </label>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

export default ImageUploader;
