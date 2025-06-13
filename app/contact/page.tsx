import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Байланыс | KazShop",
  description: "Бізбен байланысу",
}

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Байланыс</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">Бізге жазыңыз</h2>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Аты-жөніңіз
                </label>
                <Input type="text" id="name" placeholder="Аты-жөніңізді енгізіңіз" className="w-full" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Электрондық пошта
                </label>
                <Input type="email" id="email" placeholder="Электрондық поштаңызды енгізіңіз" className="w-full" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">
                Тақырып
              </label>
              <Input type="text" id="subject" placeholder="Хабарлама тақырыбын енгізіңіз" className="w-full" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Хабарлама
              </label>
              <Textarea id="message" rows={5} placeholder="Хабарламаңызды жазыңыз" className="w-full"></Textarea>
            </div>

            <Button type="submit" className="w-full">
              Жіберу
            </Button>
          </form>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">Байланыс ақпараты</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Мекенжайымыз</h3>
                <p className="text-gray-600 dark:text-gray-300">Алматы қаласы, Абай даңғылы, 52/2</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Телефон</h3>
                <p className="text-gray-600 dark:text-gray-300">+7 (727) 123-45-67</p>
                <p className="text-gray-600 dark:text-gray-300">+7 (700) 987-65-43</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Электрондық пошта</h3>
                <p className="text-gray-600 dark:text-gray-300">info@kazshop.kz</p>
                <p className="text-gray-600 dark:text-gray-300">support@kazshop.kz</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Жұмыс уақыты</h3>
                <p className="text-gray-600 dark:text-gray-300">Дүйсенбі - Жұма: 09:00 - 18:00</p>
                <p className="text-gray-600 dark:text-gray-300">Сенбі: 10:00 - 16:00</p>
                <p className="text-gray-600 dark:text-gray-300">Жексенбі: демалыс</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-bold text-lg mb-4">Картада</h3>
            <div className="h-[200px] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.7617346926546!2d76.9073269!3d43.2381285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eb2439005b3%3A0x3588938a72ea5f0a!2z0L_RgNC-0YHQv9C10LrRgiDQkNCx0LDQuSwg0JDQu9C80LDRgtGL!5e0!3m2!1sru!2skz!4v1654789542348!5m2!1sru!2skz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
