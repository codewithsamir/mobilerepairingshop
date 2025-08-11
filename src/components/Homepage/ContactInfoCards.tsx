import React from "react";
import { ArrowRight, Home, MessageCircle } from "lucide-react";



const ContactInfoCards: React.FC = () => {
  const cards: CardData[] = [
    {
      title: "Contact Us",
      content: (
        <>
          <p className="font-semibold">iCloud Wireless Dallas</p>
          <p className="text-gray-600 mt-2">
            Serving Dallas and nearby areas including Plano, Richardson, Irving, 
            Garland, Mesquite, and Carrollton.
          </p>
          <p className="mt-4 font-medium">Phone Numbers</p>
          <p className="text-gray-600">(214) 436-7998</p>
          <p className="text-gray-600">(469) 544-7447</p>
          <p className="mt-4 font-medium">Support Email</p>
          <p className="text-blue-600">itech@icloudwireless.com</p>
        </>
      ),
      buttonLabel: "Speak with a Tech",
      buttonIcon: <ArrowRight className="w-5 h-5" />,
      buttonBg: "bg-white",
    },
    {
      title: "Our Service Areas",
      content: (
        <>
          <p className="font-semibold">Primary Service Locations</p>
          <p className="text-gray-600 mt-2">
            Dallas, Plano, Richardson, Irving, Garland, Mesquite, Carrollton, 
            and surrounding communities in Texas.
          </p>
        </>
      ),
      buttonLabel: "View Service Areas",
      buttonIcon: <Home className="w-5 h-5" />,
      buttonBg: "bg-blue-50",
    },
    {
      title: "Live Chat Support",
      content: (
        <div className="flex flex-col items-center justify-center flex-1 text-center">
          <p className="text-4xl font-bold text-gray-900">
            We're online, ready to help!
          </p>
          <div className="mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3.75h6m4.5 6a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      ),
      buttonLabel: "Start a Chat",
      buttonIcon: <MessageCircle className="w-5 h-5" />,
      buttonBg: "bg-blue-50",
    },
  ];
  

  return (
    <section className="py-16 md:mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-xl shadow-sm flex flex-col p-6"
            style={{ minHeight: "100%" }}
          >
            <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wider mb-4">
              {card.title}
            </h3>
            <div className="text-md flex-1">{card.content}</div>
            <button
              className={`mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium  ${card.buttonBg}`}
            >
              {card.buttonIcon}
              {card.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfoCards;
