

const Faq = () => {
  const faq = [
    {
      question: "How do I apply for a job?",
      answer:
        "You can apply for a job by clicking on the job listing and following the application instructions provided.",
    },
    {
      question: "Are these jobs remote or on-site?",
      answer:
        "We offer a mix of remote, on-site, and hybrid job opportunities. Please check the job details for specific information.",
    },
    {
      question: "Is there a fee to apply for jobs?",
      answer: "No, applying for jobs through our platform is completely free.",
    },
    {
      question: "How often are new jobs posted?",
      answer:
        "New jobs are posted daily, so make sure to check back regularly for the latest opportunities.",
    },
  ];

  return (
    <div className="faq-section p-6 mt-16 text-center rounded-3xl">
      <h2 className="text-5xl pb-14 custom-text">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faq.map((item, index) => (
          <div
            key={index}
            tabIndex={0}
            className="collapse collapse-arrow border border-gray-300 bg-base-100 rounded-lg mb-4"
          >
            <div className="collapse-title text-xl font-semibold">
              {item.question}
            </div>
            <div className="collapse-content">
              <p className="text-lg">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
