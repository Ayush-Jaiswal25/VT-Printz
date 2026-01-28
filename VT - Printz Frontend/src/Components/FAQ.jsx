// import { useState } from "react";

// const faqs = [
//   {
//     question: "What is your return policy?",
//     answer:
//       "We offer a 30-day return policy. If you’re not satisfied with your purchase, you can return it within 30 days for a full refund.",
//   },
//   {
//     question: "Do you offer international shipping?",
//     answer:
//       "Yes! We ship to over 50 countries worldwide. Shipping costs may vary depending on your location.",
//   },
//   {
//     question: "How can I track my order?",
//     answer:
//       "Once your order is shipped, we’ll send you a tracking number via email so you can track your package in real-time.",
//   },
//   {
//     question: "Can I change my order after placing it?",
//     answer:
//       "Yes, you can modify your order within 24 hours of placing it. After that, it will be processed and shipped.",
//   },
// ];

// export default function FAQ() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="max-w-4xl mx-auto px-4 py-16">
//       <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
//         Frequently Asked Questions
//       </h2>
//       <div className="space-y-4">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
//           >
//             <button
//               onClick={() => toggleFAQ(index)}
//               className="w-full flex justify-between items-center p-5 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
//             >
//               <span className="text-lg font-medium text-gray-900 dark:text-white">
//                 {faq.question}
//               </span>
//               <span className="text-2xl text-gray-500 dark:text-gray-300">
//                 {activeIndex === index ? "-" : "+"}
//               </span>
//             </button>
//             <div
//               className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
//                 activeIndex === index ? "max-h-96 p-5" : "max-h-0"
//               } bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300`}
//             >
//               {faq.answer}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { act, useState } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy. If you’re not satisfied with your purchase, you can return it within 30 days for a full refund.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes! We ship to over 50 countries worldwide. Shipping costs may vary depending on your location.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, we’ll send you a tracking number via email so you can track your package in real-time.",
  },
  {
    question: "Can I change my order after placing it?",
    answer:
      "Yes, you can modify your order within 24 hours of placing it. After that, it will be processed and shipped.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" mx-auto  pb-16 ">

<div className=" py-[10px] bg-gradient-to-b from-gray-100 to-[#fadbe9] relative overflow-hidden"></div>
  <div className=" py-[40px] bg-gradient-to-b to-[#ffffff] from-[#fadbe9] relative overflow-hidden"></div>

      <h2 className="text-4xl font-extrabold text-center mb-12 text-pink-600">
        Frequently <span className="border-b-2 border-[#0085E1]">Asked</span> Questions
      </h2>
      



      <div className="space-y-4 px-4 sm:px-16">
        {faqs.map((faq, index) => (
          <div key={index}
            className={`border-2 rounded-xl overflow-hidden shadow-lg transition-transform transform  
              ${ activeIndex === index ? "border-pink-600" : "border-blue-600" }
              
            `}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center p-4 bg-gradient-to-r 
                ${ activeIndex === index ? "border-b-2 border-[#DB2A7B]" : ''}
                ${ activeIndex === index ? "from-pink-200 to-pink-300" : "from-blue-100 to-blue-200" }
                ${ activeIndex === index ? "hover:from-pink-200 hover:to-pink-300" : "hover:from-blue-200 hover:to-blue-300" }
              transition-all`}
            >
              <span className="text-xl font-semibold text-gray-900 ">
                {faq.question}
              </span>
              <span
                className={`text-3xl font-bold transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45 text-pink-600" : "text-blue-600"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`transition-[max-height,padding] duration-500 ease-in-out overflow-hidden bg-gradient-to-r  text-[#0085E1] 
                ${
                activeIndex === index ? "max-h-96 p-4" : "max-h-0 p-0"
              }
              ${ activeIndex === index ? "from-pink-100 to-pink-200" : "from-blue-100 to-blue-200" }
              `}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
