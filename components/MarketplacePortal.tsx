
import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  Truck, 
  Search, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Globe,
  ChevronRight,
  Info,
  ShoppingCart,
  Zap,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { ProductService } from '../services/productService';

const MarketplacePortal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    company: '',
    quantity: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const data = await ProductService.getAllProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load inventory. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;
    
    setStatus('sending');

    const accessKey = '97a5509f-4e7b-4ad2-abfd-03379585d878'; 

    const payload = {
      ...formData,
      access_key: accessKey,
      subject: `Marketplace Inquiry: ${selectedProduct.name} from ${formData.name}`,
      from_name: "KommtFlix Marketplace Portal",
      product_id: selectedProduct.id,
      product_name: selectedProduct.name,
      product_category: selectedProduct.category,
      product_price: `€${selectedProduct.price.toLocaleString()}`
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setIsSubmitted(true);
        setFormData({ 
          name: '', 
          email: '',
          phone: '', 
          location: '', 
          company: '', 
          quantity: '', 
          message: '' 
        });
        
        // Auto close after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setIsRequestFormOpen(false);
          setSelectedProduct(null);
          setStatus('idle');
        }, 5000);
      } else {
        console.error("Web3Forms Error:", result);
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission failed", error);
      setStatus('error');
    }
  };

  const filteredProducts = products.filter(p => 
    (selectedCategory === 'All' || p.category === selectedCategory) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const categories = ['All', 'Vehicles', 'Machinery', 'Industrial', 'Agro-Exports'];

  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col overflow-hidden">
      {/* Top Navigation */}
      <header className="h-20 border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm italic">KF</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-gray-900">
              Portal<span className="text-red-600">Market</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            <div className="px-6 py-2 text-[11px] font-black uppercase tracking-widest text-red-600">
              Inventory
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search assets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 w-64 transition-all"
            />
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-50 rounded-xl transition-colors text-gray-400 hover:text-gray-900"
          >
            <Settings className="w-5 h-5" />
          </button>
          <button 
            onClick={onClose}
            className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-red-600 transition-all"
          >
            Exit Portal
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">Vetted Inventory</h1>
                <p className="text-gray-500 text-sm font-medium">Direct access to verified trade assets & agro-commodities.</p>
              </div>
              
              <div className="flex items-center bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm overflow-x-auto no-scrollbar">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                      selectedCategory === cat 
                        ? 'bg-gray-900 text-white shadow-lg shadow-gray-200' 
                        : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              {isLoading ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4">
                  <Loader2 className="w-12 h-12 text-red-600 animate-spin" />
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Syncing Inventory...</p>
                </div>
              ) : error ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                    <Info className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="text-sm font-bold text-gray-900">{error}</p>
                  <button 
                    onClick={() => window.location.reload()}
                    className="px-6 py-2 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl"
                  >
                    Retry Connection
                  </button>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                    <Search className="w-8 h-8 text-gray-300" />
                  </div>
                  <p className="text-sm font-bold text-gray-900">No assets match your search</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="text-[10px] font-black text-red-600 uppercase tracking-widest"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                <motion.div 
                  layoutId={product.id}
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all cursor-pointer flex flex-col h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.vetted && (
                        <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-1.5 shadow-sm">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          <span className="text-[9px] font-black uppercase tracking-widest text-gray-900">Vetted</span>
                        </div>
                      )}
                      <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm ${
                        product.status === 'Available' ? 'bg-emerald-500 text-white' : 
                        product.status === 'Reserved' ? 'bg-amber-500 text-white' : 'bg-blue-500 text-white'
                      }`}>
                        {product.status}
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-gray-950/80 backdrop-blur-md text-white px-4 py-2 rounded-xl">
                      <span className="text-lg font-black tracking-tighter">€{product.price.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="min-h-[3rem]">
                        <p className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] mb-1">{product.category}</p>
                        <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-red-600 transition-colors">{product.name}</h3>
                      </div>
                      <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors shrink-0">
                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-y-3 mb-6 flex-1 min-h-[4.5rem]">
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-gray-300 rounded-full shrink-0" />
                          <span className="text-xs text-gray-500 font-medium truncate">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                      <div className="flex items-center space-x-2 text-gray-400 min-w-0">
                        <Globe className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-[10px] font-bold uppercase tracking-widest truncate">{product.location}</span>
                      </div>
                      <button className="text-[10px] font-black text-gray-900 uppercase tracking-widest flex items-center group/btn shrink-0 ml-4">
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Sidebar / Stats */}
        <aside className="w-80 border-l border-gray-100 p-8 hidden xl:block shrink-0 overflow-y-auto custom-scrollbar">
          <div className="space-y-8 pb-12">
            <div>
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Market Insights</h4>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-600">Avg. Shipping Time</span>
                    <Clock className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-2xl font-black text-gray-900">14-21 Days</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Hamburg → Lagos</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-600">Active Inquiries</span>
                    <Zap className="w-4 h-4 text-amber-500" />
                  </div>
                  <p className="text-2xl font-black text-gray-900">142</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">Last 24 Hours</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Currency Exchange</h4>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-[10px] font-bold text-blue-600">€</div>
                      <span className="text-xs font-bold text-gray-900">EUR / NGN</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-900">1,642.50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-[10px] font-bold text-emerald-600">€</div>
                      <span className="text-xs font-bold text-gray-900">EUR / GHS</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-900">14.20</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center text-[10px] font-bold text-amber-600">€</div>
                      <span className="text-xs font-bold text-gray-900">EUR / KES</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-900">158.30</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <p className="text-[8px] text-gray-400 uppercase tracking-widest text-center">Market rates updated 5m ago</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Landed Cost Tool</h4>
              <div className="bg-gray-900 rounded-3xl p-6 text-white">
                <p className="text-xs text-gray-400 mb-4">Estimate total cost including shipping & duties.</p>
                <div className="space-y-3 mb-6">
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Destination</label>
                    <select className="w-full bg-gray-800 border-none rounded-xl text-xs py-2 px-3 focus:ring-1 focus:ring-red-600">
                      <option>Lagos, Nigeria</option>
                      <option>Accra, Ghana</option>
                      <option>Nairobi, Kenya</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Asset Value</label>
                    <input type="text" placeholder="€0.00" className="w-full bg-gray-800 border-none rounded-xl text-xs py-2 px-3 focus:ring-1 focus:ring-red-600" />
                  </div>
                </div>
                <button className="w-full bg-red-600 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all">
                  Calculate Estimate
                </button>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Compliance Ready</p>
                  <p className="text-[10px] text-gray-500">All export docs included</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm"
            />
            <motion.div 
              layoutId={selectedProduct.id}
              className="relative w-full max-w-5xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <div className="md:w-1/2 flex flex-col bg-gray-50">
                <div className="flex-1 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      src={selectedProduct.images[activeImageIndex]} 
                      alt={selectedProduct.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                  <button 
                    onClick={() => {
                      setSelectedProduct(null);
                      setActiveImageIndex(0);
                    }}
                    className="absolute top-6 left-6 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
                  >
                    <ChevronRight className="w-5 h-5 rotate-180" />
                  </button>
                </div>
                
                {/* Image Thumbnails */}
                <div className="p-4 grid grid-cols-4 gap-3 bg-white border-t border-gray-100">
                  {selectedProduct.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx ? 'border-red-600 scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      {activeImageIndex === idx && (
                        <div className="absolute inset-0 bg-red-600/10" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {!isRequestFormOpen ? (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <span className="px-4 py-1.5 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                          {selectedProduct.category}
                        </span>
                        <div className="flex items-center space-x-2 text-emerald-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-[10px] font-black uppercase tracking-widest">Verified Asset</span>
                        </div>
                      </div>

                      <h2 className="text-4xl font-black text-gray-900 mb-2 tracking-tight leading-none">{selectedProduct.name}</h2>
                      <p className="text-2xl font-black text-red-600 mb-8 tracking-tighter">€{selectedProduct.price.toLocaleString()}</p>

                      <div className="grid grid-cols-2 gap-6 mb-10">
                        {selectedProduct.specs.map((spec, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                              <Info className="w-4 h-4 text-gray-400" />
                            </div>
                            <span className="text-sm text-gray-600 font-medium">{spec}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gray-50 rounded-3xl p-6 mb-10">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">KommtFlix Guarantee</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center space-x-3 text-xs text-gray-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>Full technical inspection report included</span>
                          </li>
                          <li className="flex items-center space-x-3 text-xs text-gray-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>Escrow payment protection</span>
                          </li>
                          <li className="flex items-center space-x-3 text-xs text-gray-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>Priority shipping slot guaranteed</span>
                          </li>
                        </ul>
                      </div>

                      <button 
                        onClick={() => setIsRequestFormOpen(true)}
                        className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-600 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-gray-200"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        <span>Request Info & Quote</span>
                      </button>
                      
                      <p className="text-center mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        Commission: 5% (Included in price)
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <button 
                        onClick={() => setIsRequestFormOpen(false)}
                        className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 flex items-center hover:text-gray-900 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
                        Back to Details
                      </button>

                      <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Request Information</h3>
                      <p className="text-sm text-gray-500 mb-8">Please provide your details and our experts will contact you within 24 hours.</p>

                      {status === 'success' ? (
                        <div className="py-12 text-center">
                          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                          </div>
                          <h4 className="text-xl font-black text-gray-900 mb-2">Request Received!</h4>
                          <p className="text-sm text-gray-500">Our team is reviewing your inquiry for {selectedProduct?.name}. We will contact you within 24 hours.</p>
                        </div>
                      ) : status === 'error' ? (
                        <div className="py-12 text-center">
                          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Info className="w-8 h-8 text-red-600" />
                          </div>
                          <h4 className="text-xl font-black text-gray-900 mb-2">Submission Failed</h4>
                          <p className="text-sm text-gray-500 mb-6">We couldn't transmit your request. Please try again.</p>
                          <button 
                            onClick={() => setStatus('idle')}
                            className="text-[10px] font-black text-red-600 uppercase tracking-widest"
                          >
                            Retry Inquiry
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name *</label>
                              <input 
                                required
                                disabled={status === 'sending'}
                                type="text" 
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:opacity-50" 
                                placeholder="John Doe"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Address *</label>
                              <input 
                                required
                                disabled={status === 'sending'}
                                type="email" 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:opacity-50" 
                                placeholder="john@company.com"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone Number *</label>
                              <input 
                                required
                                disabled={status === 'sending'}
                                type="tel" 
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:opacity-50" 
                                placeholder="+49 123 456789"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Location *</label>
                              <input 
                                required
                                disabled={status === 'sending'}
                                type="text" 
                                value={formData.location}
                                onChange={(e) => setFormData({...formData, location: e.target.value})}
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:opacity-50" 
                                placeholder="City, Country"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Company Name</label>
                              <input 
                                disabled={status === 'sending'}
                                type="text" 
                                value={formData.company}
                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:opacity-50" 
                                placeholder="Your Business Ltd"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Quantity / Volume *</label>
                              <input 
                                required
                                disabled={status === 'sending'}
                                type="text" 
                                value={formData.quantity}
                                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 disabled:opacity-50" 
                                placeholder="e.g. 2 Units"
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Message *</label>
                            <textarea 
                              required
                              disabled={status === 'sending'}
                              rows={3}
                              value={formData.message}
                              onChange={(e) => setFormData({...formData, message: e.target.value})}
                              className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 resize-none disabled:opacity-50" 
                              placeholder="Tell us about your requirements..."
                            />
                          </div>

                          <button 
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full bg-red-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-900/20 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {status === 'sending' ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>TRANSMITTING...</span>
                              </>
                            ) : (
                              <span>Submit Inquiry</span>
                            )}
                          </button>
                        </form>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MarketplacePortal;
