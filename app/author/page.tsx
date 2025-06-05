"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowLeft, Award, Calendar, Globe } from "lucide-react"
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
      staggerChildren: 0.2,
    },
  },
}

const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

export default function AuthorPage() {
  const achievements = [
    {
      year: "[Year]",
      title: "[Award/Achievement Title]",
      description: "[Description of the award or achievement and its significance]",
    },
    {
      year: "[Year]",
      title: "[Publication/Recognition]",
      description: "[Details about major publication or literary recognition]",
    },
    {
      year: "[Year]",
      title: "[Literary Influence]",
      description: "[Description of impact on literature or society]",
    },
  ]

  const otherWorks = [
    {
      title: "[Book Title 1]",
      year: "[Year]",
      genre: "[Genre]",
      description: "[Brief description of the work and its themes]",
    },
    {
      title: "[Book Title 2]",
      year: "[Year]",
      genre: "[Genre]",
      description: "[Brief description of the work and its significance]",
    },
    {
      title: "[Book Title 3]",
      year: "[Year]",
      genre: "[Genre]",
      description: "[Brief description of the work and its impact]",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-md border-b border-blue-200 sticky top-0 z-50"
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
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
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
                <Link href="/author" className="text-blue-600 font-medium">
                  About Author
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ x: -5 }}
        >
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </motion.div>

        {/* Author Profile Section */}
        <motion.div
          className="grid lg:grid-cols-3 gap-12 mb-16"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Author Image and Basic Info */}
          <motion.div className="lg:col-span-1" variants={slideInLeft} initial="initial" animate="animate">
            <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
              <CardContent className="p-8 text-center">
                {/* Author Photo Placeholder */}
                <motion.div
                  className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-4xl font-bold"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  [Author Photo]
                </motion.div>
                <motion.h1
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  [Author Name]
                </motion.h1>
                <motion.p
                  className="text-lg text-gray-600 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  [Author Title/Description]
                </motion.p>
                <motion.div className="space-y-2" variants={staggerContainer} initial="initial" animate="animate">
                  <motion.div
                    className="flex items-center justify-center text-gray-600"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Born: [Birth Year/Date]</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-center text-gray-600"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    <span>[Nationality/Origin]</span>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Author Biography */}
          <motion.div className="lg:col-span-2" variants={slideInRight} initial="initial" animate="animate">
            <Card className="bg-white/70 backdrop-blur-sm border-blue-200 h-full">
              <CardHeader>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <CardTitle className="text-2xl text-gray-900">Biography</CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent className="p-8">
                <motion.div
                  className="prose prose-lg max-w-none text-gray-700 space-y-4"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  <motion.p variants={fadeInUp}>
                    [Insert comprehensive author biography here - Include early life, education, and formative
                    experiences that influenced their writing. Discuss their journey to becoming a published author.]
                  </motion.p>
                  <motion.p variants={fadeInUp}>
                    [Career development - Detail their writing career, major works, and evolution as an author. Include
                    information about their writing style and preferred themes.]
                  </motion.p>
                  <motion.p variants={fadeInUp}>
                    [Personal philosophy and influences - Discuss what drives their writing, their literary influences,
                    and their perspective on literature and society.]
                  </motion.p>
                  <motion.p variants={fadeInUp}>
                    [Current work and legacy - Information about their recent projects and their impact on contemporary
                    literature and readers.]
                  </motion.p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Achievements and Awards */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Achievements & Recognition
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-1 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
                          whileHover={{
                            scale: 1.2,
                            rotate: [0, -10, 10, 0],
                            transition: { duration: 0.5 },
                          }}
                        >
                          <Award className="h-6 w-6 text-blue-600" />
                        </motion.div>
                      </motion.div>
                      <div className="flex-grow">
                        <motion.div
                          className="flex items-center space-x-3 mb-2"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                        >
                          <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + 0.3,
                              type: "spring",
                              stiffness: 200,
                            }}
                            viewport={{ once: true }}
                          >
                            <Badge variant="outline" className="border-blue-300 text-blue-700">
                              {achievement.year}
                            </Badge>
                          </motion.div>
                        </motion.div>
                        <motion.p
                          className="text-gray-700"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                          viewport={{ once: true }}
                        >
                          {achievement.description}
                        </motion.p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Other Notable Works */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Other Notable Works
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {otherWorks.map((work, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="bg-white/70 backdrop-blur-sm border-blue-200 hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CardTitle className="text-lg text-gray-900 mb-2">{work.title}</CardTitle>
                        <div className="flex items-center space-x-2">
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + 0.2,
                              type: "spring",
                              stiffness: 200,
                            }}
                            viewport={{ once: true }}
                          >
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                              {work.year}
                            </Badge>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + 0.3,
                              type: "spring",
                              stiffness: 200,
                            }}
                            viewport={{ once: true }}
                          >
                            <Badge variant="outline" className="border-blue-300 text-blue-700">
                              {work.genre}
                            </Badge>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <motion.p
                      className="text-gray-700 text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {work.description}
                    </motion.p>

                    {/* Book Cover Placeholder */}
                    <motion.div
                      className="mt-4 p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg border border-blue-200 text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 2,
                        }}
                      >
                        <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      </motion.div>
                      <p className="text-xs text-gray-600">Book Cover Image</p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Literary Influence and Impact */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <CardTitle className="text-2xl text-center text-gray-900">Literary Influence & Impact</CardTitle>
              </motion.div>
            </CardHeader>
            <CardContent className="p-8">
              <motion.div
                className="grid md:grid-cols-2 gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div variants={slideInLeft}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Writing Style & Themes</h3>
                  <div className="prose text-gray-700">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      [Describe the author's distinctive writing style, recurring themes, and literary techniques.
                      Explain what makes their work unique and recognizable.]
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      [Discuss the themes they commonly explore and how these relate to contemporary issues and
                      universal human experiences.]
                    </motion.p>
                  </div>
                </motion.div>
                <motion.div variants={slideInRight}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact on Literature</h3>
                  <div className="prose text-gray-700">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      [Explain the author's influence on contemporary literature, other writers, and literary movements.
                      Discuss their contribution to their genre or literary tradition.]
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      [Include information about critical reception, academic study of their work, and their place in
                      the literary canon.]
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Quote Section */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <blockquote className="text-center">
                  <motion.p
                    className="text-lg italic text-gray-700 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    "[Insert meaningful quote from the author about their writing, philosophy, or 'For the Life of
                    Laetitia' specifically]"
                  </motion.p>
                  <motion.footer
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                  >
                    — [Author Name]
                  </motion.footer>
                </blockquote>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-8 mt-16"
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
