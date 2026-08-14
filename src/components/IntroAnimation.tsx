import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Rocket, Cloud } from 'lucide-react';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // 檢查是否為該 session 首次進站
    const introPlayed = sessionStorage.getItem('introPlayed');
    
    if (!introPlayed) {
      if (shouldReduceMotion) {
        // 若使用者偏好減少動畫，直接跳過或做極簡處理
        completeIntro();
      } else {
        setIsVisible(true);
        // 設定自動關閉計時器 (約 3.2 秒後完全 unmount)
        const timer = setTimeout(() => {
          completeIntro();
        }, 3200);
        return () => clearTimeout(timer);
      }
    }
  }, [shouldReduceMotion]);

  const completeIntro = () => {
    setIsVisible(false);
    sessionStorage.setItem('introPlayed', 'true');
  };

  // 隨機生成星點
  const stars = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-gradient-to-b from-[#041024] via-[#0a234f] to-[#0f439c] overflow-hidden flex flex-col items-center justify-center touch-none"
        >
          {/* 背景星點 */}
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-white rounded-full"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                boxShadow: star.size > 2 ? '0 0 4px rgba(255,255,255,0.8)' : 'none',
              }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}

          {/* 雲朵裝飾 */}
          <Cloud size={160} className="absolute bottom-[20%] left-[-10%] text-white/5" fill="currentColor" />
          <Cloud size={240} className="absolute top-[15%] right-[-15%] text-white/5" fill="currentColor" />
          <Cloud size={120} className="absolute top-[40%] left-[10%] text-white/5" fill="currentColor" />

          {/* 靜態標語：出現後在動畫結束前淡出 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
            transition={{ times: [0, 0.2, 0.8, 1], duration: 2.8 }}
            className="absolute top-[30%] md:top-[35%] text-center px-4 w-full z-10"
          >
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-widest drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              一起出發，探索更大的世界
            </h2>
          </motion.div>

          {/* 火箭與尾焰容器：負責 Y 軸向上升空 */}
          <motion.div
            initial={{ y: '30vh' }}
            animate={{ y: '-120vh' }}
            transition={{ delay: 0.6, duration: 1.5, ease: [0.4, 0.0, 1, 1] }} // 加速感 (Ease In)
            className="absolute z-20 flex flex-col items-center justify-center"
          >
            {/* 負責起飛前左右晃動 */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [-3, 3, -4, 4, -2, 2, 0] }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="relative flex flex-col items-center"
            >
              {/* 火箭本體 */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_40px_rgba(15,67,156,0.5)] z-10">
                <Rocket size={48} className="text-white md:w-16 md:h-16 -rotate-45" fill="#FFCC00" strokeWidth={1.5} />
              </div>

              {/* 起飛火焰 */}
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: [0, 1.2, 1], opacity: [0, 1, 0.9] }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="absolute top-full mt-[-10px] w-8 md:w-10 h-32 md:h-48 bg-gradient-to-b from-[#FFCC00] via-[#ff6600] to-transparent rounded-full origin-top blur-md z-0"
              />
              
              {/* 核心高光 */}
              <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: [0, 1, 1], opacity: [0, 1, 0.8] }}
                transition={{ delay: 0.55, duration: 0.2 }}
                className="absolute top-full mt-[-5px] w-3 md:w-4 h-16 md:h-24 bg-gradient-to-b from-white to-transparent rounded-full origin-top blur-sm z-0"
              />
            </motion.div>
          </motion.div>

          {/* 跳過按鈕 */}
          <button
            onClick={completeIntro}
            className="absolute bottom-8 right-8 z-[100] text-white/60 hover:text-white font-bold tracking-widest text-sm md:text-base flex items-center gap-2 transition-colors px-4 py-2 rounded-full hover:bg-white/10"
          >
            跳過 SKIP <span className="text-lg leading-none">&rarr;</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
