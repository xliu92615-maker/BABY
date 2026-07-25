import { useEffect } from 'react';
import { FileText, Calendar, Scale } from 'lucide-react';

export default function TermsOfService() {
  useEffect(() => {
    document.title = '啟夢教育｜服務條款';
    
    // Update or create meta description tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      '啟夢教育網站服務條款，說明網站使用、課程報名、智慧財產權、使用者規範、肖像權及相關權利義務。'
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
            <FileText size={16} />
            Terms of Service
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight drop-shadow-sm leading-tight">
            啟夢教育網站服務條款
          </h1>
          <p className="text-slate-200 font-medium max-w-2xl mx-auto text-base leading-relaxed mb-6">
            請於使用本網站及相關服務前，詳細閱讀本服務條款。
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
          <div className="p-6 bg-amber-50/50 rounded-2xl border-l-4 border-[#C5A059] text-slate-700 text-base leading-relaxed space-y-3">
            <p>
              歡迎您使用「啟夢教育」官方網站（以下簡稱「本網站」）。本網站由啟夢教育（以下簡稱「我們」）負責營運。
            </p>
            <p>
              為保障您的權益，在您瀏覽本網站、註冊成為會員、報名各項課程、營隊或使用我們提供的各項服務（以下簡稱「本服務」）前，請務必詳細閱讀本《服務條款》（以下簡稱「本條款」）。當您點選同意、完成報名或開始使用本網站服務時，即表示您已閱讀、瞭解並同意接受本條款之所有內容。
            </p>
          </div>

          {/* 一、未成年人使用條款 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              一、未成年人使用條款
            </h2>
            <div className="space-y-4 pl-2">
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">家長／法定代理人同意：</span>啟夢教育主要提供青少年職涯探索與親子教育相關服務。若使用者為未滿18歲之未成年人，應在父母、監護人或法定代理人的陪同下閱讀本條款，並由父母、監護人或法定代理人同意後，方得使用本網站與報名相關課程。
              </p>
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">行為效力：</span>當未成年人使用本網站購買課程、填寫資料或參與活動時，即推定該行為已獲得其法定代理人、父母或監護人之允許與授權。
              </p>
            </div>
          </section>

          {/* 二、服務內容與帳號安全 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              二、服務內容與帳號安全
            </h2>
            <div className="space-y-4 pl-2">
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">服務範疇：</span>本網站提供青少年生涯探索課程、營隊報名、升學講座、學習歷程諮詢、文章分享及相關教育體驗活動。
              </p>
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">資料真實性：</span>您於報名或註冊時填寫之資料，包含家長與學員資訊，應確保真實、準確且完整。若因填寫不實或錯誤資料導致聯繫中斷、投保失敗或影響學習權益，相關責任由使用者自行承擔。
              </p>
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">帳號保管：</span>若您於本網站建立帳號，請妥善保管您的帳號及密碼。凡以該帳號登入後所進行之一切行為，均視為該帳號擁有者本人之行為。
              </p>
            </div>
          </section>

          {/* 三、課程與營隊報名規範 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              三、課程與營隊報名規範
            </h2>
            <div className="space-y-4 pl-2">
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">報名與繳費：</span>使用者完成課程報名後，須於規定時間內完成繳費，始算完成報名手續。未於期限內完成繳費者，啟夢教育有權取消其預約名額。
              </p>
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">開課與異動條款：</span>啟夢教育保留因不可抗力因素，如颱風、地震、傳染病等法定災害、學員人數不足或其他非可歸責於本機構之事由，調整課程時間、上課方式，例如實體轉線上，或停辦課程之權利。相關變更將第一時間通知報名家長。
              </p>
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">退費機制：</span>課程、營隊與講座之退費標準，將依據國家相關法令規範及各該活動專案頁面明訂之「學員報名與退費規定」辦理。
              </p>
            </div>
          </section>

          {/* 四、智慧財產權聲明 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              四、智慧財產權聲明
            </h2>
            <div className="space-y-4 pl-2">
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">內容所有權：</span>本網站上所刊登之所有內容，包括但不限於文字、文章、影片、音訊、圖片、網頁設計、商標、標誌、課程講義、學習工具與軟體等，其智慧財產權均屬啟夢教育或合法授權啟夢教育使用之權利人所有。
              </p>
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">禁止擅自重製或散布：</span>未經啟夢教育事前書面授權，任何人不得擅自將本網站之內容進行重製、改作、公開傳輸、用於商業用途、散布於個人部落格或社群媒體、作為商業課程素材或提供給任何第三方使用。
              </p>
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">課堂錄影與智慧財產：</span>學員參與線上或實體課程時，未經講師與啟夢教育同意，禁止側錄、攝影、錄音或截圖公開散布，以維護教學智慧財產權與其他學員之肖像權。
              </p>
            </div>
          </section>

          {/* 五、使用者規範與禁止行為 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              五、使用者規範與禁止行為
            </h2>
            <p className="text-base text-slate-600 pl-2">
              在使用本網站及參與課程時，您與學員承諾遵守中華民國相關法令及國際網際網路慣例，不得有下列行為：
            </p>
            <ol className="space-y-3 text-slate-600 pl-6 list-decimal">
              <li>上傳、張貼或散布任何不實、誹謗、侮辱、猥褻、具攻擊性或違反公序良俗之言論與檔案。</li>
              <li>騷擾、霸凌或干擾其他學員、講師或啟夢教育工作人員之教學活動。</li>
              <li>企圖入侵本網站伺服器、破壞資訊安全系統或進行任何影響網站正常運作之行為。</li>
              <li>冒用他人名義註冊帳號或報名課程。</li>
            </ol>
            <p className="text-base text-slate-600 pl-2 pt-2">
              若有違反上述規範者，啟夢教育有權取消其課程參與資格、終止服務，且不予退還費用，並保留相關法律追訴權。
            </p>
          </section>

          {/* 六、肖像權使用授權 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              六、肖像權使用授權
            </h2>
            <p className="text-base text-slate-600 pl-2">
              為記錄營隊與課程學習過程及進行教育推廣，啟夢教育可能於活動期間進行攝影與錄影。
            </p>
            <div className="space-y-4 pl-2">
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">推廣使用：</span>啟夢教育得將活動期間拍攝含學員肖像之照片或影片，用於啟夢教育之官方網站、社群平台，例如Facebook、Instagram、YouTube、電子報或宣傳文宣中。
              </p>
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">特別需求：</span>若家長不希望學員之肖像公開露出，請於活動開辦前主動向課務團隊告知，我們將另行協助與安排。
              </p>
            </div>
          </section>

          {/* 七、免責聲明 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              七、免責聲明
            </h2>
            <div className="space-y-4 pl-2">
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">網站運作：</span>我們會盡力維持本網站的正常營運與安全，但對於因電信線路故障、第三方駭客攻擊、不可抗力等非啟夢教育所得控制之因素所導致的服務中斷、資料遺失或延遲，啟夢教育不承擔賠償責任。
              </p>
              <p className="text-base text-slate-600">
                <span className="font-bold text-slate-800">諮詢與學習成效：</span>啟夢教育提供之生涯探索、升學輔導與諮詢服務，旨在提供專業引導與工具協助。學員之升學表現與個人發展仍受多方因素影響，本機構不保證特定之升學或考試結果。
              </p>
            </div>
          </section>

          {/* 八、服務條款之修改 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              八、服務條款之修改
            </h2>
            <p className="text-base text-slate-600 pl-2">
              啟夢教育保留隨時修改本服務條款之權利。修改後的服務條款將直接公告於本網站上，不另行個別通知。您於條款修改後繼續使用本網站服務，即視為您已閱讀、瞭解並同意接受修改後之條款內容。
            </p>
          </section>

          {/* 九、準據法與管轄法院 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-[#002B5B] flex items-center gap-3 border-b-2 border-slate-100 pb-3">
              <span className="w-2.5 h-8 bg-[#C5A059] rounded-full inline-block shrink-0" />
              九、準據法與管轄法院
            </h2>
            <div className="space-y-3 pl-2 text-base text-slate-600">
              <p>本服務條款之解釋、補充及適用，均以中華民國法律為準據法。</p>
              <p>因本條款或使用本網站服務所生之爭議，雙方應本於誠信原則溝通解決；若不幸涉訟，雙方同意以臺灣台北地方法院為第一審管轄法院。</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
