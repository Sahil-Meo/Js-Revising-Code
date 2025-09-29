import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BlogCategories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = [
    { name: 'Crafts', count: 2 },
    { name: 'Design', count: 8 },
    { name: 'Handmade', count: 7 },
  ];

  const recentPosts = [
    {
      title: 'Going all-in with millennial design',
      date: '03 Aug 2022',
      image: '/1-05fe5d0a.jpg',
    },
    {
      title: 'Going all-in with millennial design',
      date: '03 Aug 2022',
      image: '/1-05fe5d0a.jpg',
    },
    {
      title: 'Going all-in with millennial design',
      date: '03 Aug 2022',
      image: '/1-05fe5d0a.jpg',
    },
  ];

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    toast.success("This functionality is not implemented yet");
  }

  return (
    <aside className="w-full order-first lg:order-last lg:sticky top-8 self-start lg:w-3/12">
      <form onSubmit={handleSubmitSearch} className="relative mb-6">
        <img
          className="absolute right-3 top-3 w-5 h-5"
          src="/img/navbar/search.svg"
          alt="Search icon"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="border border-[#9F9F9F] rounded-lg w-full focus:outline-none p-3 text-sm"
        />
      </form>

      <div className="flex flex-col gap-20">
        <section className="px-8">
          <p className="font-medium text-2xl mb-10">Categories</p>
          <div className="flex flex-col gap-8 text-[#9F9F9F]">
            {categories.map((cat, index) => (
              <div key={index} className="flex justify-between w-full">
                <span>{cat.name}</span>
                <span>{cat.count}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="px-8">
          <p className="font-medium text-2xl mb-6">Recent Posts</p>
          <div className="flex flex-col gap-6">
            {recentPosts.map((post, index) => (
              <div key={index} className="w-10/12 flex gap-3 items-center">
                <img
                  loading="lazy"
                  className="w-20 h-20 object-cover rounded-lg"
                  src={post.image}
                  alt={`Blog thumbnail ${index + 1}`}
                />
                <div className="flex flex-col gap-1">
                  <span className="text-sm">{post.title}</span>
                  <span className="text-xs text-[#9F9F9F]">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
};

export default BlogCategories;
