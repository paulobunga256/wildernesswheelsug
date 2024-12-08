import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User } from 'lucide-react';
import Button from '../components/ui/Button';
import { useSelector, useDispatch } from 'react-redux';
import { selectArticles, selectCategories, setArticles, setCategories } from '../features/newsSlice';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const News = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const categories = useSelector(selectCategories);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch articles and categories from JSON files
    const fetchArticles = async () => {
      const articlesResponse = await fetch('/src/data/newsArticles.json');
      const articlesData = await articlesResponse.json();
      dispatch(setArticles(articlesData));
    };

    const fetchCategories = async () => {
      const categoriesResponse = await fetch('/src/data/categories.json');
      const categoriesData = await categoriesResponse.json();
      dispatch(setCategories(categoriesData));
    };

    fetchArticles();
    fetchCategories();
  }, [dispatch]);

  const filteredPosts = articles.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = articles.find((post) => post.featured);

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        {/* Featured Article */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-4 py-1 bg-emerald-600 text-white rounded-full text-sm mb-4">
                  Featured
                </span>
                <h1 className="text-4xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h1>
                <p className="text-lg text-white/90 mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center text-white/80 space-x-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm mb-4">
                  {post.category}
                </span>
                <h2 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h2>
                <ReactMarkdown rehypePlugins={[rehypeRaw]} className="text-slate-600 mb-4">
                  {post.excerpt}
                </ReactMarkdown>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </main>
  );
};

export default News;
