import { useState } from 'react'
import { Link, useParams } from 'react-router'

function ChamadoEditar({ chamados, aoAlterar }) {

  const { id } = useParams()

  const chamadoEncontrado = chamados.find(
    (chamado) => chamado.id === Number(id)
  )

  const [texto, setTexto] = useState(chamadoEncontrado?.texto ?? '')
  const [descricao, setDescricao] = useState(chamadoEncontrado?.descricao ?? '')

  function alterarChamado(evento) {
    evento.preventDefault()
    
    const chamadoAtualizado = {
      id: Number(id),
      texto,
      descricao,
    }
    
    aoAlterar(chamadoAtualizado)
    alert('Chamado alterado com sucesso!')
  }

  if (!chamadoEncontrado) {
    return (
      <main className="pagina-chamados">
        <h1>Chamado não encontrado</h1>

        <Link to="/chamados/listar">
          Voltar para a lista de chamados
        </Link>
      </main>
    )
  }

  return (
    <main className="pagina-chamados">
      <h1>Alterar chamado</h1>
      
      <form
        className="formulario-chamado"
        onSubmit={alterarChamado}
      >
        <label htmlFor="texto">Texto / Assunto</label>
        <input
          id="texto"
          type="text"
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
          required
        />
        
        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          rows="5"
          required
        />
        
        <button type="submit">
          Salvar alterações
        </button>
      </form>
      
      <Link to="/chamados/listar">
        Voltar para a lista de chamados
      </Link>
    </main>
  )
}

export default ChamadoEditar