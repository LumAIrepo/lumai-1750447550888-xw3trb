```tsx
'use client'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { cn } from '@/lib/utils'

interface WalletConnectButtonProps {
  className?: string
}

export default function WalletConnectButton({ className }: WalletConnectButtonProps) {
  return (
    <WalletMultiButton
      className={cn(
        "!bg-purple-600 hover:!bg-purple-700 !text-white !font-medium !py-2 !px-4 !rounded-lg !transition-colors !duration-200 !border-0 !font-inter",
        "disabled:!bg-gray-300 disabled:!text-gray-500 disabled:!cursor-not-allowed",
        "!text-sm !leading-5",
        className
      )}
    />
  )
}
```