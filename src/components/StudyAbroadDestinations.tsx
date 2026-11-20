import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface DestinationCountry {
  id: string;
  flag: string;
  zhName: string;
  enName: string;
  description: string;
  advantages: string[];
}

const DESTINATIONS: DestinationCountry[] = [
  {
    id: '01',
    flag: '🇺🇸',
    zhName: '美國',
    enName: 'United States',
    description:
      '美國擁有多元且高度國際化的教育環境，從基礎教育到高等教育，提供豐富的學習選擇。除了傳統課堂教學，也十分重視學生的自主思考、創意發想、團隊合作與實際應用能力。',
    advantages: [
      '教育資源豐富，學校與課程選擇多元。',
      '鼓勵批判性思考、創新與自主探索。',
      '提供藝術、科學、體育、科技等跨領域學習機會。',
      '能接觸來自不同國家與文化背景的學生。',
    ],
  },
  {
    id: '02',
    flag: '🇬🇧',
    zhName: '英國',
    enName: 'United Kingdom',
    description:
      '英國擁有悠久的教育歷史與深厚的學術文化，重視知識累積、獨立思考及邏輯分析。從古典人文、科學研究到藝術創作，都有相當成熟的教育資源。',
    advantages: [
      '英語為主要教學語言，有助於建立語言能力。',
      '重視閱讀、寫作、邏輯分析與獨立研究。',
      '擁有豐富的博物館、歷史建築及文化教育資源。',
      '學術課程選擇多元，具備完整的升學教育體系。',
    ],
  },
  {
    id: '03',
    flag: '🇨🇦',
    zhName: '加拿大',
    enName: 'Canada',
    description:
      '加拿大以多元文化及包容的社會環境聞名，英語與法語皆為官方語言。教育環境重視學生的全面發展，除了學科知識，也關注社交能力、創意思考與個人興趣。',
    advantages: [
      '英語與法語雙語文化環境。',
      '重視學生個別發展及多元學習。',
      '鼓勵合作學習、實際參與與自主探索',
      '擁有豐富的自然環境與戶外教育資源。',
    ],
  },
  {
    id: '04',
    flag: '🇦🇺',
    zhName: '澳洲',
    enName: 'Australia',
    description:
      '澳洲結合國際化城市、優質教育資源與豐富自然環境，教育體系具有多元的學習選擇。除了學術課程，也重視學生的實際參與、生活技能及探索精神。',
    advantages: [
      '英語學習環境，有利於語言沉浸。',
      '注重實際應用、合作及自主學習。',
      '擁有海洋、生態、動植物等自然教育資源。',
      '多元文化環境，有助於拓展國際視野。',
    ],
  },
  {
    id: '05',
    flag: '🇳🇿',
    zhName: '紐西蘭',
    enName: 'New Zealand',
    description:
      '紐西蘭以優美的自然環境及重視生活品質的教育氛圍受到國際家庭關注。教育方式強調探索、實踐及個人發展，讓學生能在多元情境中建立學習興趣。',
    advantages: [
      '重視學生自主學習與探索能力。',
      '擁有豐富的自然生態及戶外教育資源。',
      '注重個人發展、創意思考與團隊合作。',
      '英語學習環境有助於培養實際溝通能力。',
    ],
  },
  {
    id: '06',
    flag: '🇸🇬',
    zhName: '新加坡',
    enName: 'Singapore',
    description:
      '新加坡是亞洲重要的國際教育與商業中心，融合多元文化及東西方教育特色。英語是主要教學語言之一，同時保有華語等多語文化環境，對亞洲家庭而言具有語言與文化上的連結性。',
    advantages: [
      '英語與多語文化並存。',
      '重視數學、科學及邏輯思考。',
      '教育資源與國際交流機會豐富',
      '城市交通及生活機能便利。',
    ],
  },
  {
    id: '07',
    flag: '🇯🇵',
    zhName: '日本',
    enName: 'Japan',
    description:
      '日本兼具傳統文化與現代科技發展，教育環境重視紀律、團隊合作、生活習慣與責任感。從傳統藝術、文化工藝到科技創新，都能提供豐富的學習體驗。',
    advantages: [
      '能接觸日語及日本文化。',
      '重視生活教育、團隊合作與規範意識。',
      '科技、機械、設計及藝術領域發展成熟。',
      '傳統文化與現代教育資源兼具。',
    ],
  },
  {
    id: '08',
    flag: '🇩🇪',
    zhName: '德國',
    enName: 'Germany',
    description:
      '德國以工程技術、科技研發及工業實力聞名，也是歐洲重要的教育與研究中心。教育體系重視理論與實務的結合，提供科技、工程、藝術及人文等多元學習方向。',
    advantages: [
      '科學、工程及技術教育資源豐富。',
      '重視邏輯思考與實際問題解決。',
      '具備深厚的工業技術及創新研發背景。',
      '能接觸德語及歐洲多元文化。',
    ],
  },
];

