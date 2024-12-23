import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Button from '../ui/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

const BlogPosts = () => {
  const posts = useSelector((state: RootState) => state.blogPosts.posts);
  console.log()
  console.log('Blog Posts:', posts);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Latest Adventures & Tips
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay updated with our latest travel stories, vehicle guides, and
            adventure tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post: BlogPost, index: number) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-slate-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <Button variant="ghost" className="text-emerald-600">
                  Read More →
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
