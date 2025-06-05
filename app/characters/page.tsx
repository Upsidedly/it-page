"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowLeft, TrainTrack } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

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
        "Laetitia, or Lacey, is a bright and strong-willed girl from rural Balatier. After her mother migrates to New York, she is raised by her loving grandmother, Ma. When Lacey wins a place at a top secondary school in La Puerta, she is sent to live with her distant father and his new family. There, she struggles with feelings of isolation and prejudice at school, especially for being a 'country' girl. With the help of supportive teachers and her grandmother's care after a breakdown, Lacey eventually learns to embrace her roots and pursue her education with purpose.",
      significance: "Lacey's journey is central to the novel's themes of identity, resilience, and hope. Her personal growth shows the power of family support, community, and cultural pride in overcoming adversity.",
      image: '/laetitia.png'
    },
    {
      image: '/mrcephas.png',
      name: "Cephas",
      role: "Laetitia's Father",
      traits: ["Inconsistent", "Authoritative", "Dismissive"],
      description:
        "Cephas is Lacey's biological father, who only shows interest in her after she gets into a good school. He brings her to live with him during the term but offers little emotional support. His controlling behavior and dismissive attitude mirror his views on gender roles and expectations, creating tension in the home. He fails to connect with Lacey or recognize her emotional needs.",
      significance: "Cephas represents toxic masculinity and the emotional distance some fathers create. His character contrasts with the love and care Lacey receives from her grandmother and highlights the role of nurturing in a child’s development."
    },
    {
      image: 'anjanee.png',
      name: "Anjanee",
      role: "Laetitia's Friend",
      traits: ["Hardworking", "Gentle", "Neglected"],
      description:
        "Anjanee is Lacey's close friend and fellow 'country' girl at school. While she longs for an education, her home life is harsh—her male relatives believe girls should stay home to cook, clean, and raise children. Without real support, Anjanee becomes overwhelmed by her responsibilities and the constant judgment. Lacey tries to encourage her, but Anjanee eventually takes her own life, unable to see a way forward.",
      significance: "Anjanee's tragic story highlights the dangers of gender inequality and the emotional toll of being unsupported. Her death deeply affects Lacey and serves as a powerful reminder of the importance of encouragement, love, and opportunity."
    },
    {
      image: 'michael.png',
      name: "Michael",
      role: "Laetitia's Half-Brother",
      traits: ["Inconsiderate", "Undisciplined", "Impressionable"],
      description:
        "Michael is Lacey's younger half-brother who lives with their father and stepmother. He is untidy, rude, and poorly behaved due to weak guidance at home. When Lacey comes to live with them, she becomes a positive influence, teaching him to be respectful and kind. She hopes that through her example, Michael will grow up with better values and not repeat their father's mistakes.",
      significance: "Michael’s character shows how environment shapes behavior. His slow change under Lacey’s guidance contrasts the two and highlights the impact of good role models and home training."
    },
    {
      image: '/ma.png',
      name: "Ma (Laetitia's Grandmother)",
      role: "Caretaker",
      traits: ["Strong", "Supportive", "Wise"],
      description:
        "Ma is the respected matriarch of the family in Balatier. She raises Lacey with love, discipline, and wisdom. After Lacey’s breakdown, it is Ma’s care that helps her recover and find the strength to return to school. Her guidance and emotional support make a lasting impact on Lacey’s life.",
      significance: "Ma represents the power of strong women and the importance of family. Her character is a source of stability and love, playing a key role in Lacey’s healing and success."
    },
    {
      image: 'mrjoseph.png',
      name: "Mr. Joseph",
      role: "English Teacher",
      traits: ["Encouraging", "Respectful", "Culturally Proud"],
      description:
        "Mr. Joseph is Lacey’s English teacher who shows respect and understanding from the moment they meet. He values Caribbean culture and treats stories like Anansi tales as equal to Greek myths. He encourages students to be proud of who they are and where they come from.",
      significance: "Mr. Joseph is a symbol of cultural pride and positive mentorship. He helps Lacey connect with her identity and feel valued, reinforcing the theme of finding strength through one’s roots."
    },
    {
      image: '/mrslopez.png',
      name: "Mrs. Lopez",
      role: "Mathematics Teacher",
      traits: ["Prejudiced", "Arrogant", "Dismissive"],
      description:
        "Mrs. Lopez teaches Mathematics and looks down on Lacey and her grandmother for being 'country' people. She is impatient, flashy in appearance, and treats students in a condescending manner. She constantly discourages and embarrasses students like Lacey.",
      significance: "Mrs. Lopez represents classism and prejudice in the education system. Her character stands in direct contrast to Mr. Joseph and shows how harmful biased teachers can be to student self-worth and success."
    }
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
                      className="w-24 h-24 bg-gradient-to-br overflow-hidden from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg"
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
                      <Image src={character.image} width={800} height={1200} className="w-full" alt={'Character'} />
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
                  {/* <motion.div
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
                      <Image src={character.image} width={500} height={700} alt={character.name} />
                    </p>
                  </motion.div> */}
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
The relationships in <i>For the Life of Laetitia</i> are what drive the story forward. Lacey's relationship with her father, Cephas, is cold and filled with tension. He only becomes interested in her once she passes for secondary school, and even then, he offers her no real emotional support. This leads to feelings of loneliness and frustration, pushing Lacey to act out and stop trying at school. On the other hand, her bond with her grandmother, Ma, is loving and steady. Ma provides the encouragement Lacey needs to heal after her breakdown. Lacey's friendship with Anjanee is another key relationship. They both come from rural areas and face unfair treatment at school for being 'country' girls. While Lacey has family support, Anjanee has no one but Lacey. Sadly, that is not enough to save her. Lacey also builds a connection with her little brother, Michael, trying to help him become kinder and more respectful, showing her maturity and sense of responsibility.
                </motion.p>
                <motion.p
                  className="mb-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Lacey changes a lot over the course of the novel. At first, she is proud and hopeful but quickly becomes discouraged by her new environment. She rebels against her father's rules and gives up on her schoolwork. After Anjanee dies and Lacey has a nervous breakdown, she returns home to Balatier. There, with Ma's love and care, she reflects on her life and gains a new understanding of what her education means. She decides to return to school and take it seriously, showing growth in both her mindset and her emotional strength. Michael also begins to change. He starts out rude and messy, but under Lacey's influence, he becomes more thoughtful and better behaved. This shows the impact of positive role models. Cephas does not really change, representing the older generation that holds onto harmful views. Mr. Joseph and Mrs. Lopez remain consistent throughout the story, with one supporting students and the other tearing them down.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Lacey stands for strength, growth, and the hope of a better future. She shows what a young girl can become when given support and encouragement. Anjanee represents lost potential. She is smart and hardworking but never given a real chance. Her death shows the damage that can happen when girls are treated as unimportant. Ma is a symbol of love, guidance, and wisdom. She keeps the family grounded and helps Lacey heal. Cephas stands for the harsh, old-fashioned views that continue to harm both boys and girls. Michael, still young, is a symbol of change and the chance to break harmful cycles. Mr. Joseph stands for cultural pride and the power of good teachers. He shows that Caribbean stories and voices matter. Mrs. Lopez represents bias and how damaging it can be when educators treat students with disrespect and judgment. Together, these characters help explore themes like identity, resilience, hope, and the importance of community.
                </motion.p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="bg-slate-100 text-white py-8 mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            © 2025 Matthew Williams - For the Life of Laetitia Information Site
          </motion.p>
        </div>
      </motion.footer>
    </div>
  )
}
