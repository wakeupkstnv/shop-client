import { products, categories } from "@/lib/products"
import ProductCard from "@/components/product-card"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ChevronRight, Truck, CreditCard, HeadphonesIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Басты бет | KazShop",
  description: "Қазақ тіліндегі интернет-дүкен",
}

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Заманауи техника <span className="text-primary">үздік бағамен</span>
              </h1>
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                Смартфондар, ноутбуктер және басқа да техника. Жылдам жеткізу және кепілдік.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Қазір сатып алу
                </Button>
                <Button size="lg" variant="outline">
                  Каталогты қарау
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative h-[400px] w-full">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-primary/20 rounded-full blur-3xl"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
                  <div className="flex flex-col gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 h-[180px]">
                      <img
                        src="https://picsum.photos/id/1/500/500"
                        alt="Смартфон"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 h-[180px]">
                      <img
                        src="https://picsum.photos/id/4/500/500"
                        alt="Ноутбук"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 mt-8">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 h-[180px]">
                      <img
                        src="https://picsum.photos/id/8/500/500"
                        alt="Смарт сағат"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 h-[180px]">
                      <img
                        src="https://picsum.photos/id/10/500/500"
                        alt="Аудио"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Категориялар</h2>
            <Button variant="ghost" className="flex items-center gap-1">
              Барлығы <ChevronRight size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.slice(0, 6).map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <img
                    src={`https://picsum.photos/id/${index + 30}/100/100`}
                    alt={category}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <h3 className="font-medium text-sm">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Тегін жеткізу</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  50,000 ₸ жоғары тапсырыстар үшін Қазақстан бойынша тегін жеткізу
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Қауіпсіз төлем</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Барлық төлемдер қауіпсіз және шифрланған</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <HeadphonesIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">24/7 қолдау</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Біздің қолдау қызметі әрқашан көмектесуге дайын
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Танымал өнімдер</h2>
            <Button variant="ghost" className="flex items-center gap-1">
              Барлығы <ChevronRight size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Жаңалықтарға жазылыңыз</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Жаңа өнімдер, арнайы ұсыныстар және жеңілдіктер туралы алғашқылардың бірі болып біліңіз.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Электрондық пошта"
              className="px-4 py-3 rounded-lg flex-1 border-0 focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-primary hover:bg-white/90">Жазылу</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
