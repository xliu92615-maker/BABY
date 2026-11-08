import k1 from '../assets/images/K-1.jpg';
import k2 from '../assets/images/K-2.jpg';
import k3 from '../assets/images/K-3.jpg';
import k4 from '../assets/images/K-4.jpg';
import k5 from '../assets/images/K-5.jpg';
import k6 from '../assets/images/K-6.jpg';

export interface FeaturedActivity {
  id: string;
  title: string;
  desc: string;
  image: string;
  category: string;
  isFeatured: boolean;
}

export const FEATURED_CO_LEARNING_ACTIVITIES: FeaturedActivity[] = [
  {
    id: 'k-1',
    title: '兒童定向越野與攀岩挑戰營：勇闖高空與迷宮',
    desc: '結合專業室內/抱石攀岩與戶外定向越野任務，兼顧肢體協調、核心肌力與空間邏輯判斷，讓孩子在安全專業的環境中挑戰自我、建立自信',
    image: k1,
    category: '親子共學',
    isFeatured: true,
  },
  {
    id: 'k-2',
    title: '小神廚年菜烘焙生活營🍳',
    desc: '小神廚年菜烘焙生活營，將帶領孩子走進趣味廚房，從食材認識、料理準備到年節美食製作，親手體驗準備年菜的樂趣。',
    image: k2,
    category: '親子共學',
    isFeatured: true,
  },
  {
    id: 'k-3',
    title: '環遊世界甜點烘焙營🌎',
    desc: '不用出國，也能透過甜點認識世界！環遊世界甜點烘焙營以各國特色甜點為主題，帶領孩子展開一場結合美食、文化與創意的國際探索之旅！',
    image: k3,
    category: '親子共學',
    isFeatured: true,
  },
  {
    id: 'k-4',
    title: '航太火箭與天體探秘營',
    desc: '浩瀚宇宙藏著多少未知的秘密？航太火箭與天體探秘營，將帶領孩子展開一場充滿科學知識與想像力的太空探索之旅！',
    image: k4,
    category: '親子共學',
    isFeatured: true,
  },
  {
    id: 'k-5',
    title: '開心小農夫農場體驗營',
    desc: '想讓孩子體驗當小農夫的樂趣嗎？開心小農夫農場體驗營，將帶領孩子走進大自然，認識農作物的生長過程，親身體驗播種、種植、澆水與採收的樂趣',
    image: k5,
    category: '親子共學',
    isFeatured: true,
  },
  {
    id: 'k-6',
    title: '小小領袖團隊合作成長營',
    desc: '透過趣味團隊遊戲、溝通任務、創意思考及合作挑戰，讓孩子在互動中學習如何分工、協調與解決問題。',
    image: k6,
    category: '親子共學',
    isFeatured: true,
  },
];
