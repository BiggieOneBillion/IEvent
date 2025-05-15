"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
  category: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [activeCategory, setActiveCategory] = useState<string>("general")

  const faqItems: FAQItem[] = [
    {
      question: "What is Eventify?",
      answer:
        "Eventify is a comprehensive event management platform that helps you create, promote, and manage events of any size. From small meetups to large conferences, our platform provides all the tools you need to make your event successful.",
      category: "general",
    },
    {
      question: "How much does Eventify cost?",
      answer:
        "Eventify offers a free tier for basic events with up to 50 attendees. For larger events with more features, we offer Professional and Enterprise plans. You can view our pricing details on our pricing page or contact our sales team for a custom quote.",
      category: "general",
    },
    {
      question: "Can I try Eventify before purchasing?",
      answer:
        "Yes! You can sign up for a free account and explore the platform's features. The free tier allows you to create and manage basic events, so you can get a feel for how Eventify works before upgrading to a paid plan.",
      category: "general",
    },
    {
      question: "How do I create my first event?",
      answer:
        "Creating an event is simple. After signing up, click on the 'Create Event' button on your dashboard. Fill in the event details such as name, date, location, and description. You can then customize your event page, set up registration forms, and start promoting your event.",
      category: "getting-started",
    },
    {
      question: "Can I customize the registration form?",
      answer:
        "Eventify allows you to fully customize your registration forms. You can add custom fields, make fields required or optional, and even create conditional logic to show or hide fields based on previous answers.",
      category: "getting-started",
    },
    {
      question: "How do attendees register for my event?",
      answer:
        "Attendees can register through your event page, which you can share via a direct link, embed on your website, or share on social media. The registration process is simple and mobile-friendly, ensuring a smooth experience for your attendees.",
      category: "getting-started",
    },
    {
      question: "Can I sell tickets through Eventify?",
      answer:
        "Yes, Eventify supports ticket sales with various pricing tiers. You can create different ticket types (e.g., Early Bird, VIP, Standard) with different prices and availability. We integrate with popular payment processors to handle transactions securely.",
      category: "features",
    },
    {
      question: "Does Eventify support virtual events?",
      answer:
        "Yes, Eventify fully supports virtual events. You can integrate with popular video conferencing platforms, manage virtual attendee registration, and even host hybrid events with both in-person and virtual components.",
      category: "features",
    },
    {
      question: "Can I send emails to my attendees?",
      answer:
        "Yes, Eventify includes email marketing tools that allow you to send announcements, reminders, and follow-ups to your attendees. You can create email templates, schedule emails, and track open and click rates.",
      category: "features",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "Eventify supports major credit cards, PayPal, and bank transfers. For enterprise customers, we can also set up custom payment methods. All payments are processed securely through our PCI-compliant payment system.",
      category: "payments",
    },
    {
      question: "How do refunds work?",
      answer:
        "You can set your own refund policy for your events. Eventify allows you to process full or partial refunds directly through the platform. You can also set automatic refund rules based on cancellation timing.",
      category: "payments",
    },
    {
      question: "Is there a fee for processing payments?",
      answer:
        "Eventify charges a small processing fee for each transaction, which varies depending on your plan. The fee is transparent and will be clearly displayed before you set up your event pricing.",
      category: "payments",
    },
  ]

  const categories = [
    { id: "general", name: "General" },
    { id: "getting-started", name: "Getting Started" },
    { id: "features", name: "Features" },
    // { id: "payments", name: "Payments & Billing" },
  ]

  const filteredFAQs = faqItems.filter((item) => item.category === activeCategory)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-violet-100 rounded-full opacity-70 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Eventify and how it can help you create successful events.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
                setOpenIndex(0)
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden transition-all duration-300 shadow-sm border border-gray-100 ${
                  openIndex === index ? "shadow-md" : ""
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <div
                    className={`ml-4 flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index
                        ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        {/* <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all"
          >
            Contact Us
          </a>
        </div> */}
      </div>
    </section>
  )
}
