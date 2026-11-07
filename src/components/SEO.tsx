import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://globaledutw.com';

interface RouteSEO {
  title: string;
  description: string;
}

const ROUTE_SEO_MAP: Record<string, RouteSEO> = {
  '/': {
    title: '國際教育發展團隊 Global Edu｜官方網站',
    description: '國際教育發展團隊（Global Edu）專注提供多元豐富的兒童主題活動、職人體驗營隊、優質親子共學、國際留遊學諮詢與愛心公益計畫，陪伴孩子在實作與探索中快樂成長、拓展國際視野。',
  },
  '/activities': {
    title: '主題活動與職人營隊推薦｜國際教育發展團隊 Global Edu',
    description: '探索豐富多元的兒童主題活動、職人工作坊與戶外探索營隊，讓孩子在實作體驗中啟發潛能、快樂學習。',
  },
  '/co-learning': {
    title: '親子共學課程與體驗活動｜國際教育發展團隊 Global Edu',
    description: '精選優質親子共學課程，促進家庭親密互動與親子陪伴，讓父母與孩子在實作與探索中共同成長。',
  },
  '/study-abroad': {
    title: '國際留遊學諮詢與文化交流計畫｜國際教育發展團隊 Global Edu',
    description: '提供專業國際留遊學評估、海外文化交流活動與夏冬令營規劃，為孩子打造放眼全球的國際教育之路。',
  },
  '/team': {
    title: '創辦人與專業師資團隊介紹｜國際教育發展團隊 Global Edu',
    description: '認識國際教育發展團隊 Global Edu 的創辦人、執行長與各領域專業師資陣容，以愛心、耐心與專業陪伴每位孩子。',
  },
  '/charity': {
    title: '大手牽小手 愛心齊步走・公益關懷活動｜國際教育發展團隊 Global Edu',
    description: '大手牽小手，愛心齊步走！國際教育發展團隊 Global Edu 積極推動偏鄉關懷與公益捐助，培育孩子同理心與社會關懷。',
  },
  '/reviews': {
    title: '家長反饋與真實心得好評｜國際教育發展團隊 Global Edu',
    description: '瀏覽參與活動與課程的家長真實心得反饋，見證孩子的自信蛻變與歡樂成長回憶。',
  },
  '/faq': {
    title: '常見問題 FAQ・報名與活動解答｜國際教育發展團隊 Global Edu',
    description: '解答關於活動報名、繳費方式、取消退費及營隊安全等常見問題，讓家長報名更安心便捷。',
  },
  '/anti-fraud': {
    title: '官方防詐騙宣導與安全聲明｜國際教育發展團隊 Global Edu',
    description: '國際教育發展團隊 Global Edu 官方防詐聲明，提醒家長認明官方認證管道，提高警惕防範詐騙行為。',
  },
  '/privacy-policy': {
    title: '隱私權政策｜國際教育發展團隊 Global Edu',
    description: '國際教育發展團隊 Global Edu 隱私權保護政策與個人資料蒐集使用規範說明。',
  },
  '/terms-of-service': {
    title: '服務條款｜國際教育發展團隊 Global Edu',
    description: '國際教育發展團隊 Global Edu 網站使用與各項教育活動服務條款。',
  },
  '/favorites': {
    title: '我的收藏活動｜國際教育發展團隊 Global Edu',
    description: '檢視您在國際教育發展團隊 Global Edu 網站收藏的活動清單，方便隨時追蹤與報名。',
  },
  '/parenting-education': {
    title: '親子教育專欄｜國際教育發展團隊 Global Edu',
    description: 'Global Edu 親子教育專欄，提供多元的教育知識與實用資訊，涵蓋親子互動、生活教育、情緒培養與國際視野，陪伴家長找到適合孩子的成長方式。',
  },
  '/parenting-education/life-lessons-stories': {
    title: '比童話更值得聽的故事：5個能讓孩子受益一生的人生啟蒙｜國際教育發展團隊 Global Edu',
    description: '探索5個啟發孩子一生的經典故事：誠實勇氣、善良責任、自我接納、耐心積累與堅定自我，培養不被外界評價動搖的人生底氣。',
  },
  '/parenting-education/respect-child-growth': {
    title: '我們能陪孩子慢慢雕琢，卻不能按照自己的期待改造孩子｜國際教育發展團隊 Global Edu',
    description: '每個孩子都是獨一無二的個體。父母最珍貴的責任是給予足夠的愛、尊重與引導，陪伴孩子走出屬於自己的成長道路。',
  },
  '/parenting-education/global-perspective': {
    title: '國際視野從小培養，讓孩子認識世界的多元與美好｜國際教育發展團隊 Global Edu',
    description: '真正的國際視野不只是外語能力，更是尊重多元文化與不同觀點的胸懷。從小啟發孩子的好奇心，開啟探索世界的重要起點。',
  },
  '/parenting-education/five-essential-skills': {
    title: '未來需要什麼樣的人才？從小培養孩子的五大關鍵能力｜國際教育發展團隊 Global Edu',
    description: '面對AI與快速變化的未來，單純記住知識已不足夠。從小培養孩子的獨立思考、溝通合作、創造力、適應力與同理心等五大關鍵能力。',
  },
  '/parenting-education/learning-beyond-classroom': {
    title: '走出教室也是一種學習，帶孩子用不同角度認識世界｜國際教育發展團隊 Global Edu',
    description: '學習不只發生在教室裡。走進農場、博物館或公園，生活中的每一次探索與親身體驗，都能帶孩子用不同角度認識世界的多元與美好。',
  },
};

export function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seoData = ROUTE_SEO_MAP[pathname] || ROUTE_SEO_MAP['/'];
    const canonicalUrl = `${BASE_URL}${pathname === '/' ? '/' : pathname}`;

    // Update document title
    document.title = seoData.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', seoData.description);

    // Update canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    const setMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const setMetaName = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaProperty('og:site_name', '國際教育發展團隊');
    setMetaProperty('og:title', seoData.title);
    setMetaProperty('og:description', seoData.description);
    setMetaProperty('og:url', canonicalUrl);

    setMetaName('twitter:title', seoData.title);
    setMetaProperty('og:description', seoData.description);
    setMetaProperty('og:url', canonicalUrl);

    setMetaName('twitter:title', seoData.title);
    setMetaName('twitter:description', seoData.description);
    setMetaName('twitter:url', canonicalUrl);
  }, [pathname]);

  return null;
}
