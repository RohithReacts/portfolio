// Import global styles and fonts
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
 
const inter = Inter({ subsets: ['latin'] })
 
export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="h-screen w-screen relative">
        {/* Fullscreen Image */}
        <Image
          src="/assets/404.jpg" // place your image inside /public
          alt="Page not found illustration"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
        </div>
      </body>
    </html>
  )
}
