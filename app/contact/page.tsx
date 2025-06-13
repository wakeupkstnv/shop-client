import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Байланыс | Қазақ Дүкені",
  description: "Бізбен байланысу",
}

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Байланыс</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Біздің мекенжайымыз</h2>
            <p className="text-gray-600 dark:text-gray-300">Алматы қаласы, Абай даңғылы, 52/2</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Байланыс телефоны</h2>
            <p className="text-gray-600 dark:text-gray-300">+7 (727) 123-45-67</p>
            <p className="text-gray-600 dark:text-gray-300">+7 (700) 987-65-43</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Электрондық пошта</h2>
            <p className="text-gray-600 dark:text-gray-300">info@qazaq-store.kz</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Жұмыс уақыты</h2>
            <p className="text-gray-600 dark:text-gray-300">Дүйсенбі - Жұма: 09:00 - 18:00</p>
            <p className="text-gray-600 dark:text-gray-300">Сенбі: 10:00 - 16:00</p>
            <p className="text-gray-600 dark:text-gray-300">Жексенбі: демалыс</p>
          </div>

          <form className="space-y-4 mt-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Аты-жөніңіз
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                placeholder="Аты-жөніңізді енгізіңіз"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Электрондық пошта
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                placeholder="Электрондық поштаңызды енгізіңіз"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Хабарлама
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                placeholder="Хабарламаңызды жазыңыз"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Жіберу
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
