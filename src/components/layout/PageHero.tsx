import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, description, image, children }: PageHeroProps) => {
  return (
    <section className="relative py-20 bg-emerald-900">
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          {description && (
            <p className="text-xl text-emerald-100">{description}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;