
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-8">About 1RM Pro</h1>
      <div className="prose prose-blue dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-6">
        <p className="text-lg">
          Welcome to 1RM Pro, your premier destination for high-accuracy strength estimation and training tools. Our mission is to provide athletes, bodybuilders, and powerlifters with reliable data to optimize their performance and minimize injury risk.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Philosophy</h2>
        <p>
          Strength is a science. We believe that tracking your data is the only way to ensure consistent progress in the gym. By using advanced mathematical models developed by leading sports scientists, we bridge the gap between "guessing" and "knowing."
        </p>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Why Choose Us?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Data Precision:</strong> We use an weighted average of the Epley and Brzycki formulas for maximum reliability.</li>
          <li><strong>User Experience:</strong> Our tool is designed to be fast, responsive, and easy to use on any device.</li>
          <li><strong>Privacy First:</strong> We do not store your personal lifting data. Your calculations stay on your device.</li>
        </ul>
        <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-3xl border border-blue-100 dark:border-blue-900/30">
           <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Our Commitment</h3>
           <p className="text-blue-800 dark:text-blue-400">
             We are committed to maintaining a clean, ad-friendly environment that complies with the highest web standards. Whether you're chasing a 500lb squat or hitting your first 135lb bench press, we're here to support your journey.
           </p>
        </div>
      </div>
    </div>
  );
};

export default About;
