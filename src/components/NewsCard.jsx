import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NewsCard = ({ title, description, imageUrl, link, date, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-white dark:bg-darkCard rounded-2xl overflow-hidden border border-gray-100 dark:border-darkBorder hover:shadow-xl transition-all hover:-translate-y-1"
    >
      {/* Görsel */}
      <div className="relative overflow-hidden h-52">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => { e.target.src = "https://www.mcbu.edu.tr/img/cbu_logo_yan.png"; e.target.className = "w-full h-full object-contain p-8 bg-gray-100 dark:bg-darkBg"; }}
        />
        {category && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>

      {/* İçerik */}
      <div className="p-5">
        {date && (
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">📅 {date}</p>
        )}
        <h3 className="font-bold text-darkBlue dark:text-white text-base leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
          {description}
        </p>
        <Link
          to={link}
          className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all"
        >
          Devamını oku <span>→</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default NewsCard;