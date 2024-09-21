'use client'

import { Button } from "@/components/ui/button"
import { Dna, Zap, Brain, Lock, Mail } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center fixed w-full bg-white z-10">
        <div className="container flex items-center justify-between">
          <a className="flex items-center justify-center" href="#hero">
            <Dna className="h-6 w-6 mr-2" />
            <span className="font-bold text-lg text-black">4GeneAI</span>
          </a>
          <nav className="flex gap-4 sm:gap-6">
            <a className="text-sm font-medium hover:underline underline-offset-4 text-black" href="#features">
              Features
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4 text-black" href="#about">
              About
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4 text-black" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1 pt-14">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Revolutionizing Genetic Analysis with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  4GeneAI combines cutting-edge artificial intelligence with genomic research to unlock new possibilities in personalized medicine.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-black">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-bold mb-2 text-black">Rapid Analysis</h3>
                <p className="text-black">Process genetic data at unprecedented speeds with our AI-powered algorithms.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Brain className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-bold mb-2 text-black">Intelligent Insights</h3>
                <p className="text-black">Gain deep insights into genetic patterns and potential health implications.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Lock className="h-12 w-12 mb-4 text-purple-600" />
                <h3 className="text-xl font-bold mb-2 text-black">Secure & Private</h3>
                <p className="text-black">Your genetic data is protected with state-of-the-art security measures.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">About 4GeneAI</h2>
              <p className="max-w-[800px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At 4GeneAI, we&apos;re passionate about harnessing the power of artificial intelligence to revolutionize genetic research and personalized medicine. Our team of experts in AI, genetics, and data science work tirelessly to develop cutting-edge solutions that can transform healthcare and improve lives. We believe in the potential of AI to unlock new insights from genetic data, leading to more accurate diagnoses, personalized treatment plans, and ultimately, better patient outcomes.
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">Get in Touch</h2>
                <p className="max-w-[600px] text-black md:text-xl">
                  Interested in learning more about 4GeneAI? Contact us today to discover how we can help you unlock the potential of genetic data.
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2 text-purple-600">
                <Mail className="h-6 w-6" />
                <a href="mailto:sales@4geneai.com" className="text-lg font-medium hover:underline text-black">
                  sales@4geneai.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t">
        <p className="text-xs text-black">© 2023 4GeneAI. All rights reserved.</p>
        <nav className="sm:ml-4 flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-black" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-black" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}