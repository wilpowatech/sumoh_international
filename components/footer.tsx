'use client'

import Link from 'next/link'
import { FlaskConical } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-sm">SUMOH</div>
                <div className="text-xs">INTERNATIONAL</div>
              </div>
            </Link>
            <p className="text-sm text-white/60">
              Specialist diagnostic and medical laboratory services
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#tests" className="hover:text-white transition">Featured Tests</a></li>
              <li><a href="#locations" className="hover:text-white transition">Locations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">ISO 15189 Accredited</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Reg. BN 009703</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2026 SUMOH INTERNATIONAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
