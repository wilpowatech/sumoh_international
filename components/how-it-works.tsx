'use client'

import { Card } from '@/components/ui/card'
import { ShoppingCart, Home, FileText, Headphones } from 'lucide-react'

const steps = [
  {
    icon: ShoppingCart,
    number: '01',
    title: 'Order Online',
    description: 'Order your test online, select, and pay for your preferred panel.'
  },
  {
    icon: Home,
    number: '02',
    title: 'Collect Your Sample',
    description: 'Choose to have our medical team come in for home sample collection or visit a SUMOH centre near you.'
  },
  {
    icon: FileText,
    number: '03',
    title: 'Review Results',
    description: 'Accurate and confidential results are available on your secure online account.'
  },
  {
    icon: Headphones,
    number: '04',
    title: 'Get Medical Support',
    description: 'Our 24-hour customer support centre is available for any queries.'
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your health tests done has never been easier. Follow these simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card 
                key={index} 
                className="p-6 border-border bg-white hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-primary/20">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