function getCardsPerView(): number {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

export default function StudyAbroadDestinations() {
  const [cardsPerView, setCardsPerView] = useState<number>(getCardsPerView);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<number>(0);

  const dragStateRef = useRef<{
    active: boolean;
    startX: number;
    startY: number;
    direction: 'horizontal' | 'vertical' | null;
    offset: number;
  }>({
    active: false,
    startX: 0,
    startY: 0,
    direction: null,
    offset: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = DESTINATIONS.length;
  const maxTranslateIndex = Math.max(0, total - cardsPerView);
  const translateIndex = Math.min(activeIndex, maxTranslateIndex);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => {
      const currentTranslate = Math.min(prev, maxTranslateIndex);
      return currentTranslate <= 0 ? maxTranslateIndex : currentTranslate - 1;
    });
  }, [maxTranslateIndex]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => {
      const currentTranslate = Math.min(prev, maxTranslateIndex);
      return currentTranslate >= maxTranslateIndex ? 0 : currentTranslate + 1;
    });
  }, [maxTranslateIndex]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    dragStateRef.current = {
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      direction: 'horizontal',
      offset: 0,
    };
    setIsDragging(true);
    setDragOffset(0);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragStateRef.current.active) return;
      const dx = e.clientX - dragStateRef.current.startX;
      dragStateRef.current.offset = dx;
      setDragOffset(dx);
    };

    const handleMouseUp = () => {
      if (!dragStateRef.current.active) return;
      const offset = dragStateRef.current.offset;
      dragStateRef.current.active = false;
      setIsDragging(false);
      setDragOffset(0);

      if (offset < -50) {
        handleNext();
      } else if (offset > 50) {
        handlePrev();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleNext, handlePrev]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStateRef.current = {
      active: true,
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
      direction: null,
      offset: 0,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragStateRef.current.active) return;
    const dx = e.touches[0].clientX - dragStateRef.current.startX;
    const dy = e.touches[0].clientY - dragStateRef.current.startY;

    if (dragStateRef.current.direction === null) {
      if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
        dragStateRef.current.direction =
          Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical';
        if (dragStateRef.current.direction === 'horizontal') {
          setIsDragging(true);
        }
      }
    }

    if (dragStateRef.current.direction === 'horizontal') {
      dragStateRef.current.offset = dx;
      setDragOffset(dx);
    }
  };

  const handleTouchEnd = () => {
    if (!dragStateRef.current.active) return;
    const { direction, offset } = dragStateRef.current;
    dragStateRef.current.active = false;
    dragStateRef.current.direction = null;
    setIsDragging(false);
    setDragOffset(0);

    if (direction === 'horizontal') {
      if (offset < -45) {
        handleNext();
      } else if (offset > 45) {
        handlePrev();
      }
    }
  };

  const translatePercent = -(translateIndex * (100 / cardsPerView));

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#fdfcf9] via-[#FAF8F5] to-[#fdfcf9] relative overflow-x-hidden border-t border-slate-100">
      {/* Subtle Decorative Dots */}
      <div className="absolute top-12 left-10 w-4 h-4 rounded-full bg-[#C5A059]/20 pointer-events-none hidden sm:block" />
      <div className="absolute top-24 right-14 w-5 h-5 rounded-full bg-[#002B5B]/10 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-20 left-1/4 w-3.5 h-3.5 rounded-full bg-[#C5A059]/25 pointer-events-none hidden sm:block" />

      {/* 一、上方標題區塊（固定，不滑動） */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14 relative z-10">
        <p className="text-sm sm:text-base font-bold tracking-[0.18em] uppercase text-[#C5A059] mb-2.5 sm:mb-3">
          Explore Global Learning Destinations
        </p>

        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-4">
          <Sparkles className="text-[#C5A059] shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002B5B] tracking-tight">
            探索全球教育版圖
          </h2>
          <Sparkles className="text-[#C5A059] shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        <div className="w-16 h-1 bg-[#C5A059] rounded-full mx-auto mb-5" />

        <p className="text-base sm:text-lg text-slate-600 font-medium leading-[1.8] max-w-2xl mx-auto">
          認識世界各國教育特色，探索多元學習機會，為孩子開啟更寬廣的國際視野與成長旅程。
        </p>
      </div>

      {/* 二、8 個國家滑動介紹區塊 */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-4">
          {/* 上一張箭頭 */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="上一個國家"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 shadow-md hover:border-[#C5A059] hover:bg-[#FAF8F5] text-[#002B5B] flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* 滑動視窗 */}
          <div
            className="flex-1 min-w-0 overflow-hidden py-3"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex items-stretch w-full cursor-grab active:cursor-grabbing ${
                isDragging ? 'select-none' : 'transition-transform duration-500 ease-out'
              }`}
              style={{
                transform: `translate3d(calc(${translatePercent}% + ${dragOffset}px), 0, 0)`,
                willChange: 'transform',
              }}
            >
              {DESTINATIONS.map((country, idx) => {
                const isHighlighted = idx === activeIndex;
                return (
                  <div
                    key={country.id}
                    className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-1.5 sm:px-2.5 lg:px-3 flex"
                  >
                    <article
                      className={`w-full bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg border-2 transition-all duration-300 flex flex-col ${
                        isHighlighted
                          ? 'border-[#C5A059]/60 shadow-md'
                          : 'border-slate-100 hover:border-[#C5A059]/40'
                      }`}
                    >
                      {/* 頂部：編號 + 國旗與中英文名稱 */}
                      <div className="flex items-start justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className="text-3xl sm:text-4xl leading-none shrink-0 select-none"
                            aria-hidden="true"
                          >
                            {country.flag}
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-xl sm:text-2xl font-black text-[#002B5B] leading-tight break-words">
                              {country.zhName}
                            </h3>
                            <p className="text-xs sm:text-sm font-bold text-[#C5A059] tracking-wide mt-0.5 break-words">
                              {country.enName}
                            </p>
                          </div>
                        </div>

                        <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#C5A059]/30 text-[#C5A059] text-xs font-black tracking-wider shrink-0">
                          {country.id}
                        </span>
                      </div>

                      {/* 國家教育特色介紹 */}
                      <p className="text-sm sm:text-[15px] text-slate-600 leading-[1.8] font-normal mb-5 break-words">
                        {country.description}
                      </p>

                      {/* 教育優勢 */}
                      <div className="mt-auto pt-4 border-t border-slate-100/80">
                        <h4 className="text-sm sm:text-[15px] font-black text-[#002B5B] mb-3 flex items-center gap-1.5">
                          <span className="w-1.5 h-4 bg-[#C5A059] rounded-full inline-block shrink-0" />
                          <span>教育優勢：</span>
                        </h4>
                        <ul className="space-y-2.5">
                          {country.advantages.map((adv, advIdx) => (
                            <li
                              key={advIdx}
                              className="flex items-start gap-2 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed"
                            >
                              <CheckCircle2
                                size={15}
                                className="text-[#C5A059] shrink-0 mt-0.5"
                              />
                              <span className="break-words">{adv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 下一張箭頭 */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="下一個國家"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 shadow-md hover:border-[#C5A059] hover:bg-[#FAF8F5] text-[#002B5B] flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* 8 個頁面指示點 */}
        <div
          className="flex items-center justify-center gap-2 sm:gap-2.5 mt-6 sm:mt-8 flex-wrap px-4"
          role="tablist"
          aria-label="選擇國家介紹"
        >
          {DESTINATIONS.map((country, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={country.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`${country.id}. ${country.zhName} ${country.enName}`}
                title={`${country.id}. ${country.zhName}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-8 bg-[#002B5B]'
                    : 'w-2.5 bg-[#C5A059]/35 hover:bg-[#C5A059]/70'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* 三、下方結語區塊（固定，不滑動） */}
      <div className="max-w-[850px] mx-auto px-5 sm:px-6 lg:px-8 mt-14 sm:mt-20 text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#C5A059]/40" />
          <Sparkles className="text-[#C5A059] shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#C5A059]/40" />
        </div>

        <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-[16.5px] text-slate-600 leading-[1.85] font-normal">
          <p>
            以上國家是我們根據家長諮詢與選擇情況所整理出的熱門留遊學目的地，除了上述介紹的國家，世界各地還有許多不同特色的教育資源與海外學習機會。無論家長希望孩子提升語言能力、拓展國際視野，或是透過不同文化與生活體驗培養獨立性，都能依照家庭需求進行規劃。
          </p>
          <p className="text-base sm:text-lg font-bold text-[#002B5B] pt-1">
            沒有最熱門的國家，只有更適合孩子的學習選擇。
          </p>
          <p className="text-base sm:text-lg font-bold text-[#002B5B] pt-2">
            不確定哪個國家適合孩子嗎？
          </p>
          <p className="text-base sm:text-lg md:text-[19px] font-black text-[#002B5B] leading-[1.8]">
            歡迎與Global Edu聯繫，讓我們一起討論適合孩子的留遊學方向與規劃。
          </p>
        </div>
      </div>
    </section>
  );
}
