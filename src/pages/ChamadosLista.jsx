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
        <section className="pagina">
            <div className="pagina-topo">
                <div>
                    <h1>Chamados</h1>
                    <p className="subtitulo">
                        {chamados.length === 1 ? '1 chamado cadastrado' : `${chamados.length} chamados cadastrados`}
                    </p>
                </div>
                <Link className="btn btn-primario" to="/chamados/cadastrar">+ Novo chamado</Link>
            </div>

            {chamados.length === 0 ? (
                <div className="estado-vazio">
                    <h2>Nenhum chamado ainda</h2>
                    <p>Quando você cadastrar um chamado, ele aparecerá aqui.</p>
                    <Link className="btn btn-primario" to="/chamados/cadastrar">Cadastrar primeiro chamado</Link>
                </div>
            ) : (
                <ul className="lista-chamados">
                    {chamados.map((chamado) => (
                        <li key={chamado.id} className="item-chamado">
                            <div className="item-topo">
                                <h3>{chamado.titulo}</h3>
                                <span className={`badge badge-${chamado.status}`}>
                                    {chamado.status === 'aberto' ? 'Aberto' : 'Fechado'}
                                </span>
                            </div>

                            <p className="item-descricao">{chamado.descricao}</p>

                            <div className="item-meta">
                                <span><b>Solicitante:</b> {chamado.solicitante}</span>
                                <span><b>Prioridade:</b> {chamado.prioridade}</span>
                            </div>

                            <div className="item-acoes">
                                <Link
                                    to={`/chamados/editar/${chamado.id}`}
                                    className="btn btn-secundario"
                                >
                                    Editar
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-perigo"
                                    onClick={() => confirmarExclusao(chamado)}
                                >
                                    Excluir
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}

export default ChamadosLista
