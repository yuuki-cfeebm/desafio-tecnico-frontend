import { Link } from "react-router"

function Management() {
    return (
        <div className="pagina-clientes">
            <h1>Painel de Gerenciamento de Chamados</h1>
            <div className="opcoes-chamados">
                <Link to="/chamados/listar">
                    Listar chamados
                </Link>
                <Link to="/chamados/cadastrar">
                    Cadastrar novo chamado
                </Link>
            </div>
            <Link to="/">
                Voltar para a página inicial
            </Link>
        </div>
    )
}

export default Management