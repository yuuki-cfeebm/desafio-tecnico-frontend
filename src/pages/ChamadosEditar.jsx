import { useState } from 'react'
import { Link, useParams } from 'react-router'

function ChamadoEditar({ chamados, aoAlterar }) {

  const { id } = useParams()

  const chamadoEncontrado = chamados.find(
    (chamado) => chamado.id === Number(id)
  )

  const [titulo, setTitulo] = useState(chamadoEncontrado?.titulo ?? '')
  const [descricao, setDescricao] = useState(chamadoEncontrado?.descricao ?? '')
  const [prioridade, setPrioridade] = useState(chamadoEncontrado?.prioridade ?? '')
  const [solicitante, setSolicitante] = useState(chamadoEncontrado?.solicitante ?? '')
  const [status, setStatus] = useState(chamadoEncontrado?.status ?? '')

  function alterarChamado(evento) {
    evento.preventDefault()

    const chamadoAtualizado = {
      id: Number(id),
      titulo,
      descricao,
      prioridade,
      solicitante,
      status
    }

    aoAlterar(chamadoAtualizado)
    alert('Chamado alterado com sucesso!')
  }

  if (!chamadoEncontrado) {
    return (
      <main className="pagina-chamados">
        <h1>Chamado não encontrado</h1>
        <strong>Dev: Kauã Yanase</strong>

        <Link
          className="voltar-btn"
          to="/chamados/listar"
        >
          Voltar para a lista de chamados
        </Link>
      </main>
    )
  }

  return (
    <main className="pagina-chamados">

      <h1>Alterar chamado</h1>

      <strong>Dev: Kauã Yanase</strong>

      <form
        className="formulario-chamado form-cadastro"
        onSubmit={alterarChamado}
      >

        <div className="wrapper">
          <label htmlFor="titulo">
            Título
          </label>

          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
            required
          />
        </div>

        <div className="wrapper">
          <label htmlFor="descricao">
            Descrição
          </label>

          <textarea
            id="descricao"
            value={descricao}
            onChange={(evento) => setDescricao(evento.target.value)}
            rows="5"
            required
          />
        </div>

        <div className="wrapper">
          <label htmlFor="solicitante">
            Solicitante do chamado:
          </label>

          <input
            id="solicitante"
            type="text"
            value={solicitante}
            onChange={(evento) => setSolicitante(evento.target.value)}
            placeholder="Resumo do chamado"
            required
          />
        </div>

        <div className="wrapper">
          <label htmlFor="prioridade">
            Prioridade
          </label>

          <select
            value={prioridade}
            onChange={(evento) => setPrioridade(evento.target.value)}
            id="prioridade"
            required
          >
            <option value="">
              Selecione a prioridade
            </option>

            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <div className="wrapper">
          <label htmlFor="status">
            Status
          </label>

          <select
            value={status}
            onChange={(evento) => setStatus(evento.target.value)}
            name="status"
            id="status"
            required
          >
            <option value="aberto">
              Aberto
            </option>

            <option value="fechado">
              Fechado
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="btn"
        >
          Salvar alterações
        </button>

      </form>

      <Link
        className="voltar-btn"
        to="/chamados/listar"
      >
        Voltar para a lista de chamados
      </Link>

    </main>
  )
}

export default ChamadoEditar