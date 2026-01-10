
import React, { useState, useEffect } from 'react';
import { CalculationResult } from '../types';

const Calculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [reps, setReps] = useState<string>('');
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string>('');

  const calculate1RM = () => {
    const w = parseFloat(weight);
    const r = parseInt(reps);

    if (isNaN(w) || isNaN(r) || w <= 0 || r <= 0) {
      setError('Please enter valid positive numbers for weight and reps.');
      setResult(null);
      return;
    }

    if (r > 30) {
      setError('Rep-based calculations are less accurate above 30 reps.');
    } else {
      setError('');
    }

    // Epley Formula: 1RM = W * (1 + R / 30)
    const epley = w * (1 + r / 30);
    // Brzycki Formula: 1RM = W * (36 / (37 - R))
    const brzycki = r < 37 ? w * (36 / (37 - r)) : epley;

    const averageMax = (epley + brzycki) / 2;

    const percentageTable = [100, 95, 90, 85, 80, 75, 70, 65, 60, 50].map((p) => ({
      percentage: p,
      weight: (averageMax * p) / 100,
    }));

    let strengthCategory = 'Beginner';
    if (averageMax > w * 2.5) strengthCategory = 'Elite';
    else if (averageMax > w * 2.0) strengthCategory = 'Advanced';
    else if (averageMax > w * 1.5) strengthCategory = 'Intermediate';

    setResult({
      oneRepMax: averageMax,
      epley,
      brzycki,
      percentageTable,
      strengthCategory,
    });
  };

  useEffect(() => {
    if (weight && reps) {
      calculate1RM();
    }
  }, [weight, reps, unit]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Input Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </span>
            Calculate Strength
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Weight Lifted</label>
              <div className="relative">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 100"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                />
                <div className="absolute right-2 top-2 flex items-center bg-white dark:bg-gray-600 rounded-lg shadow-sm">
                  <button
                    onClick={() => setUnit('kg')}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${unit === 'kg' ? 'bg-blue-600 text-white' : 'text-gray-500 dark:text-gray-300 hover:bg-gray-100'}`}
                  >KG</button>
                  <button
                    onClick={() => setUnit('lbs')}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${unit === 'lbs' ? 'bg-blue-600 text-white' : 'text-gray-500 dark:text-gray-300 hover:bg-gray-100'}`}
                  >LBS</button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Repetitions</label>
              <input
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                placeholder="e.g. 5"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-900/30">{error}</p>}

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900/30">
             <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
               <strong>Tip:</strong> For best results, use a weight you can lift for 2-10 repetitions. Calculations for 12+ reps are estimates.
             </p>
          </div>
        </div>

        {/* Result Section */}
        <div className="relative">
          {result ? (
            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <span className="text-sm uppercase tracking-widest font-bold opacity-80">Estimated One Rep Max</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <h3 className="text-6xl font-black">{Math.round(result.oneRepMax)}</h3>
                  <span className="text-2xl font-bold opacity-80 uppercase">{unit}</span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs uppercase opacity-70">Category</span>
                    <span className="font-bold text-lg">{result.strengthCategory}</span>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
                    <span className="text-xs font-bold uppercase block opacity-70">Ratio</span>
                    <span className="font-black text-lg">{(result.oneRepMax / (parseFloat(weight) || 1)).toFixed(2)}x</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase">Epley Formula</span>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{Math.round(result.epley)} {unit}</p>
                 </div>
                 <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl border border-gray-100 dark:border-gray-700">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase">Brzycki Formula</span>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{Math.round(result.brzycki)} {unit}</p>
                 </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase mb-4 tracking-wider">Weight Distribution</h4>
                <div className="space-y-2">
                   {result.percentageTable.map(item => (
                     <div key={item.percentage} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/30 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-300">{item.percentage}%</span>
                        <div className="flex-1 mx-4 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-500" style={{ width: `${item.percentage}%` }}></div>
                        </div>
                        <span className="text-sm font-black text-gray-900 dark:text-white">{Math.round(item.weight)} {unit}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-3xl">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-medium">Enter your lift details to see your calculated strength profile.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
