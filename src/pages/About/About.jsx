import React from "react";
import { Package, Users, Award, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Years in Business", value: "10+" },
    { label: "Happy Customers", value: "50K+" },
    { label: "Products", value: "5000+" },
    { label: "Countries", value: "25+" },
  ];

  const values = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Quality Products",
      description:
        "We curate only the finest products from trusted brands and manufacturers worldwide.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We provide exceptional service at every step.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Trusted Brand",
      description:
        "Built on integrity and trust, we have become a name you can rely on.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We continuously evolve to bring you the latest trends and technology.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Our Story
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Delivering quality products and exceptional service since 2014
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-gray-600 mb-4">
              What started as a small passion project in 2014 has grown into a
              thriving ecommerce platform serving customers across the globe. We
              believed that shopping online should be easy, trustworthy, and
              delightful.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've built strong relationships with suppliers
              and customers alike, always putting quality and service at the
              forefront of everything we do.
            </p>
            <p className="text-gray-600">
              Today, we're proud to offer thousands of products across multiple
              categories, backed by a dedicated team committed to your
              satisfaction.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg h-96 flex items-center justify-center">
            <Package className="w-32 h-32 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and help us serve you
              better every day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            To provide an exceptional shopping experience by offering quality
            products, competitive prices, and outstanding customer service that
            exceeds expectations.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-600 mb-8">
            Become part of our growing family and experience the difference of
            shopping with a brand that cares.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-200">
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
