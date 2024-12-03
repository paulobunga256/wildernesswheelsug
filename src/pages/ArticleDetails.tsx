import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import Button from '../components/ui/Button';

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
  readTime: number;
  category: string;
}

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setArticle({
          id: 1,
          title: 'Ultimate Guide to Off-Road Adventures',
          content: `
            <p>Embarking on an off-road adventure requires careful planning and the right equipment. In this comprehensive guide, we'll explore everything you need to know to make your journey successful and memorable.</p>

            <h2>Choosing the Right Vehicle</h2>
            <p>The foundation of any off-road adventure is selecting the appropriate vehicle. Consider factors such as ground clearance, four-wheel-drive capabilities, and reliability. Popular choices include:</p>
            <ul>
              <li>Jeep Wrangler Rubicon</li>
              <li>Toyota Land Cruiser</li>
              <li>Land Rover Defender</li>
            </ul>

            <h2>Essential Equipment</h2>
            <p>Before heading out, ensure you have these crucial items:</p>
            <ul>
              <li>Recovery gear</li>
              <li>First aid kit</li>
              <li>Navigation tools</li>
              <li>Emergency supplies</li>
            </ul>

            <h2>Planning Your Route</h2>
            <p>Research and preparation are key to a successful off-road adventure. Consider these factors when planning:</p>
            <ul>
              <li>Trail difficulty</li>
              <li>Weather conditions</li>
              <li>Emergency access points</li>
              <li>Camping locations</li>
            </ul>
          `,
          author: 'John Smith',
          date: '2024-03-15',
          image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80',
          readTime: 8,
          category: 'Adventure',
        });
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse space-y-8 w-full max-w-3xl">
          <div className="h-8 bg-slate-200 rounded w-3/4"></div>
          <div className="h-64 bg-slate-200 rounded"></div>
          <div className="space-y-4">
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            <div className="h-4 bg-slate-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600">Article not found</p>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-slate-900">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link
              to="/news"
              className="inline-flex items-center text-white mb-6 hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Articles
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white max-w-4xl">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-6 mb-8 text-slate-600">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {new Date(article.date).toLocaleDateString()}
              </div>
              <div>{article.readTime} min read</div>
            </div>

            <article className="prose prose-slate max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </article>

            {/* Article Actions */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-slate-200">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
              <div className="text-slate-600">
                Category: <span className="text-emerald-600">{article.category}</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">About the Author</h3>
              <p className="text-slate-600">
                Expert in off-road adventures and vehicle rentals with over 10 years
                of experience in the field.
              </p>
            </div>

            {/* Advertisement Section */}
            <div className="bg-slate-100 rounded-lg p-6 mb-6">
              <div className="text-center text-slate-600">
                <p className="text-sm mb-2">Advertisement</p>
                <div className="bg-white h-64 rounded flex items-center justify-center">
                  <p className="text-slate-400">Ad Space</p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Link
                    key={i}
                    to="#"
                    className="block hover:bg-slate-50 rounded-lg p-4 transition-colors"
                  >
                    <h4 className="font-medium text-slate-900 mb-2">
                      Essential Off-Road Safety Tips
                    </h4>
                    <p className="text-sm text-slate-600">
                      Learn how to stay safe during your off-road adventures.
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default ArticleDetails;