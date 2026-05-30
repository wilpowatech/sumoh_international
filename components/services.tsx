'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart } from 'lucide-react'

const tests = [
  {
    name: 'STI Screening Panel',
    price: '₦38,100',
    badge: 'NEW',
    testCount: 5,
    tests: ['Hepatitis B Virus Surface Ag', 'HIV Stat', 'Microscopy Gram', 'RPR Agglutination', 'Hepatitis C Stat'],
    description: 'A simple screening panel that screens for a broad range of sexually transmitted infections.'
  },
  {
    name: 'Platinum Wellness Test Male',
    price: '₦544,200',
    badge: 'COMPREHENSIVE',
    testCount: 31,
    tests: ['Full Blood Count', 'Lipid Profile', 'Liver Function', 'Kidney Function', 'Thyroid Function', '25+ more tests'],
    description: 'Our most advanced wellness panel. Detailed assessment of liver, kidney, thyroid function, diabetes risk, and more.'
  },
  {
    name: 'Platinum Wellness Test Female',
    price: '₦540,800',
    badge: 'COMPREHENSIVE',
    testCount: 31,
    tests: ['Full Blood Count', 'Lipid Profile', 'Liver Function', 'Kidney Function', 'Pap Smear', '25+ more tests'],
    description: 'Comprehensive wellness panel for women including cervical cancer screening and complete health assessment.'
  }
]

export function Services() {
  return (
    <section id="tests" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our curated selection of health test panels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((test, index) => (
            <Card 
              key={index} 
              className="border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground flex-1">
                    {test.name}
                  </h3>
                  {test.badge && (
                    <Badge className="ml-2 bg-primary text-white">
                      {test.badge}
                    </Badge>
                  )}
                </div>

                <div className="text-2xl font-bold text-primary mb-2">
                  {test.price}
                </div>

                <div className="text-sm text-muted-foreground mb-4">
                  {test.testCount} TESTS
                </div>

                <div className="space-y-2 mb-4 flex-1">
                  {test.tests.map((t, i) => (
                    <div key={i} className="text-sm text-muted-foreground">
                      {t}
                    </div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  {test.description}
                </p>

                <Button className="w-full bg-primary text-white hover:bg-primary/90 gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
