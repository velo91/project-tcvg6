const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Penyedia Cloud Hosting Modern di Indonesia</h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Aceh Cloud lahir dari visi untuk menyediakan infrastruktur digital yang tangguh dan terjangkau bagi para pengembang, startup, dan perusahaan di Indonesia.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Kami menggunakan teknologi virtualisasi terbaru dan perangkat keras kelas enterprise untuk memastikan aplikasi Anda berjalan tanpa hambatan. Dengan pusat data yang strategis, kami menawarkan latensi rendah dan performa maksimal.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-4 rounded-xl">
                <h4 className="font-bold text-[#06B6D4]">Visi</h4>
                <p className="text-sm text-gray-400">Menjadi pilar infrastruktur cloud terpercaya.</p>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <h4 className="font-bold text-[#2563EB]">Misi</h4>
                <p className="text-sm text-gray-400">Memberikan layanan cloud berkualitas tinggi.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#2563EB]/20 blur-[100px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800" 
              alt="Server Room" 
              className="rounded-2xl relative z-10 border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;