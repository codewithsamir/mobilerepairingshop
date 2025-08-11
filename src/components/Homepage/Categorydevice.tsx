"use client"
import { Smartphone, Tablet, Watch, ChevronDown, ChevronLeft } from "lucide-react";
import { useState } from "react";





const CategorySelector: React.FC<{ data: CategoryItem[] }> = ({ data }) => {
  const [history, setHistory] = useState<CategoryItem[][]>([data]);

  const currentLevel = history[history.length - 1];

  const handleSelect = (item: CategoryItem) => {
    if (item.subcategories) {
      setHistory((prev) => [...prev, item.subcategories!]);
    } else {
      alert(`Selected: ${item.name}`);
    }
  };

  const handleBack = () => {
    if (history.length > 1) {
      setHistory((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 h-[600px] overflow-y-auto flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-8">
        {history.length > 1 && (
          <button onClick={handleBack} className="mr-2">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
        )}
        <h3 className="text-2xl font-semibold text-gray-900">
          {history.length === 1 ? "Find Your Price | Schedule" : "Choose Category"}
        </h3>
      </div>

      {/* List */}
      <div className="space-y-4 flex-grow">
        {currentLevel.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(item)}
            className={`w-full flex items-center justify-between p-2 rounded-xl border-2 transition-all duration-200 border-gray-200 hover:border-gray-300 hover:bg-gray-50`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                {item.icon || <Smartphone className="w-6 h-6 text-gray-600" />}
              </div>
              <span className="text-gray-900 font-medium">{item.name}</span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </button>
        ))}
      </div>

      {/* Footer */}
      {history.length === 1 && (
        <>
          <div className="mt-8 p-4 bg-gray-50 rounded-xl">
            <button className="w-full flex items-center justify-between p-3 text-left">
              <span className="text-gray-700">More options</span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="mt-6 text-xs text-gray-500 leading-relaxed">
            By submitting your information, you are opting in to receive service related SMS messages from ITECHS.
            Please note that standard message and data rates may apply. You can unsubscribe at any time by replying 'STOP'.
          </div>


        
        </>
      )}
    </div>
  );
};

export default CategorySelector