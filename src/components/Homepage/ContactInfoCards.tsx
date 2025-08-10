import React from "react";
import { ArrowRight, Home, MessageCircle } from "lucide-react";



const ContactInfoCards: React.FC = () => {
  const cards: CardData[] = [
    {
      title: "Contact Us",
      content: (
        <>
          <p className="font-semibold">ITECHS® San Francisco</p>
          <p className="text-gray-600 mt-2">
            In the San Francisco Bay area ITECHS services San Francisco, Daly City,
            South San Francisco, San Bruno, Brisbane, Colma, Pacifica, Millbrae,
            Burlingame, San Mateo.
          </p>
          <p className="text-gray-600 mt-4">
            Mission District, SOMA (South of Market), The Castro, Nob Hill,
            Chinatown, North Beach, Haight-Ashbury, Marina District, Noe Valley,
            Outer Sunset.
          </p>
          <p className="mt-4 font-medium">Phone Numbers</p>
          <p className="text-gray-600">(415) 483-9625</p>
          <p className="mt-4 font-medium">Support Email</p>
          <p className="text-blue-600">help@itechs.repair</p>
        </>
      ),
      buttonLabel: "Speak with a Tech",
      buttonIcon: <ArrowRight className="w-5 h-5" />,
      buttonBg: "bg-white",
    },
    {
      title: "ITECHS® California Locations",
      content: (
        <>
          <p className="font-semibold">ITECHS® Santa Clara County</p>
          <p className="text-gray-600 mt-2">
            In Santa Clara County, ITECHS services San Jose, Sunnyvale, Mountain View,
            Palo Alto, Milpitas, Cupertino, Gilroy, Campbell, Los Gatos, Morgan Hill,
            and Los Altos.
          </p>
          <hr className="my-4" />
          <p className="font-semibold">ITECHS® Sacramento</p>
          <p className="text-gray-600 mt-2">
            Sac, Elk Grove, Citrus Heights, Folsom, Rancho Cordova, Galt, North
            Highlands, Roseville, Natomas, Orangevale, Antelope, Rio Linda, West
            Sacramento, Midtown, Pocket-Greenhaven, Arden-Arcade.
          </p>
          <hr className="my-4" />
          <p className="font-semibold">ITECHS® Orange County</p>
          <p className="text-gray-600 mt-2">
            Anaheim, Santa Ana, Costa Mesa, Fountain Valley, Fullerton, Garden Grove,
            Huntington Beach, Irvine, La Habra, Lake Forest, Los Alamitos, Mission
            Viejo, Newport Beach, Orange, Placentia.
          </p>
        </>
      ),
      buttonLabel: "Our Communities",
      buttonIcon: <Home className="w-5 h-5" />,
      buttonBg: "bg-blue-50",
    },
    {
      title: "ITECHS Live Chat",
      content: (
        <div className="flex flex-col items-center justify-center flex-1 text-center">
          <p className="text-4xl font-bold text-gray-900">
            We are online, let’s talk!
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
