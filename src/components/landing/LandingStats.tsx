'use client'

import { useDAOStats, useDAOEvents } from '@/hooks/useDAO'
import { useToken } from '@/hooks/useToken'
import { Users, Shield, BarChart3, CreditCard } from 'lucide-react'

export function LandingStats() {
  const stats = useDAOStats()
  const token = useToken()
  useDAOEvents() // Start listening for events

  if (!stats.initialized) {
    return null
  }

  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-3">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground mx-auto">
            Driving decentralized finance forward through community-powered lending.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center">
            <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 dark:bg-primary-950/50">
              <Users className="h-8 w-8 text-primary-600 dark:text-primary-400" aria-hidden="true" />
            </div>
            <dt className="text-4xl font-bold text-primary-600 dark:text-primary-400">{stats.totalMembers}</dt>
            <dd className="mt-2 text-base font-medium text-muted-foreground">Total Members</dd>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 dark:bg-green-950/50">
              <Shield className="h-8 w-8 text-green-600 dark:text-green-400" aria-hidden="true" />
            </div>
            <dt className="text-4xl font-bold text-green-600 dark:text-green-400">{stats.activeMembers}</dt>
            <dd className="mt-2 text-base font-medium text-muted-foreground">Active Members</dd>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/50">
              <BarChart3 className="h-8 w-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
            <dt className="text-4xl font-bold text-blue-600 dark:text-blue-400">{token.format(stats.treasuryBalance)}</dt>
            <dd className="mt-2 text-base font-medium text-muted-foreground">Treasury Balance</dd>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 dark:bg-orange-950/50">
              <CreditCard className="h-8 w-8 text-orange-600 dark:text-orange-400" aria-hidden="true" />
            </div>
            <dt className="text-4xl font-bold text-orange-600 dark:text-orange-400">{stats.totalLoans}</dt>
            <dd className="mt-2 text-base font-medium text-muted-foreground">Loans Funded</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
