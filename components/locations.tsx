'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Phone } from 'lucide-react'

const locations = [
  {
    name: 'Isiohor Lab',
    region: 'South - Benin City',
    address: 'Km 8, Benin-Lagos Express Road, Opp. Allah\'s Favour Filling Station',
    status: 'NOW OPEN',
    phone: '+234 803 456 7890'
  },
  {
    name: 'Coming Soon',
    region: 'South - Lagos',
    address: 'Central Business District',
    status: 'OPENING SOON',
    phone: 'TBA'
  },
  {
    name: 'Coming Soon',
    region: 'North - Abuja',
    address: 'Maitama District',
    status: 'OPENING SOON',
    phone: 'TBA'
  }
]

export function Locations() {
  return (
    <section id="locations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find a SUMOH Closest to You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Better care with facilities across multiple locations. Visit our center near you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card 
              key={index} 
              className="p-6 border-border bg-white hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {location.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mt-1">
                    {location.region}
                  </p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                  location.status === 'NOW OPEN' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {location.status}
                </span>
              </div>

              <div className="space-y-4 flex-1">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    {location.address}
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-sm font-medium text-foreground">
                    {location.phone}
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Mon - Fri: 8AM - 5PM
                  </p>
                </div>
              </div>

              <Button 
                className="w-full mt-6 bg-primary text-white hover:bg-primary/90"
                disabled={location.status !== 'NOW OPEN'}
              >
                {location.status === 'NOW OPEN' ? 'Visit Center' : 'Coming Soon'}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Can&apos;t Find Your Location?
            </h3>
            <p className="text-muted-foreground mb-6">
              We&apos;re expanding to bring quality laboratory services closer to you. Contact us to inquire about expansion plans for your area.
            </p>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Get Notified of New Locations
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
