import React, { useState } from 'react';

const TabsGallery = ({ item }) => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional attributes', label: 'Additional Attributes' },
    { id: 'reviews', label: `Reviews [${item?.reviews?.length || 0}]` },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <p className="text-slate-500 font-light leading-relaxed"> {item?.description} </p>
        );
      case 'additional attributes':
        return (
          <p className="text-slate-500 font-light leading-relaxed">
            {item?.additionalAttributes}
            Keep going. The future depends on what you do today, not tomorrow. The only limit to our realization of
            tomorrow will be our doubts of today.
          </p>
        );
      case 'reviews':
        return (
          <div className="space-y-6 text-gray-700">
            {item?.reviews?.map((review, index) => (
              <div key={index} className="border-b pb-6 last:border-none">

                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium mb-1">
                  <span>{'★'.repeat(review?.rating)}</span>
                  <span className="text-gray-600 ml-2">{review?.rating}/5</span>
                </div>

                {/* Comment */}
                <p className="text-base text-gray-800 mb-2 leading-relaxed">
                  {review?.comment}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                  <p className="font-semibold text-gray-700">{review?.reviewerName}</p>
                  <p>{new Date(review?.date).toLocaleDateString()}</p>
                  <p className="text-gray-400 text-xs">{review?.reviewerEmail}</p>
                </div>
              </div>
            ))}
          </div>

        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className=" max-w-3xl mx-auto">
        <ul className="flex flex-wrap list-none" role="tablist">
          {tabs.map((tab) => (
            <li key={tab.id} className="flex-1 text-center min-w-[200px]">
              <button
                className={`w-full  text-xl font-medium transition-all duration-200 rounded-md ${activeTab === tab.id
                  ? 'text-primary'
                  : 'text-secondary hover:text-primary'
                  } `}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5 max-w-6xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabsGallery;
