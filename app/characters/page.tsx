"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowLeft } from "lucide-react"
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

export default function CharactersPage() {
  const characters = [
    {
      name: "Laetitia",
      role: "Protagonist",
      traits: ["Determined", "Compassionate", "Resilient"],
      description:
        "[Insert detailed character description here - Include Laetitia's background, personality, motivations, and character development throughout the story.]",
      significance: "[Explain Laetitia's significance to the overall narrative and themes]",
    },
    {
      name: "[Character Name 2]",
      role: "Supporting Character",
      traits: ["Loyal", "Wise", "Protective"],
      description:
        "[Insert character description - Detail this character's relationship to Laetitia and their role in the story's progression.]",
      significance: "[Explain this character's importance to the plot and themes]",
    },
    {
      name: "[Character Name 3]",
      role: "Antagonist/Conflict Source",
      traits: ["Complex", "Challenging", "Influential"],
      description:
        "[Insert character description - Describe the conflicts this character creates and their motivations.]",
      significance: "[Explain how this character drives the story forward and creates meaningful conflict]",
    },
    {
      name: "[Character Name 4]",
      role: "Supporting Character",
      traits: ["Inspiring", "Mentor-like", "Caring"],
      description: "[Insert character description - Detail their relationship dynamics and contribution to the story.]",
      significance: "[Explain their role in character development and plot advancement]",
    },
  ]

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
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="/characters" className="text-blue-600 font-medium">
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
            Meet the Characters
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Discover the compelling individuals who bring "For the Life of Laetitia" to life. Each character plays a
            crucial role in the story's development and themes.
          </motion.p>
        </motion.div>

        {/* Characters Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {characters.map((character, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="bg-white/70 backdrop-blur-sm border-blue-200 hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <CardTitle className="text-2xl text-gray-900 mb-2">{character.name}</CardTitle>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          {character.role}
                        </Badge>
                      </motion.div>
                    </div>
                    {/* Character Image Placeholder */}
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      {character.name.charAt(0)}
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Character Traits */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">Key Traits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {character.traits.map((trait, traitIndex) => (
                        <motion.div
                          key={traitIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + 0.5 + traitIndex * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="outline" className="border-blue-300 text-blue-700">
                            {trait}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Character Description */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">Character Profile:</h4>
                    <p className="text-gray-700 leading-relaxed">{character.description}</p>
                  </motion.div>

                  {/* Character Significance */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">Story Significance:</h4>
                    <p className="text-gray-700 leading-relaxed">{character.significance}</p>
                  </motion.div>

                  {/* AI Image Placeholder */}
                  <motion.div
                    className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg border border-blue-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <p className="text-sm text-gray-600 text-center">
                      <strong>AI-Generated Character Image</strong>
                      <br />
                      [Space reserved for Canva AI-generated character visualization]
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Character Analysis Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="mt-16 bg-white/70 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <CardTitle className="text-2xl text-center text-gray-900">Character Relationships & Dynamics</CardTitle>
              </motion.div>
            </CardHeader>
            <CardContent className="p-8">
              <motion.div
                className="prose prose-lg max-w-none text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.p
                  className="mb-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  [Insert analysis of character relationships here - Explain how the characters interact with each other
                  and how these relationships drive the plot forward.]
                </motion.p>
                <motion.p
                  className="mb-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  [Character development analysis - Discuss how characters change throughout the story and what these
                  changes represent in terms of the book's themes.]
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  [Symbolic significance - Explain what each character represents in the broader context of the story's
                  message and themes.]
                </motion.p>
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
