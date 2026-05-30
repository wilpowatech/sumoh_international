'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Nigeria&apos;s trusted medical laboratory
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Always accurate and reliable test results
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 gap-2 font-semibold"
          >
            Order Your Test <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
