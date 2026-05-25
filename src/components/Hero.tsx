import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Cloud VPS <span className="text-gradient">Cepat, Stabil & Modern</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Infrastruktur cloud generasi terbaru dengan performa NVMe SSD untuk mendukung skalabilitas bisnis Anda di era digital.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-[#2563EB] hover:bg-[#1d4ed8] text-lg px-8 cyber-glow">
                Mulai Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-lg px-8">
                Lihat Paket
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-[#2563EB]/20 blur-[120px] rounded-full" />
            <div className="glass-card rounded-2xl p-8 md:p-12 relative border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-[#2563EB]/10 rounded-full">
                    <Zap className="w-8 h-8 text-[#2563EB]" />
                  </div>
                  <h3 className="text-xl font-bold">Ultra Fast</h3>
                  <p className="text-gray-400">NVMe SSD Storage</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-[#06B6D4]/10 rounded-full">
                    <Shield className="w-8 h-8 text-[#06B6D4]" />
                  </div>
                  <h3 className="text-xl font-bold">Secure</h3>
                  <p className="text-gray-400">Anti-DDoS Protection</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-purple-500/10 rounded-full">
                    <Rocket className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold">Scalable</h3>
                  <p className="text-gray-400">Instant Deployment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;