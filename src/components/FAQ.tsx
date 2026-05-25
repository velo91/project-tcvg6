import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Apa itu Cloud VPS?",
    a: "Cloud VPS adalah server virtual yang berjalan di atas infrastruktur cloud, memberikan sumber daya terdedikasi dan fleksibilitas tinggi dibandingkan shared hosting."
  },
  {
    q: "Berapa lama proses aktivasi server?",
    a: "Proses aktivasi dilakukan secara instan. Setelah pembayaran terverifikasi, server Anda akan siap dalam waktu kurang dari 5 menit."
  },
  {
    q: "Apakah saya bisa upgrade paket kapan saja?",
    a: "Ya, Anda dapat melakukan upgrade RAM, CPU, atau Storage kapan saja melalui dashboard tanpa perlu install ulang OS."
  },
  {
    q: "Apakah ada bantuan migrasi?",
    a: "Tentu! Tim support kami siap membantu proses migrasi data dari provider lama Anda ke Aceh Cloud secara gratis."
  }
];

const FAQ = () => {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pertanyaan Umum</h2>
          <p className="text-gray-400">Segala hal yang perlu Anda ketahui tentang layanan kami</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass-card px-6 rounded-xl border-white/10">
              <AccordionTrigger className="text-left hover:no-underline font-bold py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;