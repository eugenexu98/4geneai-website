'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dna, Microscope, Zap, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between fixed w-full bg-white z-50 border-b border-purple-100">
        <Link className="flex items-center justify-center" href="#">
          <Dna className="h-6 w-6 text-purple-600" />
          <span className="ml-2 text-2xl font-bold text-purple-800">4GeneAI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-purple-600 text-gray-600" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:text-purple-600 text-gray-600" href="#how-it-works">
            How It Works
          </a>
          <a className="text-sm font-medium hover:text-purple-600 text-gray-600" href="#success-stories">
            Success Stories
          </a>
          <a className="text-sm font-medium hover:text-purple-600 text-gray-600" href="#get-started">
            Get Started
          </a>
        </nav>
      </header>
      <main className="flex-1 pt-14">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-50 via-white to-purple-50">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
                  Accelerating Research with AI and Genomics
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  4geneai combines the power of Large Language Models and genetic research to revolutionize scientific discovery.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-purple-600 text-white hover:bg-purple-700">Get Started</Button>
                <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-black">
              Our Cutting-Edge Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-4 p-6 bg-purple-50 rounded-lg shadow-md">
                <Microscope className="h-16 w-16 text-purple-600" />
                <h3 className="text-2xl font-bold text-purple-800">Advanced Gene Analysis</h3>
                <p className="text-gray-600">Utilize AI to analyze complex genetic data with unprecedented speed and accuracy.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-6 bg-purple-50 rounded-lg shadow-md">
                <Zap className="h-16 w-16 text-purple-600" />
                <h3 className="text-2xl font-bold text-purple-800">Rapid Hypothesis Generation</h3>
                <p className="text-gray-600">Generate and test hypotheses at lightning speed using our LLM-powered system.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-6 bg-purple-50 rounded-lg shadow-md">
                <BarChart3 className="h-16 w-16 text-purple-600" />
                <h3 className="text-2xl font-bold text-purple-800">Predictive Modeling</h3>
                <p className="text-gray-600">Create accurate predictive models for genetic outcomes and drug interactions.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-black">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold">1</div>
                <h3 className="text-2xl font-bold text-purple-800">Data Input</h3>
                <p className="text-gray-600">Upload your genetic data and research parameters to our secure platform.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold">2</div>
                <h3 className="text-2xl font-bold text-purple-800">AI Processing</h3>
                <p className="text-gray-600">Our AI analyzes the data, cross-referencing with vast genetic databases and scientific literature.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold">3</div>
                <h3 className="text-2xl font-bold text-purple-800">Results & Insights</h3>
                <p className="text-gray-600">Receive comprehensive reports and actionable insights to accelerate your research.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="success-stories" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-black">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
              <div className="p-6 bg-purple-50 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  "4geneai helped us identify a key genetic marker in half the time it would have taken using traditional methods. This breakthrough has significant implications for our cancer research."
                </p>
                <p className="font-bold text-purple-800">Dr. Emily Chen, Oncology Researcher</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  "The predictive modeling capabilities of 4geneai have revolutionized our drug discovery process. We've seen a 40% increase in successful trials since implementing their technology."
                </p>
                <p className="font-bold text-purple-800">James Thompson, Pharmaceutical R&D Director</p>
              </div>
            </div>
          </div>
        </section>
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 bg-purple-900 text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Accelerate Your Research?
                </h2>
                <p className="mx-auto max-w-[600px] text-purple-100 md:text-xl">
                  Join the growing number of researchers and institutions using 4geneai to push the boundaries of genetic science.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-purple-900"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-white text-purple-900 hover:bg-purple-100">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-purple-200">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t border-purple-100">
        <p className="text-xs text-gray-600">© 2023 4geneai Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-purple-600 text-gray-600" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-purple-600 text-gray-600" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}