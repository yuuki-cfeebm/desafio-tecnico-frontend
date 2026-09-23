import { Link } from 'react-router'

function ChamadosLista({ chamados, aoExcluir }) {

    function confirmarExclusao(chamado) {
        const confirmacao = window.confirm(
            `Deseja realmente excluir o chamado "${chamado.texto}"?`
        )

        if (confirmacao) {
            aoExcluir(chamado.id)
        }
    }

    return (
        <main className="pagina-chamados">
            <h1>Lista de Chamados</h1>
            
            {chamados.length === 0 ? (
                <p className="lista-vazia">Nenhum chamado cadastrado.</p>
            ) : (
                <ul className="lista-chamados">
                    {chamados.map((chamado) => (
                        <li key={chamado.id}>
                            <strong>{chamado.texto}</strong>
                            <p className="descricao-chamado">{chamado.descricao}</p>

                            <div className="acoes-chamado">
                                <button
                                    type="button"
                                    className="botao-excluir"
                                    onClick={() => confirmarExclusao(chamado)}
                                >
                                    Excluir
                                </button>
                                <Link
                                    to={`/chamados/editar/${chamado.id}`}
                                    className="botao-alterar"
                                >
                                    Alterar
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <Link to="/chamados">Voltar para Gerenciamento de Chamados</Link>
        </main>
    )
}

export default ChamadosLista