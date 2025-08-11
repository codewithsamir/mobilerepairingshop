import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

interface TabData {
  id: string;
  label: string;
  title: string;
  content: string;
  features?: string[];
  buttonText?: string;
}

const tabsData: TabData[] = [
  {
    id: 'how-it-works',
    label: 'HOW IT WORKS',
    title: 'Comprehensive Repair Services:',
    content: 'iTECHS® Mobile – The Fastest, Most Convenient Phone Repair Service Redefined by Our Revolutionary Mobile Service, Delivered Curbside to you, at your Beck and Call.',
    features: [
      'We offer a wide range of repair services, including screen repair, battery replacement, charger port repair, back glass repair, and diagnostic services for popular brands like Apple, Samsung, Motorola, Google, and OnePlus devices.'
    ],
    buttonText: 'Learn More'
  },
  {
    id: 'what-to-expect',
    label: 'WHAT TO EXPECT',
    title: 'Professional Service Excellence:',
    content: 'Experience unmatched quality and convenience with our certified technicians who bring the repair shop directly to your location.',
    features: [
      'Same-day service appointments available',
      'Certified technicians with years of experience',
      'High-quality parts and tools used for all repairs',
      'Real-time updates on repair progress'
    ],
    buttonText: 'View Process'
  },
  {
    id: 'our-guarantee',
    label: 'OUR GUARANTEE',
    title: 'Quality Assurance Promise:',
    content: 'We stand behind our work with comprehensive warranties and satisfaction guarantees that give you peace of mind.',
    features: [
      '90-day warranty on all repairs and parts',
      '100% satisfaction guarantee or your money back',
      'Free diagnostic and consultation service',
      'Lifetime support for all completed repairs'
    ],
    buttonText: 'Read Warranty'
  },
  {
    id: 'your-privacy',
    label: 'YOUR PRIVACY',
    title: 'Data Protection & Security:',
    content: 'Your personal information and device data are protected with industry-leading security measures throughout the entire repair process.',
    features: [
      'GDPR compliant data handling procedures',
      'Encrypted data transfer and storage',
      'No access to personal files during repair',
      'Secure device pickup and delivery protocols'
    ],
    buttonText: 'Privacy Policy'
  },
  {
    id: 'about-us',
    label: 'ABOUT US',
    title: 'Industry Leaders in Mobile Repair:',
    content: 'Founded with a mission to revolutionize mobile device repair, we combine cutting-edge technology with personalized service to deliver exceptional results.',
    features: [
      'Over 10 years of mobile repair expertise',
      'Serving thousands of satisfied customers',
      'Partnerships with major device manufacturers',
      'Commitment to environmental responsibility through device refurbishment'
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