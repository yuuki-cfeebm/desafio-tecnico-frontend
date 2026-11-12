import { Outlet } from 'react-router'
import Header from './Header'

function Layout() {
  return (
    <div className="aplicacao">
      <Header />
      <main className="conteudo-principal">
        <Outlet />
      </main>
      <footer className="rodape">Dev: Kauã Yanase</footer>
    </div>
  )
}

export default Layout
