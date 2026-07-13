import { Outlet } from 'react-router-dom'
import { BottomNavigation } from './BottomNavigation'

export function AppLayout() {
  return (
    <div className="mx-auto flex h-[100dvh] w-full max-w-md flex-col overflow-hidden bg-background">
      <main className="relative flex min-h-0 flex-1 flex-col overflow-hidden pt-[env(safe-area-inset-top)]">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  )
}
