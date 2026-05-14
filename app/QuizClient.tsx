"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions, PersonaCode, Option } from "./data/questions"; 
import { personasData } from "./data/personas"; 

// 矢量 LOGO 组件
const SocialIcon = ({ type, className = "w-4 h-4" }: { type: string, className?: string }) => {
  switch (type) {
    case 'X': return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>;
    case 'FB': return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>;
    case 'REDDIT': return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>;
    case 'IG': return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
    case 'TK': return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.65-1.92 1.93-4.64 3.06-7.35 3.01-2.91-.01-5.74-1.21-7.72-3.41-1.92-2.07-2.92-4.9-2.84-7.79.03-2.73 1.14-5.38 3.08-7.32 2.03-2.09 4.88-3.27 7.78-3.21v4.06c-1.39-.02-2.78.36-3.95 1.13-1.21.75-2.14 1.95-2.58 3.32-.47 1.4-.41 2.96.2 4.31.62 1.34 1.74 2.45 3.08 3.03 1.39.63 3.01.76 4.49.33 1.45-.41 2.66-1.4 3.39-2.7.7-1.23 1.01-2.67.97-4.1.03-4.78.02-9.56.02-14.34z"/></svg>;
    case 'COPY': return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
    default: return null;
  }
};

const slideVariants: any = {
  initial: { y: "20%", opacity: 0, scale: 0.95 },
  animate: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { y: "-20%", opacity: 0, scale: 0.95, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function QuizClient() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [answerHistory, setAnswerHistory] = useState<Option[]>([]);
  const [finalPersona, setFinalPersona] = useState<PersonaCode | null>(null);
  const [isAwakened, setIsAwakened] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [shtPhase, setShtPhase] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isDecoding, setIsDecoding] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showSavePopup, setShowSavePopup] = useState(false);
  const [showUnlockMenu, setShowUnlockMenu] = useState(false);
  const [showPostMenu, setShowPostMenu] = useState(false);
  const [freeShareUsed, setFreeShareUsed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('BRT_FREE_SHARE_USED')) setFreeShareUsed(true);
  }, []);

  const handleStart = () => setCurrentStep(0);
  const handleReset = () => {
    setCurrentStep(-1); setAnswerHistory([]); setFinalPersona(null); setIsAwakened(false); setIsUnlocked(false); setShtPhase(0); setIsDecoding(false); setIsGlitching(false); setShowSavePopup(false); setShowUnlockMenu(false); setShowPostMenu(false);
  };

  const handleBack = () => { if (currentStep > 0) setCurrentStep(currentStep - 1); };

  const handleAnswer = (selectedOption: Option) => {
    const updatedHistory = [...answerHistory.slice(0, currentStep), selectedOption];
    setAnswerHistory(updatedHistory);
    if (currentStep < questions.length - 1) setCurrentStep(currentStep + 1);
    else calculateResult(updatedHistory);
  };

  const calculateResult = (history: Option[]) => {
    setCurrentStep(12);
    const finalScores: any = { YAP: 0, GHO: 0, NPC: 0, DLU: 0, GOB: 0, SCR: 0, HTR: 0, ROT: 0, SHT: 0 };
    history.forEach(opt => { Object.entries(opt.scores).forEach(([p, s]) => { finalScores[p] += (s || 0); }); });
    setTimeout(() => {
      let res: PersonaCode = "YAP";
      if (finalScores.SHT >= 3) res = "SHT";
      else {
        let max = -1;
        (["YAP", "GHO", "NPC", "DLU", "GOB", "SCR", "HTR", "ROT"] as PersonaCode[]).forEach(c => { if (finalScores[c] > max) { max = finalScores[c]; res = c; } });
      }
      setFinalPersona(res); setCurrentStep(13);
    }, 3000);
  };

  const handlePlatformShare = (platform: string, isForUnlock: boolean = false) => {
    const pData = personasData[finalPersona as PersonaCode];
    const state = finalPersona === 'SHT' ? (shtPhase === 2 ? 'final' : shtPhase === 1 ? 'mid' : 'base') : (isUnlocked || isForUnlock ? 'awakened' : 'base');
    const shareUrl = `${window.location.origin}/?share=${finalPersona}_${state}`;
    const shareText = `🧠 BRAIN ROT TERMINAL\nDiagnosis: ${isUnlocked ? pData.awakened.title : pData.rot.title}\nDecode your DNA:`;

    if (platform === 'X') window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    else if (platform === 'FB') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    else if (platform === 'REDDIT') window.open(`https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`, '_blank');
    else { navigator.clipboard.writeText(`${shareText}\n${shareUrl}`); alert("Terminal Log Copied!"); }

    if (isForUnlock) {
      setShowUnlockMenu(false); setIsVerifying(true);
      setTimeout(() => { setIsVerifying(false); localStorage.setItem('BRT_FREE_SHARE_USED', 'true'); setFreeShareUsed(true); handleUnlockTransition(); }, 2500);
    }
  };

  const handleShtMidTransition = () => { setIsGlitching(true); setTimeout(() => { setShtPhase(1); setIsGlitching(false); }, 800); };
  const handleUnlockTransition = () => { setIsDecoding(true); setTimeout(() => { setIsDecoding(false); setIsUnlocked(true); setShowSavePopup(true); if (finalPersona === 'SHT') setShtPhase(2); }, 1500); };

  const currentPersona = finalPersona ? personasData[finalPersona] : null;
  const isShtBase = finalPersona === 'SHT' && shtPhase === 0;
  const isShtMid = finalPersona === 'SHT' && shtPhase === 1;
  const isShtFinal = finalPersona === 'SHT' && shtPhase === 2;
  const currentBorderColor = isShtBase || isShtMid ? '#dc2626' : (isUnlocked || isShtFinal ? currentPersona?.colorHex : '#ccff00');

  return (
    <main className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden bg-[#1a1814] text-[#e5e5e5]">
      <style>{`
        @keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scrollLeft 40s linear infinite; }
        .animate-scroll-right { animation: scrollRight 40s linear infinite; }
        .animate-violent-shake { animation: violentShake 0.12s infinite; filter: brightness(1.3); }
        @keyframes violentShake { 0%, 100% { transform: translate(0,0); } 25% { transform: translate(-4px,4px); } 75% { transform: translate(4px,-4px); } }
      `}</style>

      {/* 背景滚动弹幕 */}
      <div className="absolute inset-0 z-0 flex flex-col justify-evenly opacity-10 rotate-[-3deg] scale-125 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className={`whitespace-nowrap font-black text-6xl text-white ${i % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
            {"UNLEASH YOUR BRAIN ROT GENIUS // ".repeat(10)}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentStep === -1 && (
          <motion.div variants={slideVariants} initial="initial" animate="animate" exit="exit" className="z-10 text-center">
            <h1 className="text-[12vw] font-black uppercase text-white mb-8 drop-shadow-xl">BRAIN ROT <br /> TEST</h1>
            <button onClick={handleStart} className="bg-[#ccff00] border-4 border-black text-black font-black uppercase text-3xl px-16 py-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:bg-white transition-all">Start Test</button>
          </motion.div>
        )}

        {(currentStep >= 0 && currentStep <= 12) && (
          <motion.div key={currentStep} variants={slideVariants} initial="initial" animate="animate" exit="exit" className="z-10 w-full max-w-4xl px-4">
            {currentStep === 12 ? (
              <h2 className="text-4xl font-black text-[#ccff00] animate-pulse text-center uppercase">Decoding DNA...</h2>
            ) : (
              <div className="text-left bg-black/40 p-8 border-4 border-black">
                <div className="flex justify-between font-mono text-[#ccff00] mb-4"><span>Q.{currentStep + 1}</span><span>[{currentStep + 1}/12]</span></div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">{questions[currentStep].text}</h2>
                <div className="grid gap-4">
                  {questions[currentStep].options.map(opt => (
                    <button key={opt.id} onClick={() => handleAnswer(opt)} className="group flex text-left border-[3px] border-black p-4 bg-[#1a1814] hover:bg-[#ccff00] hover:text-black transition-all">
                      <span className="font-mono mr-4 font-black text-[#ccff00] group-hover:text-black">[{opt.id}]</span>
                      <span className="text-xl font-bold">{opt.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {currentStep === 13 && currentPersona && (
          <div className="fixed inset-0 z-50 flex flex-col justify-center items-center p-4">
            <div className={`w-full max-w-6xl relative z-20 ${isDecoding ? 'animate-violent-shake' : ''}`}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="border-4 p-8 md:p-12 flex flex-col md:flex-row gap-8 bg-black" style={{ borderColor: currentBorderColor }}>
                
                {/* 支付墙 */}
                {isAwakened && !isUnlocked && (
                  <div className="absolute inset-0 z-30 bg-black/60 backdrop-blur-xl flex items-center justify-center p-4">
                    <div className="bg-white p-8 border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)] text-black text-center max-w-sm">
                      <h3 className="text-2xl font-black mb-6">AWAKEN FORM</h3>
                      <button onClick={handleUnlockTransition} className="w-full bg-black text-[#ccff00] font-black py-4 mb-4 border-2 border-black hover:bg-[#ccff00] hover:text-black transition-all">Unlock ($1)</button>
                      {freeShareUsed ? <p className="text-red-600 text-xs font-bold uppercase">SHARE USED</p> : (
                        <button onClick={() => handlePlatformShare('X', true)} className="w-full border-4 border-black font-black py-4 hover:bg-black hover:text-white transition-all">Share to Unlock</button>
                      )}
                    </div>
                  </div>
                )}

                {/* 卡片左侧：立绘 */}
                <div className="w-full md:w-5/12 flex flex-col items-center">
                  <div className="w-full aspect-[4/5] bg-white border-4 border-black p-2 mb-4">
                    <img src={isUnlocked ? currentPersona.imageAwakened : currentPersona.imageBase} className={`w-full h-full object-contain ${isAwakened && !isUnlocked ? 'blur-lg grayscale' : ''}`} />
                  </div>
                  <div className="text-[10px] font-mono text-[#888] tracking-widest uppercase">Visuals by @kamhowardoops</div>
                </div>

                {/* 卡片右侧：内容 */}
                <div className="w-full md:w-7/12 flex flex-col">
                  <h1 className="text-6xl md:text-8xl font-black uppercase mb-4" style={{ color: isUnlocked ? currentPersona.colorHex : 'white' }}>{isUnlocked ? currentPersona.awakened.title : currentPersona.rot.title}</h1>
                  <h2 className="inline-block text-xl font-black uppercase px-3 py-1 bg-[#222] border-2 border-black w-fit mb-6 italic" style={{ backgroundColor: isUnlocked ? currentPersona.colorHex : '#222', color: isUnlocked ? 'black' : 'white' }}>"{currentPersona.slogan}"</h2>
                  <p className="text-lg font-bold mb-8 opacity-90 leading-relaxed">{isUnlocked ? currentPersona.awakened.description : currentPersona.rot.description}</p>
                  
                  {isUnlocked && (
                    <div className="mb-8">
                      <h3 className="font-mono text-xs font-bold mb-2 opacity-50 uppercase tracking-widest">// Action Guide</h3>
                      <ul className="grid gap-2">{currentPersona.guides.map((g, i) => <li key={i} className="bg-white/5 p-3 border-l-4 border-[#ccff00] text-sm font-bold">{g}</li>)}</ul>
                    </div>
                  )}

                  {/* 霸气大号分享按钮 */}
                  {isUnlocked && (
                    <div className="mt-auto">
                       {!showPostMenu ? (
                         <button onClick={() => setShowPostMenu(true)} className="w-full font-black py-4 text-xl border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] uppercase transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none" style={{ backgroundColor: currentPersona.colorHex, color: 'black' }}>
                           Share Result ↗
                         </button>
                       ) : (
                         <div className="grid grid-cols-3 gap-2 animate-in fade-in zoom-in duration-300">
                            {['X', 'FB', 'REDDIT', 'IG', 'TK', 'COPY'].map(p => (
                              <button key={p} onClick={() => handlePlatformShare(p)} className="flex items-center justify-center gap-2 bg-black text-white border-2 border-white/20 py-3 hover:bg-[#ccff00] hover:text-black transition-colors">
                                <SocialIcon type={p} /><span className="text-xs font-black">{p}</span>
                              </button>
                            ))}
                         </div>
                       )}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
            
            {!isAwakened && (
              <button onClick={() => setIsAwakened(true)} className="mt-8 bg-[#ccff00] text-black font-black px-12 py-5 border-4 border-black shadow-[6px_6px_0_0_rgba(255,255,255,0.2)] uppercase text-xl hover:bg-white transition-all">Decode My Brain Rot</button>
            )}
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}