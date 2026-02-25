import React from 'react';
import { Product } from '../types';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-orange-600">
          {product.weight}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{product.name}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${
            product.spicyLevel === 'Extra Hot' ? 'bg-red-100 text-red-700' :
            product.spicyLevel === 'Hot' ? 'bg-orange-100 text-orange-700' :
            product.spicyLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
            'bg-green-100 text-green-700'
          }`}>
            {product.spicyLevel}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2 h-10">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">LKR {product.price}</span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(product)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-colors"
          >
            <Plus size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
