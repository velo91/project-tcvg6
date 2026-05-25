import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Hubungi Kami</h2>
            <p className="text-gray-400 text-lg mb-10">
              Punya pertanyaan teknis atau butuh penawaran khusus? Tim kami siap membantu Anda 24/7.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#2563EB]/10 rounded-lg">
                  <Mail className="text-[#2563EB]" />
                </div>
                <div>
                  <h4 className="font-bold">Email Support</h4>
                  <p className="text-gray-400">support@acehcloud.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#06B6D4]/10 rounded-lg">
                  <MessageSquare className="text-[#06B6D4]" />
                </div>
                <div>
                  <h4 className="font-bold">Live Chat</h4>
                  <p className="text-gray-400">WhatsApp: +62 812-3456-7890</p>
                  <p className="text-gray-400">Telegram: @AcehCloudSupport</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <MapPin className="text-purple-500" />
                </div>
                <div>
                  <h4 className="font-bold">Alamat Kantor</h4>
                  <p className="text-gray-400">Jl. Teuku Umar No. 123, Banda Aceh, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nama Lengkap</label>
                  <Input placeholder="John Doe" className="bg-white/5 border-white/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="john@example.com" className="bg-white/5 border-white/10" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subjek</label>
                <Input placeholder="Tanya Paket VPS" className="bg-white/5 border-white/10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Pesan</label>
                <Textarea placeholder="Tulis pesan Anda di sini..." className="bg-white/5 border-white/10 min-h-[150px]" />
              </div>
              <Button className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] py-6 text-lg cyber-glow">
                Kirim Pesan <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;