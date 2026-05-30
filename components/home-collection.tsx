'use client'

import { Button } from '@/components/ui/button'
import { Truck, Clock, CheckCircle } from 'lucide-react'

export function HomeCollection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Home Collection
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              No need to risk the traffic. We come to you! Fuel shortages, traffic congestion, and poor roads don&apos;t need to be a headache. Order your laboratory tests on our website and choose home collection. Our phlebotomist teams will come to you when it&apos;s most convenient for you.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary rounded-lg flex-shrink-0">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Professional Collection
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Expert phlebotomists ensure safe and hygienic sample collection at your home
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary rounded-lg flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Convenient Scheduling
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Choose the date and time that works best for you. Flexible booking available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary rounded-lg flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Fast & Reliable Service
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Quick turnaround and accurate test results delivered to your secure account
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Schedule Home Collection
            </Button>
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-96">
            <div className="text-center">
              <Truck className="w-24 h-24 text-primary/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                Sample collection at your doorstep
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
