'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ConnectButton } from '@/components/ConnectButton'
import { ThemeToggle } from '@/components/ThemeToggle'
import NotificationCenter from '@/components/NotificationCenter'
import { useUserData } from '@/hooks/useDAO'

export function LandingHeaderActions() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const userData = useUserData()

  return (
    <>
      <div className="flex items-center space-x-4">
        {userData.isConnected && userData.isMember && (
          <>
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <Link href="/dashboard">
                Dashboard
              </Link>
            </Button>
            <NotificationCenter />
          </>
        )}
        <ThemeToggle />
        <ConnectButton />

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/loans"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Loans
            </Link>
            <Link
              href="/governance"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Governance
            </Link>
            <Link
              href="/treasury"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Treasury
            </Link>
            <Link
              href="/privacy"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
