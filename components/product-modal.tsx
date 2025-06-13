"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Check, X, Star } from "lucide-react"
import type { Product } from "@/lib/types"
import { useState } from "react"

interface ProductModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [imageError, setImageError] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-[300px] md:h-full bg-gray-100 dark:bg-gray-900">
            <Image
              src={imageError ? "/placeholder.svg?height=500&width=500" : product.image}
              alt={product.name}
              fill
              className="object-cover"
              unoptimized={true}
              onError={() => setImageError(true)}
            />
            <Badge className="absolute top-4 right-4 bg-primary/90">{product.category}</Badge>
          </div>

          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(24 пікір)</span>
              </div>
            </DialogHeader>

            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-3xl font-bold text-primary">{product.price.toLocaleString()} ₸</span>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    product.inStock
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}
                >
                  {product.inStock ? (
                    <span className="flex items-center gap-1">
                      <Check size={14} /> Қоймада бар
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <X size={14} /> Қоймада жоқ
                    </span>
                  )}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Сипаттама:</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{product.fullDescription}</p>
                </div>

                {product.specifications && (
                  <div>
                    <h4 className="font-semibold mb-2">Сипаттамалары:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="font-medium text-gray-600 dark:text-gray-400">{key}:</span>
                          <span className="text-gray-800 dark:text-gray-200">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {product.inStock && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium">Саны:</span>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-l-md"
                        onClick={decrementQuantity}
                      >
                        -
                      </Button>
                      <div className="h-8 w-12 flex items-center justify-center border-y border-input">{quantity}</div>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-r-md"
                        onClick={incrementQuantity}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <DialogFooter className="mt-6">
              <Button
                className="w-full"
                size="lg"
                disabled={!product.inStock}
                onClick={() => {
                  alert(`${product.name} себетке қосылды! Саны: ${quantity}`)
                  onClose()
                }}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Себетке қосу
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
