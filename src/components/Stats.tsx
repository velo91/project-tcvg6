import { motion } from 'framer-motion';

const stats = [
  { label: "Server Aktif", value: "500+" },
  { label: "Total Client", value: "2,500+" },
  { label: "Uptime", value: "99.9%" },
  { label: "Datacenter", value: "5" }
];

const Stats = () => {
  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{s.value}</div>
              <div className="text-gray-400 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;