import { useEffect } from 'react';
import { ShieldCheck, Calendar, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = '啟夢教育｜隱私權政策';
    
    // Update or create meta description tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      '啟夢教育個人資料與隱私權保護政策，說明本網站蒐集、處理、利用及保護個人資料之方式。'
    );

    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-24">
      {/* Page Banner Header */}
      <div className="bg-[#002B5B] py-20 relative overflow-hidden">
        <div className="absolute top-10 left-20 w-32 h-32 bg-[#C5A059] rounded-full mix-blend-multiply filter blur-2xl opacity-40" />
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-2xl opacity-20" />
        
        <div className="max-w-[1000px] mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#C5A059] font-bold text-xs tracking-widest uppercase mb-4 backdrop-blur-sm border border-white/10">
            <ShieldCheck size={16} />
            Privacy Policy
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight drop-shadow-sm leading-tight">
            啟夢教育 個人資料與隱私權保護政策
          </h1>
          <p className="text-slate-200 font-medium max-w-2xl mx-auto text-base leading-relaxed mb-6">
            我們重視每一位家長與孩子的個人資料安全，致力於提供安心、安全的教育服務。
          </p>
          <div className="inline-flex items-center gap-2 text-amber-200/90 text-sm font-semibold bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            <Calendar size={14} />
            <span>生效日期：2023年1月16日</span>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl border-4 border-slate-50 space-y-10 text-slate-700 leading-relaxed font-medium">
          
          {/* Welcome Intro */}
          <div className="p-6 bg-amber-50/50 rounded-2xl border-l-4 border-[#C5A059] text-slate-700 text-base leading-relaxed">
            歡迎您光臨「啟夢教育」官方網站（以下簡稱「本網站」）。啟夢教育非常重視您與孩子的個人資料與隱私權。為了讓您與孩子能安心使用本網站的各項服務、報名課程及參與活動，我們特此向您說明本網站的隱私權保護政策，以保障您的權益。請您詳閱以下內容：
          </div>

          {/* 一、 隱私權保護政策的適用範圍 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              一、 隱私權保護政策的適用範圍
            </h2>
            <div className="space-y-3 pl-2 text-base text-slate-600">
              <p>本政策適用於您在「啟夢教育」網站活動時，所涉及的個人資料蒐集、處理、利用與保護。</p>
              <p>本政策不適用於本網站以外的連結網站，也不適用於非本網站所委託或參與管理的人員。若您點選第三方網站連結，請參閱該網站個別的隱私權政策。</p>
            </div>
          </section>

          {/* 二、 我們如何蒐集與使用您的資料 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              二、 我們如何蒐集與使用您的資料
            </h2>
            <p className="text-base text-slate-600 pl-2">
              為了提供完善的教育諮詢、課程報名、營隊活動與電子報服務，我們會在以下情況蒐集您的個人資料：
            </p>

            <div className="space-y-6 pl-2">
              {/* 1. 家長與學員主動提供的資料 */}
              <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100 space-y-4">
                <h3 className="font-bold text-lg text-[#002B5B]">1. 家長與學員主動提供的資料</h3>
                <ul className="space-y-3 text-slate-600 pl-4 list-disc">
                  <li>
                    <span className="font-bold text-slate-800">報名課程/營隊/講座：</span> 包括家長姓名、學生姓名、聯絡電話、電子郵件、通訊地址、學生就讀學校與年級、緊急聯絡人資訊等。
                  </li>
                  <li>
                    <span className="font-bold text-slate-800">線上諮詢與表單填寫：</span> 當您填寫聯絡表單、諮詢表單或進行線上課務互動時，我們將蒐集您所輸入的姓名、Email、聯絡電話及留言內容。
                  </li>
                  <li>
                    <span className="font-bold text-slate-800">金流與交易資料：</span> 若您進行線上繳費，我們會處理必要的交易紀錄（刷卡過程均採用加密安全金流服務，啟夢教育不會留存您的信用卡完整卡號與敏感金融資訊）。
                  </li>
                </ul>
              </div>

              {/* 2. 未成年人（兒童及青少年）資料保護 */}
              <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100 space-y-3">
                <h3 className="font-bold text-lg text-[#002B5B]">2. 未成年人（兒童及青少年）資料保護</h3>
                <p className="text-slate-600">
                  啟夢教育深知未成年人個人資料保護的重要性。若學員未滿 18 歲，在提供個人資料前，應取得法定代理人（父母或監護人）之同意。
                </p>
                <p className="text-slate-600">
                  我們絕不會在未經家長/監護人同意的情況下，向未成年人索取超出服務必要範圍的個人資料。
                </p>
              </div>

              {/* 3. 自動蒐集的瀏覽資訊 */}
              <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100 space-y-3">
                <h3 className="font-bold text-lg text-[#002B5B]">3. 自動蒐集的瀏覽資訊</h3>
                <p className="text-slate-600">
                  當您瀏覽本網站時，伺服器會自動記錄相關軌跡，包括您使用的 IP 位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等。此記錄僅作為我們改善網站服務、優化使用者體驗的內部統計與分析依據，絕不對外公布或進行個別分析。
                </p>
              </div>
            </div>
          </section>

          {/* 三、 資料的保護與安全 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              三、 資料的保護與安全
            </h2>
            <div className="space-y-4 pl-2">
              <div className="flex gap-3 items-start">
                <Lock className="w-5 h-5 text-[#C5A059] shrink-0 mt-1" />
                <p className="text-slate-600">
                  <span className="font-bold text-slate-800">嚴密的資訊安全措施：</span> 啟夢教育主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，保護網站及您的個人資料。
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <Lock className="w-5 h-5 text-[#C5A059] shrink-0 mt-1" />
                <p className="text-slate-600">
                  <span className="font-bold text-slate-800">存取權限控管：</span> 僅有經過授權的人員（如課務與營隊核心團隊）才能接觸您的個人資料，相關處理人員均簽署有保密合約，如有違反保密義務者，將會受到相關的法律處分。
                </p>
              </div>
            </div>
          </section>

          {/* 四、 個人資料的利用與第三方共享 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              四、 個人資料的利用與第三方共享
            </h2>
            <p className="text-base text-slate-600 pl-2">
              啟夢教育絕不會任意出售、交換、出租或以其他變相形式，將您的個人資料提供給其他團體、個人或私人企業。但有下列情形者除外：
            </p>
            <ol className="space-y-3 text-slate-600 pl-6 list-decimal">
              <li>事先取得您的書面或明示同意。</li>
              <li>
                <span className="font-bold text-slate-800">法律明文規定：</span> 配合司法單位、主管機關依法律程序之合法調查。
              </li>
              <li>
                <span className="font-bold text-slate-800">委外必要服務：</span> 為了提供您預訂的服務（例如：寄送課程講義之郵局/物流公司、金流服務業者、保險公司為營隊學員投保等），我們將提供必要的資料給該合作夥伴，並嚴格督促其遵守個人資料保護規範。
              </li>
              <li>
                <span className="font-bold text-slate-800">維護公共利益或緊急狀況：</span> 為防止他人權益遭受重大危害，或維護您與孩子的生命、身體、自由或財產上之安全。
              </li>
            </ol>
          </section>

          {/* 五、 Cookie 的使用與管理 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              五、 Cookie 的使用與管理
            </h2>
            <p className="text-base text-slate-600 pl-2">
              為了提供您更個性化與優質的服務，本網站會在您的電腦中放置並取用我們的 Cookie。
            </p>
            <ul className="space-y-3 text-slate-600 pl-6 list-disc">
              <li>
                <span className="font-bold text-slate-800">功能：</span> 用於紀錄您的造訪偏好、分析流量以優化網站設計。
              </li>
              <li>
                <span className="font-bold text-slate-800">您的選擇：</span> 您可以透過瀏覽器設定（如 Chrome、Safari 等）拒絕或刪除 Cookie 的寫入，但這可能會導致本網站部分功能無法正常執行。
              </li>
            </ul>
          </section>

          {/* 六、 您的個人資料權利（查閱、更正與刪除） */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              六、 您的個人資料權利（查閱、更正與刪除）
            </h2>
            <p className="text-base text-slate-600 pl-2">
              依據《個人資料保護法》，您及您的孩子針對提供給啟夢教育的個人資料，享有以下權利：
            </p>
            <ol className="space-y-3 text-slate-600 pl-6 list-decimal">
              <li>查詢或請求閱覽。</li>
              <li>請求製給複製本。</li>
              <li>請求補充或更正。</li>
              <li>請求停止蒐集、處理或利用。</li>
              <li>
                <span className="font-bold text-slate-800">請求刪除：</span> 若您希望我們刪除您或孩子在本網站上的個人資料，歡迎随时聯絡我們，我們將於核對身分後儘速處理。
              </li>
            </ol>
          </section>

          {/* 七、 隱私權保護政策之修訂 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              七、 隱私權保護政策之修訂
            </h2>
            <p className="text-base text-slate-600 pl-2">
              啟夢教育將因應社會環境變遷、法令規定修正或服務需求之變更，隨時檢討並修改本隱私權政策。修訂後的條款將直接更新於本網站上，並自公布之日起生效。建議您定期閱讀本頁面以了解最新的隱私保護資訊。
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
