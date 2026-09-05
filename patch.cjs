const fs = require('fs');
const content = fs.readFileSync('src/pages/Team.tsx', 'utf8');
const newContent = content.replace(
  '        </motion.div>      </div>    </div>  );}',
  `        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setLightboxImg(null); }}
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <X size={36} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImg} 
              alt="放大圖片" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}`
);
fs.writeFileSync('src/pages/Team.tsx', newContent);
