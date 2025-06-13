"use client"

import Image from "next/image"
import { useState } from "react"
import type { Product } from "@/lib/types"
import ProductModal from "@/components/product-modal"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <>
      <div
        className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={imageError ? "/placeholder.svg?height=300&width=300" : product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            unoptimized={true}
            onError={() => setImageError(true)}
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Қоймада жоқ</span>
            </div>
          )}
          <Badge className="absolute top-3 right-3 bg-primary/90">{product.category}</Badge>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2 truncate text-gray-800 dark:text-gray-100">{product.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{product.shortDescription}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl text-primary">{product.price.toLocaleString()} ₸</span>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                // Здесь будет логика добавления в корзину
                alert(`${product.name} себетке қосылды!`)
              }}
              disabled={!product.inStock}
            >
              <ShoppingCart size={18} />
              <span>Себетке</span>
            </button>
          </div>
        </div>
      </div>

      <ProductModal product={product} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
