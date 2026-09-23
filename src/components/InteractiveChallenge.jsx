import React, { useState } from 'react';

export default function InteractiveChallenge({ challenge }) {
  const { type, scenario, description, variables, pairs, steps, options, feedback } = challenge;
  const [challengeState, setChallengeState] = useState('playing'); // playing, success, failure
  
  // State for Slider game
  const [sliderValues, setSliderValues] = useState(
    variables ? variables.reduce((acc, v) => ({ ...acc, [v.id]: 0 }), {}) : {}
  );

  // State for Matching game
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);

  // State for Decision game
  const [currentStepId, setCurrentStepId] = useState(steps ? steps[0]?.id || 'step1' : null);

  // Default option (scenario type from before)
  const [selectedOption, setSelectedOption] = useState(null);

  if (!challenge) return null;

  // Render Slider Game
  if (type === 'slider') {
    const totalAllocated = Object.values(sliderValues).reduce((a, b) => a + b, 0);
    const maxBudget = 10000;
    
    const handleSliderChange = (id, val) => {
      setSliderValues(prev => ({ ...prev, [id]: Number(val) }));
    };

    const checkSliderResult = () => {
      // Basic logic: all must be > 0 and sum <= 10000
      const allPositive = Object.values(sliderValues).every(v => v > 0);
      if (allPositive && totalAllocated <= maxBudget && totalAllocated > 5000) {
        setChallengeState('success');
      } else {
        setChallengeState('failure');
      }
    };

    return (
      <div className="bg-[#f5fbfe] rounded-xl p-6 border border-[#e0f4fa] text-left">
        <h4 className="font-bold text-[#003b81] mb-2">{scenario}</h4>
        <p className="text-sm text-slate-600 mb-6">{description}</p>

        {challengeState === 'playing' ? (
          <>
            <div className="mb-4 flex justify-between text-sm font-semibold text-slate-700">
              <span>Presupuesto Total: $10,000</span>
              <span className={totalAllocated > maxBudget ? 'text-red-500' : 'text-[#00a8cc]'}>
                Asignado: ${totalAllocated}
              </span>
            </div>
            {variables.map(v => (
              <div key={v.id} className="mb-4">
                <label className="text-xs font-semibold text-slate-500 mb-1 block">
                  {v.label}: ${sliderValues[v.id]}
                </label>
                <input 
                  type="range" min="0" max={v.max} step="500" 
                  value={sliderValues[v.id]}
                  onChange={(e) => handleSliderChange(v.id, e.target.value)}
                  className="w-full accent-[#00a8cc]"
                />
              </div>
            ))}
            <button onClick={checkSliderResult} className="mt-4 w-full bg-[#00a8cc] hover:bg-[#008fae] text-white py-2 rounded-xl text-sm font-semibold transition-colors">
              Confirmar Presupuesto
            </button>
          </>
        ) : (
          <div className="p-4 rounded-xl bg-white border border-[#00a8cc]/20">
            <p className="text-sm font-medium text-slate-700 mb-4">{challengeState === 'success' ? feedback.success : feedback.failure}</p>
            <button onClick={() => setChallengeState('playing')} className="text-xs font-bold text-[#00a8cc]">VOLVER A INTENTAR</button>
          </div>
        )}
      </div>
    );
  }

  // Render Matching Game
  if (type === 'matching') {
    const handleLeftClick = (left) => {
      setSelectedLeft(left);
    };
    
    const handleRightClick = (right) => {
      if (!selectedLeft) return;
      const isCorrect = pairs.some(p => p.left === selectedLeft && p.right === right);
      if (isCorrect) {
        setMatchedPairs(prev => [...prev, selectedLeft]);
        setSelectedLeft(null);
        if (matchedPairs.length + 1 === pairs.length) {
          setChallengeState('success');
        }
      } else {
        setChallengeState('failure');
      }
    };

    return (
      <div className="bg-[#f5fbfe] rounded-xl p-6 border border-[#e0f4fa] text-left">
        <h4 className="font-bold text-[#003b81] mb-2">{scenario}</h4>
        <p className="text-sm text-slate-600 mb-6">{description}</p>

        {challengeState === 'playing' ? (
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              {pairs.map(p => (
                <button 
                  key={p.left} 
                  disabled={matchedPairs.includes(p.left)}
                  onClick={() => handleLeftClick(p.left)}
                  className={`p-3 rounded-xl border text-sm text-left transition-all ${matchedPairs.includes(p.left) ? 'bg-green-100 border-green-200 text-green-700 opacity-50' : selectedLeft === p.left ? 'bg-[#00a8cc] text-white border-[#00a8cc]' : 'bg-white border-slate-200 hover:border-[#00a8cc]'}`}
                >
                  {p.left}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {[...pairs].sort(() => Math.random() - 0.5).map(p => (
                <button 
                  key={p.right}
                  disabled={matchedPairs.length === pairs.length}
                  onClick={() => handleRightClick(p.right)}
                  className="p-3 rounded-xl border text-sm text-left bg-white border-slate-200 hover:bg-slate-50 transition-all"
                >
                  {p.right}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-white border border-[#00a8cc]/20">
            <p className="text-sm font-medium text-slate-700 mb-4">{challengeState === 'success' ? feedback.success : feedback.failure}</p>
            <button onClick={() => { setChallengeState('playing'); setMatchedPairs([]); setSelectedLeft(null); }} className="text-xs font-bold text-[#00a8cc]">VOLVER A INTENTAR</button>
          </div>
        )}
      </div>
    );
  }

  // Render Decision Game
  if (type === 'decision') {
    const currentStep = steps.find(s => s.id === currentStepId);

    const handleOption = (next) => {
      if (next === 'success' || next.startsWith('failure')) {
        setChallengeState(next);
      } else {
        setCurrentStepId(next);
      }
    };

    // Get the right feedback message for the current state
    const getFeedbackMessage = () => {
      if (challengeState === 'success') return feedback.success;
      if (feedback[challengeState]) return feedback[challengeState];
      return feedback.failure || 'No es la mejor estrategia. ¡Inténtalo de nuevo!';
    };

    return (
      <div className="text-left">
        <h4 className="font-bold text-[#003b81] text-sm mb-1">{scenario}</h4>
        <p className="text-xs text-slate-500 mb-5 leading-relaxed">{description}</p>

        {challengeState === 'playing' ? (
          <div>
            <p className="text-sm font-bold text-slate-700 mb-4 leading-snug">{currentStep.question}</p>
            <div className="flex flex-col gap-2">
              {currentStep.options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => handleOption(opt.next)}
                  className="p-3 rounded-[2px] border border-slate-200 bg-white text-xs font-medium text-left hover:border-[#00a8cc] hover:bg-[#f5fbfe] hover:text-[#003b81] transition-all"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className={`p-4 rounded-[2px] border ${challengeState === 'success' ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
            <p className={`text-xs font-medium leading-relaxed mb-3 ${challengeState === 'success' ? 'text-emerald-800' : 'text-amber-800'}`}>
              {getFeedbackMessage()}
            </p>
            <button onClick={() => { setChallengeState('playing'); setCurrentStepId(steps[0].id); }} className="text-[10px] font-bold text-[#00a8cc] uppercase tracking-wider hover:underline">
              Volver a intentar →
            </button>
          </div>
        )}
      </div>
    );
  }

  // Render Default (Multiple Choice)
  const isCorrectOption = selectedOption?.isCorrect;
  
  return (
    <div className="bg-[#f5fbfe] rounded-xl p-6 border border-[#e0f4fa] text-left mt-2">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-[#00a8cc]/20 flex items-center justify-center">
          <span className="text-xs font-bold text-[#00a8cc]">?</span>
        </div>
        <span className="text-xs uppercase tracking-widest text-[#00a8cc] font-bold">
          Reto Rápido
        </span>
      </div>
      
      <h4 className="font-sans text-base font-bold text-[#003b81] mb-2 leading-snug">
        {challenge.scenario || scenario}
      </h4>
      <p className="text-sm text-slate-600 mb-5 font-medium">
        {challenge.question}
      </p>

      <div className="space-y-2">
        {challenge.options?.map((opt, idx) => {
          const isSelected = selectedOption === opt;
          const isCorrect = opt.isCorrect;
          
          let btnClass = "w-full text-left p-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 ";
          
          if (!selectedOption) {
            btnClass += "bg-white border-[#e0f4fa] hover:border-[#00a8cc]/40 text-slate-600 hover:bg-slate-50";
          } else {
            if (isSelected) {
              btnClass += isCorrect 
                ? "bg-emerald-50 border-emerald-400 text-emerald-800" 
                : "bg-red-50 border-red-300 text-red-800";
            } else if (isCorrect) {
              btnClass += "bg-emerald-50 border-emerald-400 text-emerald-800 opacity-60";
            } else {
              btnClass += "bg-white border-slate-100 text-slate-400 opacity-50";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => !selectedOption && setSelectedOption(opt)}
              disabled={!!selectedOption}
              className={btnClass}
            >
              {opt.text}
            </button>
          );
        })}
      </div>

      {selectedOption && (
        <div className={`mt-4 p-4 rounded-xl border ${isCorrectOption ? 'bg-emerald-50 border-emerald-100 text-emerald-800' : 'bg-red-50 border-red-100 text-red-800'} animate-in fade-in slide-in-from-top-2`}>
          <p className="text-sm font-bold mb-1">
            {isCorrectOption ? '¡Excelente decisión!' : 'No es la mejor estrategia'}
          </p>
          <p className="text-xs opacity-90">
            {isCorrectOption 
              ? 'Un buen profesional de esta área siempre busca soluciones basadas en evidencia y planificación.' 
              : 'En esta carrera, es vital analizar las variables y buscar soluciones estructuradas en lugar de improvisar.'}
          </p>
        </div>
      )}
    </div>
  );
}
