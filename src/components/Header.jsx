import { NavLink } from 'react-router'

function Header() {
	return (
		<header className="cabecalho">
			<div className="cabecalho-conteudo">
				<NavLink to="/" className="logo">
					<span className="logo-icone">✓</span>
					Gestão de Chamados
				</NavLink>
				<nav className="menu">
					<NavLink to="/" end>Início</NavLink>
					<NavLink to="/chamados/listar">Chamados</NavLink>
					<NavLink to="/chamados/cadastrar" className="menu-destaque">+ Novo chamado</NavLink>
				</nav>
			</div>
		</header>
	)
}
export default Header
