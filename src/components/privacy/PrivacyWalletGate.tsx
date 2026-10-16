'use client'

import { useUserData } from '@/hooks/useDAO'
import { ExclamationTriangleIcon } from '@/lib/icons'

export function PrivacyWalletGate({ children }: { children: React.ReactNode }) {
  const userData = useUserData()

  if (!userData.isConnected) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="bg-card rounded-lg p-6 text-center">
          <ExclamationTriangleIcon className="h-12 w-12 text-yellow-500 dark:text-yellow-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Wallet Not Connected
          </h2>
          <p className="text-muted-foreground">
            Please connect your wallet to view privacy features.
          </p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
