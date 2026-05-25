import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const packages = [
  {
    name: "Starter Cloud",
    ram: "2 GB",
    cpu: "1 vCPU",
    storage: "40 GB NVMe",
    bandwidth: "1 TB",
    price: "Rp 150.000",
    popular: false
  },
  {
    name: "Business Pro",
    ram: "4 GB",
    cpu: "2 vCPU",
    storage: "80 GB NVMe",
    bandwidth: "2 TB",
    price: "Rp 300.000",
    popular: true
  },
  {
    name: "Enterprise",
    ram: "8 GB",
    cpu: "4 vCPU",
    storage: "160 GB NVMe",
    bandwidth: "4 TB",
    price: "Rp 600.000",
    popular: false
  },
  {
    name: "Ultimate",
    ram: "16 GB",
    cpu: "8 vCPU",
    storage: "320 GB NVMe",
    bandwidth: "Unlimited",
    price: "Rp 1.200.000",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="vps" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pilih Paket VPS Anda</h2>
          <p className="text-gray-400">Performa tinggi dengan harga yang kompetitif</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`glass-card rounded-2xl p-8 flex flex-col relative ${pkg.popular ? 'border-[#2563EB] cyber-glow' : 'border-white/10'}`}
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded-full">
                  PALING POPULER
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">{pkg.price}</span>
                <span className="text-gray-400 text-sm">/bln</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-[#06B6D4]" /> {pkg.ram} RAM
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-[#06B6D4]" /> {pkg.cpu} vCPU
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-[#06B6D4]" /> {pkg.storage} SSD
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-[#06B6D4]" /> {pkg.bandwidth} Bandwidth
                </li>
              </ul>
              <Button className={`w-full ${pkg.popular ? 'bg-[#2563EB] hover:bg-[#1d4ed8]' : 'bg-white/10 hover:bg-white/20'}`}>
                Pesan Sekarang
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;