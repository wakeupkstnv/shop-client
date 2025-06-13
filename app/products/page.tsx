import { products, categories } from "@/lib/products"
import ProductCard from "@/components/product-card"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { SlidersHorizontal, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Өнімдер | KazShop",
  description: "Барлық өнімдер тізімі",
}

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Барлық өнімдер</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <SlidersHorizontal size={16} /> Сұрыптау
          </Button>
          <select className="px-3 py-2 border rounded-md text-sm">
            <option>Әдепкі бойынша</option>
            <option>Бағасы: төменнен жоғарыға</option>
            <option>Бағасы: жоғарыдан төменге</option>
            <option>Атауы: А-дан Я-ға</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="hidden lg:block">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h2 className="font-bold text-lg mb-4">Сүзгілер</h2>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Категориялар</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <Checkbox id={`category-${index}`} />
                    <label htmlFor={`category-${index}`} className="ml-2 text-sm">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Баға диапазоны</h3>
              <div className="space-y-4">
                <Slider defaultValue={[0, 500000]} max={1000000} step={10000} />
                <div className="flex items-center justify-between">
                  <Input type="number" placeholder="Мин" className="w-[45%] text-sm" defaultValue={0} />
                  <span className="text-gray-500">-</span>
                  <Input type="number" placeholder="Макс" className="w-[45%] text-sm" defaultValue={500000} />
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Қол жетімділік</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="in-stock" />
                  <label htmlFor="in-stock" className="ml-2 text-sm">
                    Қоймада бар
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="out-of-stock" />
                  <label htmlFor="out-of-stock" className="ml-2 text-sm">
                    Қоймада жоқ
                  </label>
                </div>
              </div>
            </div>

            <Button className="w-full">Сүзгілерді қолдану</Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Mobile Filters */}
          <div className="lg:hidden mb-6">
            <Button variant="outline" className="w-full flex items-center justify-between">
              <span className="flex items-center gap-2">
                <SlidersHorizontal size={16} /> Сүзгілер
              </span>
              <ChevronDown size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" className="w-8 h-8">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="w-8 h-8 bg-primary text-white">
                1
              </Button>
              <Button variant="outline" size="sm" className="w-8 h-8">
                2
              </Button>
              <Button variant="outline" size="sm" className="w-8 h-8">
                3
              </Button>
              <span className="mx-1">...</span>
              <Button variant="outline" size="sm" className="w-8 h-8">
                10
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </main>
  )
}
