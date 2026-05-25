import { Shield, Zap, Clock, Terminal, Cpu, Headphones } from 'lucide-react';

const features = [
  {
    title: "Uptime 99.9%",
    desc: "Jaminan ketersediaan layanan maksimal untuk bisnis Anda.",
    icon: Clock,
    color: "text-blue-500"
  },
  {
    title: "NVMe SSD Super Cepat",
    desc: "Penyimpanan generasi terbaru untuk kecepatan baca/tulis data kilat.",
    icon: Zap,
    color: "text-yellow-500"
  },
  {
    title: "Anti DDoS Protection",
    desc: "Keamanan berlapis untuk melindungi server dari serangan siber.",
    icon: Shield,
    color: "text-green-500"
  },
  {
    title: "Full Root Access",
    desc: "Kontrol penuh atas server Anda dengan akses root SSH.",
    icon: Terminal,
    color: "text-purple-500"
  },
  {
    title: "Instant Deployment",
    desc: "Server siap digunakan hanya dalam hitungan menit setelah pembayaran.",
    icon: Cpu,
    color: "text-cyan-500"
  },
  {
    title: "Support 24/7",
    desc: "Tim teknis kami siap membantu Anda kapan saja dibutuhkan.",
    icon: Headphones,
    color: "text-red-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-[#0F172A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Mengapa Memilih Aceh Cloud?</h2>
          <p className="text-gray-400">Fitur premium untuk performa tanpa kompromi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl hover:border-[#06B6D4]/50 transition-all group">
              <f.icon className={`w-12 h-12 ${f.color} mb-6 group-hover:scale-110 transition-transform`} />
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;