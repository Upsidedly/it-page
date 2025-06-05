"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Palette, User } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-md border-blue-200 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">For the Life of Laetitia</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="/" className="text-blue-600 font-medium">
                  Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="/characters" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Characters
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="/creative-responses" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Creative Responses
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="/author" className="text-gray-700 hover:text-blue-600 transition-colors">
                  About Author
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              For the Life of
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Laetitia
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              A compelling literary journey that explores themes of identity, resilience, and the human spirit. Discover
              the story that has captivated readers and sparked meaningful discussions in classrooms worldwide.
            </motion.p>
          </motion.div>

          {/* Book Cover Placeholder */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="relative"
              whileHover={{
                rotate: 0,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="w-80 h-96 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg shadow-2xl"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="absolute inset-4 bg-white/10 rounded border border-white/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                      }}
                    >
                      <BookOpen className="h-16 w-16 mx-auto mb-4" />
                    </motion.div>
                    <p className="text-lg font-semibold">Book Cover</p>
                    <p className="text-sm opacity-80">Image Placeholder</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Book Summary */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Card className="max-w-4xl mx-auto mb-16 bg-white/70 backdrop-blur-sm border-blue-200">
              <CardContent className="p-8">
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-6 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  Book Summary
                </motion.h2>
                <motion.div
                  className="prose prose-lg max-w-none text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  <motion.p
                    className="mb-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                  >
                    [Insert compelling book summary here - This space is reserved for a detailed synopsis of "For the
                    Life of Laetitia" that will engage 4th form students and provide them with a clear understanding of
                    the plot, main conflicts, and themes.]
                  </motion.p>
                  <motion.p
                    className="mb-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2 }}
                  >
                    [Additional summary content - Include information about the setting, time period, and what makes
                    this book particularly relevant and interesting for young adult readers.]
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                  >
                    [Concluding summary paragraph - Highlight the book's impact and why it's an important addition to
                    the curriculum.]
                  </motion.p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Navigation Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                href: "/characters",
                icon: Users,
                title: "Meet the Characters",
                description: "Explore detailed profiles of the key characters and their roles in the story",
              },
              {
                href: "/creative-responses",
                icon: Palette,
                title: "Creative Responses",
                description: "Discover student interpretations through art, essays, and poetry",
              },
              {
                href: "/author",
                icon: User,
                title: "About the Author",
                description: "Learn about the author's background, achievements, and literary influence",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.href}>
                  <Card className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-blue-200 h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.5 },
                        }}
                      >
                        <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Themes Section */}
      <motion.section
        className="py-16 bg-white/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Key Themes to Explore
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { title: "Identity", description: "Exploring self-discovery and personal growth" },
              { title: "Resilience", description: "Overcoming challenges and adversity" },
              { title: "Community", description: "The importance of relationships and belonging" },
              { title: "Hope", description: "Finding light in difficult circumstances" },
            ].map((theme, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <motion.h3
                      className="text-lg font-semibold text-gray-900 mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {theme.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {theme.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            © 2024 For the Life of Laetitia - Educational Website Project
          </motion.p>
        </div>
      </motion.footer>
    </div>
  )
}
