import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <h1>Cabeçalho</h1>
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
