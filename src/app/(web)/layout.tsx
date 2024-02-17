import { NavBar } from '@/components/nav-bar';
import Image from 'next/image';
import logo from '../../../public/logo-text-white.svg';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      {children}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <Image src={logo} alt="CountdownForge Logo" className="h-8 mb-4" />
            </div>
            <div className="w-full flex items-end justify-between">
              <p>&copy; 2024 CountdownForge. All Rights Reserved.</p>
              <ul className="flex flex-wrap items-center justify-center md:justify-end space-x-4">
                <li><Link href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-gray-400">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}