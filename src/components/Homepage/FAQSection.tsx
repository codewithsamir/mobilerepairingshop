import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqInfo, faqQuestions } from "@/lib/data";
import { Clock, Users } from "lucide-react";
import { JSX } from "react";


const iconMap: Record<string, JSX.Element> = {
  clock: <Clock className="w-6 h-6 text-white" />,
  users: <Users className="w-6 h-6 text-white" />,
};

export default function FaqSection() {
  return (
    <section className=" text-white py-16 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-4xl font-bold mb-6">{faqInfo.title}</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">{faqInfo.description}</p>

          {faqInfo.highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 mb-8">
              {iconMap[item.icon]}
              <div>
                <h4 className="font-bold text-white">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <div className="bg-white text-black rounded-md border-t-4 border-blue-500 p-4">
            <Accordion type="single" collapsible>
              {faqQuestions.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx + 1}`}>
                  <AccordionTrigger className="font-bold">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
