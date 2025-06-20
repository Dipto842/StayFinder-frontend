import React, { useState, useEffect } from "react";

const EditModal = ({ isOpen, onClose, data, onSave }) => {
  const [formData, setFormData] = useState(data || {});

  useEffect(() => {
    setFormData(data || {});
  }, [data]);

  if (!isOpen) return null;  // Modal বন্ধ থাকলে কিছু দেখাবে না

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl mb-4">Edit Listing</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            placeholder="Title"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="location"
            value={formData.location || ""}
            onChange={handleChange}
            placeholder="Location"
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="pricePerNight"
            value={formData.pricePerNight || ""}
            onChange={handleChange}
            placeholder="Price Per Night"
            className="border p-2 rounded"
          />
          {/* অন্য ফিল্ডগুলোও একইভাবে লাগাতে পারো */}

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded text-red-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
