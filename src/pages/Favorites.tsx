import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Heart } from 'lucide-react';
import { useFavorites } from '../contexts/FavoritesContext';

export default function Favorites() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="bg-[#fdfdfd] min-h-screen pb-24">
      {/* Header Section */}
      <div className="bg-[#002B5B] text-white pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059] rounded-full mix-blend-multiply opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFCC00] font-bold text-sm mb-6"
          >
            <Heart size={16} fill="currentColor" />
            <span>收藏夾</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
          >
            我的收藏
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto font-medium"
          >
            把喜歡的活動先收藏起來，之後再慢慢挑選。
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {favorites.length === 0 ? (
          <div className="bg-white rounded-[2rem] p-12 text-center shadow-sm border-2 border-slate-50 flex flex-col items-center">
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
              <Heart size={48} />
            </div>
            <h3 className="text-2xl font-black text-[#002B5B] mb-4">目前還沒有收藏活動</h3>
            <p className="text-slate-500 font-medium mb-8">看到喜歡的活動，點一下 ♡ 就可以收藏起來囉！</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/activities"
                className="px-8 py-3 bg-[#FF6600] text-white font-bold rounded-full hover:bg-[#e65c00] transition-colors shadow-sm"
              >
                探索主題活動
              </Link>
              <Link 
                to="/co-learning"
                className="px-8 py-3 bg-[#00C300] text-white font-bold rounded-full hover:bg-[#00a600] transition-colors shadow-sm"
              >
                看看親子共學
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-slate-50 flex flex-col group h-full"
              >
                {/* Image Section */}
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Heart Button */}
                  <button 
                    onClick={() => toggleFavorite(activity)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#C5A059] shadow-sm hover:scale-110 transition-transform z-10"
                  >
                    <Heart size={20} fill={isFavorite(activity.id) ? "currentColor" : "none"} className={isFavorite(activity.id) ? "text-[#C5A059]" : "text-slate-400"} />
                  </button>

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Star size={14} className="text-[#FFCC00] fill-current" />
                    <span className="text-sm font-bold text-slate-700">{activity.category}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-black text-[#002B5B] mb-3 line-clamp-2 leading-snug group-hover:text-[#C5A059] transition-colors">
                    {activity.title}
                  </h3>
                  
                  <div className="text-slate-500 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                    {activity.shortDesc || activity.desc}
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm font-bold">
                      <MapPin size={16} />
                      <span>全台</span>
                    </div>
                    <Link
                      to={activity.route || "#"}
                      className="text-[#C5A059] font-bold text-sm hover:text-[#002B5B] transition-colors flex items-center gap-1"
                    >
                      了解詳情 →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
