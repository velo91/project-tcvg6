import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Andi Wijaya",
    role: "CTO TechStart",
    content: "Pindah ke Aceh Cloud adalah keputusan terbaik. Latensinya sangat rendah dan supportnya sangat responsif.",
    avatar: "https://i.pravatar.cc/150?u=andi"
  },
  {
    name: "Siti Aminah",
    role: "Fullstack Developer",
    content: "Setup VPS hanya butuh hitungan menit. Dashboardnya sangat intuitif dan mudah digunakan.",
    avatar: "https://i.pravatar.cc/150?u=siti"
  },
  {
    name: "Budi Santoso",
    role: "Owner E-commerce",
    content: "Website toko online saya jadi jauh lebih cepat sejak menggunakan NVMe VPS dari Aceh Cloud.",
    avatar: "https://i.pravatar.cc/150?u=budi"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#0F172A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Apa Kata Mereka?</h2>
          <p className="text-gray-400">Kepercayaan pelanggan adalah prioritas kami</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl border-white/5">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
              </div>
              <p className="text-gray-300 mb-6 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-[#2563EB]" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;