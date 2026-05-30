'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Phone, AlertCircle } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-amber-50 border-t-4 border-amber-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4 mb-8 max-w-3xl mx-auto">
          <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-2">
              Wait! Don&apos;t Leave Just Yet!
            </h2>
            <p className="text-amber-800 mb-4">
              We noticed you were about to leave without completing your purchase. Did you encounter a challenge or would like to speak to our support team first?
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 max-w-3xl mx-auto border border-amber-200 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">WhatsApp</p>
                    <a href="tel:+2348104607953" className="text-primary font-medium hover:underline">
                      +234 810 460 7953
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Call</p>
                    <a href="tel:+2348034567890" className="text-primary font-medium hover:underline">
                      +234 803 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Visit Us</p>
                    <p className="text-muted-foreground text-sm">
                      Km 8, Benin-Lagos Express Road<br />
                      Isiohor, Benin City
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white rounded-lg p-8 text-center">
              <h4 className="text-xl font-bold mb-3">
                Don&apos;t Miss Out!
              </h4>
              <p className="text-white/90 mb-6">
                Experience top-notch customer service with SUMOH. Complete your test booking today.
              </p>
              <Button 
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Complete Your Purchase
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
