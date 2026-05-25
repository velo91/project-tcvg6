import React from 'react';
import { Cloud, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Cloud className="h-8 w-8 text-[#2563EB]" />
            <span className="text-2xl font-bold tracking-tight">
              Aceh<span className="text-[#06B6D4]">Cloud</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#vps" className="text-sm font-medium hover:text-[#06B6D4] transition-colors">VPS</a>
            <a href="#features" className="text-sm font-medium hover:text-[#06B6D4] transition-colors">Fitur</a>
            <a href="#about" className="text-sm font-medium hover:text-[#06B6D4] transition-colors">Tentang</a>
            <a href="#contact" className="text-sm font-medium hover:text-[#06B6D4] transition-colors">Kontak</a>
            <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] cyber-glow">Login</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-white/10 p-4 space-y-4">
          <a href="#vps" className="block text-lg">VPS</a>
          <a href="#features" className="block text-lg">Fitur</a>
          <a href="#about" className="block text-lg">Tentang</a>
          <a href="#contact" className="block text-lg">Kontak</a>
          <Button className="w-full bg-[#2563EB]">Login</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;