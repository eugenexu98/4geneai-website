'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dna, Users, Target, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Dna className="h-6 w-6 text-purple-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">4geneai</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" aria-current="page">
            About Us
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About 4geneai
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Pioneering the future of genetic research through artificial intelligence and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
                <p className="text-gray-600 md:text-lg">
                  At 4geneai, our mission is to accelerate genetic research and unlock the potential of the human genome through the power of artificial intelligence. We believe that by combining cutting-edge AI technologies with advanced genomic analysis, we can revolutionize the field of genetics and pave the way for groundbreaking discoveries in healthcare, biotechnology, and beyond.
                </p>
                <p className="text-gray-600 md:text-lg">
                  Our team of dedicated scientists, engineers, and AI experts work tirelessly to develop innovative solutions that empower researchers, clinicians, and pharmaceutical companies to make faster, more accurate discoveries and drive meaningful advancements in human health.
                </p>
              </div>
              <div className="lg:order-first">
                <Image
                  src="/placeholder.svg"
                  alt="4geneai team working in a lab"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Values</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Target className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We constantly push the boundaries of what's possible, combining AI and genomics in novel ways to drive scientific breakthroughs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We believe in the power of teamwork and foster partnerships across disciplines to tackle complex genetic challenges.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="h-10 w-10 text-purple-600 mb-2" />
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We strive for excellence in everything we do, from our cutting-edge technology to our customer support and ethical standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Team</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                { name: "Dr. Sarah Chen", role: "Founder & CEO", image: "/placeholder.svg" },
                { name: "Dr. Michael Rodriguez", role: "Chief Scientific Officer", image: "/placeholder.svg" },
                { name: "Emily Nakamura", role: "Head of AI Research", image: "/placeholder.svg" },
                { name: "Dr. James Wilson", role: "Director of Genomics", image: "/placeholder.svg" },
                { name: "Aisha Patel", role: "Chief Technology Officer", image: "/placeholder.svg" },
                { name: "Dr. Thomas Müller", role: "Head of Bioinformatics", image: "/placeholder.svg" },
              ].map((member) => (
                <Card key={member.name}>
                  <CardHeader>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="rounded-full mx-auto mb-4"
                    />
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Us in Shaping the Future of Genetics
                </h2>
                <p className="mx-auto max-w-[600px] text-purple-100 md:text-xl">
                  Be part of a team that's revolutionizing genetic research and making a lasting impact on human health.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-purple-600 hover:bg-purple-50">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="bg-purple-600 text-white border-white hover:bg-purple-700">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 4geneai Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}