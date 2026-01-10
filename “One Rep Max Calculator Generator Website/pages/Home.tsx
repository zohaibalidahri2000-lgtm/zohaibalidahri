
import React from 'react';
import Calculator from '../components/Calculator';
import { FAQItem } from '../types';

const FAQS: FAQItem[] = [
  {
    question: "What is a One Rep Max (1RM)?",
    answer: "A One Rep Max is the maximum amount of weight you can lift for a single repetition with proper form. It is a benchmark for measuring strength in weightlifting, powerlifting, and bodybuilding."
  },
  {
    question: "How accurate is this calculator?",
    answer: "Our calculator uses industry-standard formulas like Epley and Brzycki. While very accurate for most lifters performing 2-10 reps, the best way to know your true 1RM is through a safe, supervised physical test."
  },
  {
    question: "Which formula is better: Epley or Brzycki?",
    answer: "Epley is generally considered better for high reps, while Brzycki is often more accurate for lower rep ranges (3-8 reps). We provide an average of both to give you the most balanced estimation."
  },
  {
    question: "Why should I know my One Rep Max?",
    answer: "Knowing your 1RM allows you to program your training effectively. Most strength programs use percentages of your 1RM (e.g., 5x5 at 80% of 1RM) to determine the weight you should lift."
  },
  {
    question: "Is it safe to test a 1RM?",
    answer: "Testing a 1RM can be risky for beginners. We recommend using a calculator like this one to estimate your strength instead of attempting a maximal lift, especially without a spotter or proper equipment."
  }
];

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-10 dark:opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white leading-tight tracking-tighter">
            One Rep Max <span className="text-blue-600">Calculator</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Instantly calculate your 1RM strength for bench press, squats, and deadlifts using professional-grade formulas. Perfect for gym enthusiasts and powerlifters.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
             <a href="#calculator" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all transform hover:-translate-y-1">
               Try Now
             </a>
             <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
               Learn More
             </button>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section id="calculator" className="py-12 px-4 scroll-mt-24">
        <Calculator />
      </section>

      {/* Content Section - SEO Focused */}
      <section className="max-w-4xl mx-auto px-4 mt-24 space-y-16">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">How to Use the One Rep Max Calculator</h2>
          <div className="prose prose-blue dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
            <p>
              To get the most accurate 1RM estimation, follow these simple steps:
            </p>
            <ol className="list-decimal pl-5 space-y-4 mt-4">
              <li><strong>Perform a Set:</strong> Choose a weight you can lift for between 2 and 10 repetitions with good form.</li>
              <li><strong>Enter the Data:</strong> Input the weight lifted and the number of reps completed in the calculator above.</li>
              <li><strong>Analyze Results:</strong> View your estimated 1RM, strength category, and a breakdown of training percentages (50% to 100%).</li>
            </ol>
            <p className="mt-6">
              Our tool uses the <strong>Epley Formula</strong> and the <strong>Brzycki Formula</strong>, which are the most widely accepted methods used by strength coaches globally.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
