import { useState } from "react";
import axios from "axios";

const AddServices = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    category: "",
    media: null,
  });

  const submit = async (e) => {
    e.preventDefault();

    if (!data.media) {
      alert("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("media", data.media);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/products`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Uploaded successfully!");
      setData({ name: "", price: "", category: "", media: null });
    } catch (err) {
      console.error(err);
      alert("❌ Upload failed. Check console for errors.");
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Add New Product
        </h2>

        <input
          type="text"
          placeholder="Product Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setData({ ...data, price: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Category"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setData({ ...data, category: e.target.value })}
          required
        />

        <input
          type="file"
          accept="image/*,video/*"
          className="w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
          onChange={(e) =>
            setData({ ...data, media: e.target.files[0] })
          }
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold
            hover:bg-blue-700 transition duration-200"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default AddServices;
