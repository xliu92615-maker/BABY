import { motion } from 'motion/react';
import xxx01 from '../assets/images/xxx-01.jpg';
import xxx02 from '../assets/images/xxx-02.jpg';
import xxx03 from '../assets/images/xxx-03.jpg';
import xxx04 from '../assets/images/xxx-04.jpg';
import xxx05 from '../assets/images/xxx-05.jpg';
import xxx06 from '../assets/images/xxx-06.jpg';

const newPhotos = [
  { src: xxx01, title: '國際交流課程' },
  { src: xxx02, title: '海外文化體驗' },
  { src: xxx03, title: '寄宿家庭生活' },
  { src: xxx04, title: '校園參訪' },
  { src: xxx05, title: '跨國友誼' },
  { src: xxx06, title: '學習成果分享' },
];

export default function StudyAbroadNewGallery() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-y-16">
          {newPhotos.map((photo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full aspect-video rounded-[20px] overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300 bg-slate-50">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#002B5B] text-center tracking-wide">
                {photo.title}
              </h3>
              <div className="w-8 h-1 bg-[#C5A059] rounded-full mt-3" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
