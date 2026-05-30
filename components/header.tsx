'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FlaskConical, Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="p-2 bg-primary rounded-lg group-hover:bg-primary/90 transition-colors">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">SUMOH</div>
              <div className="text-xs text-muted-foreground">Diagnostics</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              How It Works
            </a>
            <a href="#tests" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Tests
            </a>
            <a href="#why-us" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Why Choose Us
            </a>
            <a href="#locations" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Locations
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+2348034567890" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+234 803 456 7890</span>
            </a>
            <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
              Book Test
            </Button>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden pb-4 space-y-2 border-t border-border pt-4">
            <a href="#how-it-works" className="block py-2 text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#tests" className="block py-2 text-foreground hover:text-primary transition-colors">
              Tests
            </a>
            <a href="#why-us" className="block py-2 text-foreground hover:text-primary transition-colors">
              Why Choose Us
            </a>
            <a href="#locations" className="block py-2 text-foreground hover:text-primary transition-colors">
              Locations
            </a>
            <a href="tel:+2348034567890" className="block py-2 text-primary font-medium mt-4">
              +234 803 456 7890
            </a>
            <Button className="w-full mt-2 bg-primary text-white hover:bg-primary/90">
              Book Test
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
