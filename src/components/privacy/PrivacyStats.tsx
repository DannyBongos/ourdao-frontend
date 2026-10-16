'use client'

import { ShieldCheckIcon } from '@/lib/icons'
import { useTreasuryProposals } from '@/hooks/useDAO'
import { LoadError } from '@/components/LoadError'

export function PrivacyStats() {
  const { proposals, isLoading, isError, refetch } = useTreasuryProposals()

  const privateCount = proposals.filter((p) => p.isPrivate).length
  const publicCount = proposals.length - privateCount

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <ShieldCheckIcon className="h-5 w-5 text-muted-foreground" />
        Treasury proposal privacy, DAO-wide
      </h3>
      {isLoading ? (
        <p className="text-sm text-muted-foreground">Loading…</p>
      ) : isError ? (
        <LoadError what="treasury proposal privacy counts" onRetry={refetch} />
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{privateCount}</div>
            <div className="text-sm text-muted-foreground">Private proposals</div>
            <p className="text-xs text-muted-foreground mt-1">Unvotable until commit/reveal UI ships.</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">{publicCount}</div>
            <div className="text-sm text-muted-foreground">Public proposals</div>
          </div>
        </div>
      )}
    </div>
  )
}
