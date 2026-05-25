import { Cloud, Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Cloud className="h-8 w-8 text-[#2563EB]" />
              <span className="text-2xl font-bold tracking-tight">
                Aceh<span className="text-[#06B6D4]">Cloud</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Solusi infrastruktur cloud modern untuk masa depan digital Indonesia. Cepat, aman, dan terpercaya.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#2563EB] transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#2563EB] transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#2563EB] transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#2563EB] transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Layanan</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Cloud VPS</a></li>
              <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Dedicated Server</a></li>
              <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Domain Registration</a></li>
              <li><a href="#" className="hover:text-[#06B6D4] transition-colors">SSL Certificates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Perusahaan</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Bantuan</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Status Server</a></li>
              <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#06B6D4] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Aceh Cloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;