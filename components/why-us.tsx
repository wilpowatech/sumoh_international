'use client'

import { Card } from '@/components/ui/card'
import { 
  CheckCircle, 
  Award, 
  MapPin, 
  Clock,
  ShieldCheck,
  Zap
} from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    title: 'Guaranteed Accuracy',
    description: 'Accurate results are crucial to get the best treatment. We maintain our facilities and equipment to the highest standards.'
  },
  {
    icon: Award,
    title: 'ISO 15189 Accredited',
    description: 'One of the very few laboratories in Nigeria holding international accreditation. Our results are accepted globally.'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Quick results without compromising quality. Your health is our priority.'
  },
  {
    icon: Zap,
    title: 'Unrivalled Access',
    description: 'Over 5,000 tests in our portfolio with access to a network of specialist centers.'
  },
  {
    icon: MapPin,
    title: 'Wide Coverage',
    description: 'Multiple facilities across locations ensuring convenient access for all our patients.'
  },
  {
    icon: ShieldCheck,
    title: 'Expert Team',
    description: 'Experienced pathologists and laboratory technicians with years of expertise.'
  }
]

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose SUMOH?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not all laboratories are the same resulting in not all test results being trustworthy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="p-6 border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
