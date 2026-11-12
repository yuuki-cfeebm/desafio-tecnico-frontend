import { Link, useNavigate, useParams } from 'react-router'
import FormChamado from '../components/FormChamado'

function ChamadoEditar({ chamados, aoAlterar }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const chamadoEncontrado = chamados.find(
    (chamado) => chamado.id === Number(id)
  )

  function alterarChamado(dados) {
    aoAlterar({ id: Number(id), ...dados })
    navigate('/chamados/listar')
  }

  if (!chamadoEncontrado) {
    return (
      <section className="pagina">
        <div className="estado-vazio">
          <h2>Chamado não encontrado</h2>
          <p>O chamado que você procura não existe ou foi excluído.</p>
          <Link className="btn btn-primario" to="/chamados/listar">
            Voltar para a lista
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="pagina">
      <div className="pagina-topo">
        <div>
          <h1>Editar chamado</h1>
          <p className="subtitulo">Altere as informações e salve.</p>
        </div>
      </div>

      <div className="painel">
        <FormChamado
          valoresIniciais={chamadoEncontrado}
          textoBotao="Salvar alterações"
          aoEnviar={alterarChamado}
          acoesExtras={<Link className="btn btn-secundario" to="/chamados/listar">Cancelar</Link>}
        />
      </div>
    </section>
  )
}

export default ChamadoEditar
