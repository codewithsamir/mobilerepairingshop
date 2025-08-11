import { Smartphone } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Header = () => {
      const navItems = [
  { item: 'HOME', href: '/' },
  { item: 'BOOK US', href: 'bookus' },
  { item: 'HOW IT WORKS', href: 'how-it-works' },
  { item: 'SERVICE AREAS', href: 'servicearea' }
];

  return (

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
           
              <div>
              <Image src="/assets/logo.png" alt="logo" width={200 } height={100}/>
                
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:block ">
              <div className="bg-blue-900 rounded-full px-8 py-3">
                <ul className="flex items-center space-x-8">
                  {navItems.map((item) => (
                    <li key={item.item}>
                      <Link
                        href={item.href}
                        className="text-white text-sm font-medium hover:text-blue-200 transition-colors duration-200"
                      >
                        {item.item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
  )
}

export default Header