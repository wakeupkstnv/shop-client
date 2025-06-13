import Link from "next/link"
import { ShoppingCart, Search, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-xl font-bold text-primary">KazShop</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1 flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Іздеу..."
                className="w-full pl-10 pr-4 py-2 rounded-full border-gray-300 focus:border-primary focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              Басты бет
            </Link>
            <Link
              href="/products"
              className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              Өнімдер
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              Байланыс
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>

            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Search - Hidden by default */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Іздеу..."
            className="w-full pl-10 pr-4 py-2 rounded-full border-gray-300 focus:border-primary focus:ring-primary"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      {/* Mobile Navigation - Hidden by default */}
      <div className="hidden md:hidden">
        <div className="container mx-auto px-4 py-2 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Басты бет
          </Link>
          <Link
            href="/products"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Өнімдер
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Байланыс
          </Link>
        </div>
      </div>
    </header>
  )
}
