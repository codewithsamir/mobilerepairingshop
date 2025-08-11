'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';



const tabsData: TabData[] = [
  {
    id: 'how-it-works',
    label: 'HOW IT WORKS',
    title: 'Comprehensive Mobile Repair Services:',
    content: 'iCloud Wireless – Fast, reliable phone and tablet repairs delivered conveniently to your doorstep in Dallas and surrounding areas.',
    features: [
      'Wide range of repairs including screen replacement, battery swap, charging port repair, back glass replacement, and diagnostic services for Apple, Samsung, Google, and other popular devices.'
    ],
    buttonText: 'Learn More'
  },
  {
    id: 'what-to-expect',
    label: 'WHAT TO EXPECT',
    title: 'Professional & Convenient Service:',
    content: 'Certified technicians arrive equipped with all necessary tools and parts, providing transparent and friendly service at your location.',
    features: [
      'Same-day appointments available',
      'Experienced and certified technicians',
      'Use of high-quality genuine and OEM parts',
      'Real-time updates during your repair'
    ],
    buttonText: 'View Process'
  },
  {
    id: 'our-guarantee',
    label: 'OUR GUARANTEE',
    title: 'Quality Assurance & Warranty:',
    content: 'We stand by our repairs with a 30-day warranty on parts and labor, ensuring your peace of mind.',
    features: [
      '30-day warranty on all repairs and parts',
      'Satisfaction guaranteed or your money back',
      'Free diagnostic with repair',
      'Ongoing customer support post-repair'
    ],
    buttonText: 'Read Warranty'
  },
  {
    id: 'your-privacy',
    label: 'YOUR PRIVACY',
    title: 'Data Protection & Security:',
    content: 'Your data and privacy are protected with industry-leading security standards throughout the repair process.',
    features: [
      'No access to personal files during repair',
      'Secure device handling and storage',
      'Encrypted communication and data transfer',
      'Strict privacy protocols in place'
    ],
    buttonText: 'Privacy Policy'
  },
  {
    id: 'about-us',
    label: 'ABOUT US',
    title: 'Trusted Mobile Repair Experts:',
    content: 'With years of experience, iCloud Wireless combines expert technicians and advanced technology to deliver exceptional repair services.',
    features: [
      'Over 10 years of mobile repair experience',
      'Thousands of happy customers in Dallas and beyond',
      'Partnerships with top device manufacturers',
      'Commitment to sustainable repair and device refurbishment'
    ],
    buttonText: 'Our Story'
  }
];


export default function TabbedSection() {
  const [activeTab, setActiveTab] = useState('how-it-works');
  const [hoverTab, setHoverTab] = useState<string | null>(null);

  const currentTab = tabsData.find(tab => tab.id === (hoverTab || activeTab)) || tabsData[0];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 px-6">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            THIS IS HOW WE DO IT!
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            How it Works, What to<br />
            Expect, and Our Guarantee.
          </h2>
        </div>

        {/* Tabs Container */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-6">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={() => setHoverTab(tab.id)}
                onMouseLeave={() => setHoverTab(null)}
                className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  (hoverTab || activeTab) === tab.id
                    ? 'bg-white text-slate-900 shadow-lg transform scale-105'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px]">
            <div className="space-y-6">
              <div className="text-white">
                <p className="text-lg leading-relaxed mb-4">
                  {currentTab.content}
                </p>
                
                <h3 className="text-xl font-semibold mb-4">
                  {currentTab.title}
                </h3>
                
                {currentTab.features && (
                  <div className="space-y-3">
                    {currentTab.features.map((feature, index) => (
                      <p key={index} className="text-white/90 leading-relaxed">
                        {feature}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Learn More Button */}
              <div className="pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {currentTab.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}