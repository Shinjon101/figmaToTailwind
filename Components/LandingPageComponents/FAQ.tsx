import FAQitem from "./FAQitem";

const faqData = [
  {
    question: "Can I use Albino for my clients?",
    answer:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
  },
  {
    question: "Does it work with WordPress?",
    answer:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
  },
  {
    question: "Do I get free updates?",
    answer:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
  },
  {
    question: "Will you provide support?",
    answer:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="min-w-full bg-gray-900 flex justify-center py-10 md:py-15"
    >
      <div className="max-w-5xl grid-cols-1 grid md:grid-cols-2 gap-5 cursor-pointer mt-20 ml-10">
        {faqData.map((faq, index) => (
          <FAQitem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
