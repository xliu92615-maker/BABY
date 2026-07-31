import { motion } from 'motion/react';
import { ShieldAlert, Coins, Landmark, PhoneCall, Headset, CreditCard, Wallet, Key, Shield, Lock, AlertTriangle, Smartphone } from 'lucide-react';

const fraudTypes = [
  {
    id: 1,
    title: '假維權／追回資金詐騙',
    desc: '假冒律師、駭客團隊或反詐專家，宣稱可以幫忙追回被詐騙的錢，再要求先支付律師費、保證金或手續費，造成二次詐騙。',
    icon: ShieldAlert,
  },
  {
    id: 2,
    title: '龐氏騙局',
    desc: '標榜保證獲利、高額利息、穩賺不賠，用新投資人的錢支付舊投資人的收益，最後平台倒閉捲款。',
    icon: Coins,
  },
  {
    id: 3,
    title: '假檢警、公務機關',
    desc: '冒充警察、檢察官或政府機關，聲稱帳戶涉及洗錢，要求將存款轉入安全帳戶。',
    icon: Landmark,
  },
  {
    id: 4,
    title: '猜猜我是誰',
    desc: '假冒親友說更換電話，再以急需用錢、生病、車禍等理由要求立即匯款。',
    icon: PhoneCall,
  },
  {
    id: 5,
    title: '網購客服詐騙',
    desc: '假冒購物平台客服，謊稱重複扣款或設定錯誤，要求操作 ATM 或網銀解除。',
    icon: Headset,
  },
  {
    id: 6,
    title: '假買家金流',
    desc: '假買家提供假交易網址，誘導賣家輸入信用卡或網銀資料。',
    icon: CreditCard,
  },
  {
    id: 7,
    title: '租借銀行帳戶',
    desc: '以高薪兼職、代收款等名義租借帳戶，最後變成人頭帳戶。',
    icon: Wallet,
  },
  {
    id: 8,
    title: '假租屋',
    desc: '盜用漂亮照片，以低租金吸引受害者，要求先付訂金再失聯。',
    icon: Key,
  },
];

export default function AntiFraud() {
  return (
    <div className="bg-[#fdfcf9] min-h-screen pb-24">
      {/* Hero Banner */}
      <div className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-[#002B5B] overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Shield className="absolute top-10 left-10 text-[#C5A059] w-32 h-32 rotate-12" />
          <Lock className="absolute bottom-10 right-20 text-[#C5A059] w-40 h-40 -rotate-12" />
          <AlertTriangle className="absolute top-20 right-10 text-white w-24 h-24 rotate-45" />
          <Smartphone className="absolute bottom-20 left-20 text-white w-28 h-28 -rotate-6" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-sm flex items-center justify-center gap-3"
          >
            <span>🛡️ 防詐宣導</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-16 h-1.5 bg-[#C5A059] rounded-full mb-8"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-bold tracking-wide leading-relaxed"
          >
            建立正確防詐觀念<br />
            共同守護孩子與每一個家庭的安全
          </motion.p>
        </div>
      </div>

      {/* Fraud Types Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-[#002B5B] mb-4 tracking-tight">常見詐騙類型</h2>
          <div className="w-16 h-1.5 bg-[#FFCC00] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fraudTypes.map((type, idx) => (
            <motion.div 
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-slate-50 flex gap-6 items-start group hover:-translate-y-1"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-50 text-[#002B5B] flex items-center justify-center group-hover:bg-[#002B5B] group-hover:text-white transition-colors duration-300">
                <type.icon size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#002B5B] mb-3 group-hover:text-[#F59E0B] transition-colors">{type.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {type.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Parent Reminder Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#002B5B] rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight drop-shadow-sm">
              給每位家長的一段提醒 ❤️
            </h2>
            <div className="w-16 h-1.5 bg-[#C5A059] mx-auto rounded-full mb-10" />
            
            <div className="space-y-6 text-lg md:text-xl text-blue-100 font-medium leading-relaxed max-w-3xl mx-auto">
              <p>孩子的成長過程中，除了學習知識，建立安全的防護觀念也非常重要。</p>
              <p>我們也想提醒每位家長，平時可以多花一些時間與孩子聊聊天，關心孩子最近接觸的社群平台、遊戲及交友狀況。</p>
              <p>如果收到任何可疑電話、簡訊，或遇到任何拿不定主意的情況，都建議先停、看、聽，再向可信任的人確認，不要急著匯款或提供個人資料。</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Final CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-12 md:p-16 shadow-lg border-2 border-slate-50"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#002B5B] mb-6">啟夢教育關心您</h2>
          <p className="text-lg md:text-xl text-slate-600 font-bold mb-10 leading-relaxed">
            陪伴孩子安心成長，也陪伴每個家庭建立更安全的生活環境。<br />
            共同守護孩子與家人的幸福。
          </p>
        </motion.div>
      </div>
    </div>
  );
}
