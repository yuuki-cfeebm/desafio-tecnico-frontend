import { Link } from 'react-router'

function ChamadosLista({ chamados, aoExcluir }) {

    function confirmarExclusao(chamado) {
        const confirmacao = window.confirm(
            `Deseja realmente excluir o chamado "${chamado.titulo}"?`
        )

        if (confirmacao) {
            aoExcluir(chamado.id)
        }
    }

    return (
        <main className="pagina-chamados">
            <h1>Lista de Chamados</h1>
            <strong>Dev: Kauã Yanase</strong>
            
            {chamados.length === 0 ? (
                <p className="lista-vazia">Nenhum chamado cadastrado.</p>
            ) : (
                <ul className="lista-chamados">
                    {chamados.map((chamado) => (
                        <li key={chamado.id}>
                            <p>Título: <span>{chamado.titulo}</span></p>
                            <p>Descrição: <span>{chamado.descricao}</span></p>
                            <p>Prioridade: <span>{chamado.prioridade}</span></p>
                            <p>Solicitante: <span>{chamado.solicitante}</span></p>
                            <p>Status: <span>{chamado.status}</span></p>

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

            <Link className='voltar-btn' to="/chamados">Voltar para Gerenciamento de Chamados</Link>
        </main>
    )
}

export default ChamadosLista