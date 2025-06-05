"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowLeft, Palette, PenTool, ImageIcon } from "lucide-react"
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

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
}

export default function CreativeResponsesPage() {
  const responseCategories = [
    {
      title: "Visual Art",
      icon: <Palette className="h-6 w-6" />,
      description: "Student artwork inspired by the book's themes and characters",
      examples: [
        "Character portraits and illustrations",
        "Scene recreations and interpretations",
        "Symbolic artwork representing themes",
        "Book cover redesigns",
      ],
    },
    {
      title: "Written Responses",
      icon: <PenTool className="h-6 w-6" />,
      description: "Essays, poetry, and creative writing pieces",
      examples: [
        "Character analysis essays",
        "Alternative ending stories",
        "Poetry inspired by themes",
        "Personal reflection pieces",
      ],
    },
    {
      title: "Digital Media",
      icon: <ImageIcon className="h-6 w-6" />,
      description: "Modern interpretations using digital tools",
      examples: ["Digital art and graphics", "Video presentations", "Interactive timelines", "Social media campaigns"],
    },
  ]

  const featuredResponses = [
    {
      title: "[Student Response Title 1]",
      author: "[Student Name]",
      type: "Essay",
      description:
        "[Brief description of the student's creative response and what themes or aspects of the book it explores]",
      excerpt:
        "[Include a compelling excerpt or summary of the student's work that showcases their understanding and creativity]",
    },
    {
      title: "[Student Response Title 2]",
      author: "[Student Name]",
      type: "Artwork",
      description: "[Description of the artistic piece and its connection to the book's themes or characters]",
      excerpt: "[Artist's statement or description of their creative process and inspiration]",
    },
    {
      title: "[Student Response Title 3]",
      author: "[Student Name]",
      type: "Poetry",
      description: "[Description of the poem and how it relates to the book's themes or emotional impact]",
      excerpt: "[A few lines from the poem or the poet's reflection on their work]",
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
                <Link href="/creative-responses" className="text-blue-600 font-medium">
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

        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creative Responses
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Explore how students have interpreted and responded to "For the Life of Laetitia" through various creative
            mediums. These works showcase deep understanding and personal connections to the text.
          </motion.p>
        </motion.div>

        {/* Response Categories */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {responseCategories.map((category, index) => (
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
                  <motion.div
                    className="flex items-center space-x-3 mb-2"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="p-2 bg-blue-100 rounded-lg text-blue-600"
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      {category.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                  </motion.div>
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  >
                    {category.description}
                  </motion.p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.examples.map((example, exampleIndex) => (
                      <motion.li
                        key={exampleIndex}
                        className="flex items-center text-sm text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + 0.3 + exampleIndex * 0.1,
                        }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-blue-400 rounded-full mr-3"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: exampleIndex * 0.2,
                          }}
                        />
                        {example}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Student Responses */}
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
            Featured Student Work
          </motion.h2>
          <motion.div
            className="grid lg:grid-cols-1 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featuredResponses.map((response, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CardTitle className="text-2xl text-gray-900 mb-2">{response.title}</CardTitle>
                        <div className="flex items-center space-x-4">
                          <p className="text-gray-600">by {response.author}</p>
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
                              {response.type}
                            </Badge>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <motion.p
                      className="text-gray-700 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {response.description}
                    </motion.p>
                    <motion.div
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-gray-700 italic">"{response.excerpt}"</p>
                    </motion.div>

                    {/* Placeholder for student work */}
                    <motion.div
                      className="mt-6 p-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg border border-blue-200 text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.02,
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
                        <Palette className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      </motion.div>
                      <p className="text-gray-600">
                        <strong>Student Work Display Area</strong>
                        <br />
                        [Space reserved for displaying the actual student response - artwork, essay excerpt, poem, etc.]
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Submission Guidelines */}
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
                <CardTitle className="text-2xl text-center text-gray-900">Submission Guidelines</CardTitle>
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
                <motion.div variants={fadeInUp}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">For Visual Art:</h3>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "High-resolution digital images or scanned artwork",
                      "Include artist statement explaining connection to the book",
                      "Specify medium used (digital, watercolor, pencil, etc.)",
                      "Provide title and inspiration source",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        • {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">For Written Work:</h3>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Submit in digital format (Word doc or PDF)",
                      "Include brief author's note about inspiration",
                      "Specify type (essay, poetry, creative writing)",
                      "Follow standard formatting guidelines",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        • {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
              <motion.div
                className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-center text-gray-700">
                  <strong>Ready to share your creative response?</strong>
                  <br />
                  Contact your teacher for submission instructions and deadlines.
                </p>
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
