import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Upload, Plus, Package, DollarSign, Tag, Percent } from "lucide-react";
import useAxiosSecure from "../hooks/axiosSecure";
import axios from "axios";

const AdminDashboard = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();

  const [imagePreview, setImagePreview] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const watchedPrice = watch("price");
  const watchedDiscount = watch("discount");

  const categories = [
    "Electronics",
    "Clothing",
    "Books",
    "Home & Garden",
    "Sports & Outdoors",
    "Beauty & Personal Care",
    "Toys & Games",
    "Automotive",
    "Health & Wellness",
    "Food & Beverages",
  ];

  const imageField = register("image", {
    required: "Product image is required",
  });

  const handleImageChange = (e) => {
    imageField.onChange(e);

    const file = e.target.files[0];
    setThumbnail(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      // Clear preview if user cancels file selection
      setImagePreview(null);
    }
  };

  const calculateFinalPrice = () => {
    const price = parseFloat(watchedPrice) || 0;
    const discount = parseFloat(watchedDiscount) || 0;
    return price - (price * discount) / 100;
  };

  const onSubmit = async (data) => {
    let thumbnailImage = "";

    if (thumbnail) {
      const formData = new FormData();
      formData.append("image", thumbnail);

      const thumb = await axios.post(
        `https://api.imgbb.com/1/upload?key=898e44b732fe9177555b52db8dc098ff`,
        formData
      );

      thumbnailImage = thumb.data.data.url || "";
    }

    const product = {
      name: data.name,
      description: data.description,
      category: data.category,
      price: calculateFinalPrice(),
      discount: data.discount,
      thumbnail: thumbnailImage,
    };

    const res = await axiosSecure.post("/add-products", product);

    if (res.data.insertedId) {
      alert("Product Added");
    }
    // console.log(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-100 rounded-lg">
              <Package className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Product Management
              </h1>
              <p className="text-gray-600">
                Add new products to your inventory
              </p>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Product Image
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="image-upload"
                      className="hidden"
                      accept="image/*"
                      name={imageField.name}
                      onBlur={imageField.onBlur}
                      ref={imageField.ref}
                      onChange={handleImageChange}
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors bg-gray-50 hover:bg-gray-100"
                    >
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="flex flex-col items-center">
                          <Upload className="w-12 h-12 text-gray-400 mb-2" />
                          <p className="text-gray-600 text-center">
                            <span className="font-medium">Click to upload</span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-gray-500 text-sm">
                            PNG, JPG, JPEG up to 10MB
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                  {/* 4. Display the validation error */}
                  {errors.image && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.image.message}
                    </p>
                  )}
                </div>

                {/* Product Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Product Name
                  </label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter product name"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                      {...register("name", {
                        required: "Product name is required",
                      })}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Category
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors bg-white"
                    {...register("category", {
                      required: "Please select a category",
                    })}
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.category.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Description
                  </label>
                  <textarea
                    placeholder="Product Description"
                    className="border border-gray-300 p-3 rounded-xl w-95 md:w-100 lg:w-150"
                    rows={5}
                    {...register("description", {
                      required: "Please add a description",
                    })}
                  ></textarea>{" "}
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Pricing Section */}
                <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                  <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Pricing Details
                  </h3>

                  {/* Original Price */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Original Price ($)
                    </label>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                      {...register("price", {
                        required: "Price is required",
                        min: {
                          value: 0.01,
                          message: "Price must be greater than 0",
                        },
                        valueAsNumber: true, // IMPORTANT: ensures RHF treats value as a number
                      })}
                      min="0"
                      step="0.01"
                    />
                    {errors.price && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.price.message}
                      </p>
                    )}
                  </div>

                  {/* Discount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Discount (%)
                    </label>
                    <div className="relative">
                      <Percent className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        placeholder="0"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                        {...register("discount", {
                          min: {
                            value: 0,
                            message: "Discount cannot be negative",
                          },
                          max: {
                            value: 100,
                            message: "Discount cannot exceed 100%",
                          },
                          valueAsNumber: true, // IMPORTANT: ensures RHF treats value as a number
                        })}
                        min="0"
                        max="100"
                        step="1"
                      />
                    </div>
                    {errors.discount && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.discount.message}
                      </p>
                    )}
                  </div>

                  {/* Final Price Display */}
                  {watchedPrice !== undefined && watchedPrice !== null && (
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          Final Price:
                        </span>
                        <div className="text-right">
                          {watchedDiscount > 0 && (
                            <span className="text-sm text-gray-500 line-through block">
                              ${parseFloat(watchedPrice).toFixed(2)}
                            </span>
                          )}
                          <span className="text-xl font-semibold text-green-600">
                            ${calculateFinalPrice().toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Add Product Button */}
                <button
                  type="submit"
                  className="w-full bg-slate-700 hover:bg-slate-800 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Plus className="w-5 h-5" />
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Products
                </p>
                <p className="text-2xl font-semibold text-gray-900">1,247</p>
              </div>
              <Package className="w-8 h-8 text-slate-600" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Categories</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {categories.length}
                </p>
              </div>
              <Tag className="w-8 h-8 text-slate-600" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <p className="text-2xl font-semibold text-gray-900">$24,567</p>
              </div>
              <DollarSign className="w-8 h-8 text-slate-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
