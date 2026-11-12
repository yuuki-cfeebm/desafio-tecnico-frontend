import { useState } from 'react'

const valoresVazios = {
  titulo: '',
  descricao: '',
  solicitante: '',
  prioridade: '',
  status: 'aberto',
}

function validar(valores) {
  const erros = {}
  if (!valores.titulo.trim()) erros.titulo = 'Informe o título.'
  if (!valores.descricao.trim()) erros.descricao = 'Informe a descrição.'
  if (!valores.solicitante.trim()) erros.solicitante = 'Informe o solicitante.'
  if (!valores.prioridade) erros.prioridade = 'Selecione a prioridade.'
  return erros
}

function FormChamado({ valoresIniciais, textoBotao, aoEnviar, limparAposEnviar = false, acoesExtras }) {
  const [valores, setValores] = useState({
    ...valoresVazios,
    ...valoresIniciais,
    prioridade: valoresIniciais?.prioridade ? String(valoresIniciais.prioridade) : '',
  })
  const [erros, setErros] = useState({})

  function alterarCampo(evento) {
    const { name, value } = evento.target
    setValores((atual) => ({ ...atual, [name]: value }))
    if (erros[name]) setErros((atual) => ({ ...atual, [name]: undefined }))
  }

  function enviar(evento) {
    evento.preventDefault()
    const novosErros = validar(valores)
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) return

    aoEnviar({
      titulo: valores.titulo.trim(),
      descricao: valores.descricao.trim(),
      solicitante: valores.solicitante.trim(),
      prioridade: Number(valores.prioridade),
      status: valores.status,
    })

    if (limparAposEnviar) setValores(valoresVazios)
  }

  function campoClasse(nome) {
    return erros[nome] ? 'campo-invalido' : ''
  }

  return (
    <form className="formulario-chamado" onSubmit={enviar} noValidate>
      <div className="campo">
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          name="titulo"
          type="text"
          value={valores.titulo}
          onChange={alterarCampo}
          className={campoClasse('titulo')}
          placeholder="Ex.: Impressora não liga"
        />
        {erros.titulo && <span className="erro">{erros.titulo}</span>}
      </div>

      <div className="campo">
        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          value={valores.descricao}
          onChange={alterarCampo}
          className={campoClasse('descricao')}
          placeholder="Descreva os detalhes do chamado..."
          rows="4"
        />
        {erros.descricao && <span className="erro">{erros.descricao}</span>}
      </div>

      <div className="campo">
        <label htmlFor="solicitante">Solicitante</label>
        <input
          id="solicitante"
          name="solicitante"
          type="text"
          value={valores.solicitante}
          onChange={alterarCampo}
          className={campoClasse('solicitante')}
          placeholder="Nome de quem abriu o chamado"
        />
        {erros.solicitante && <span className="erro">{erros.solicitante}</span>}
      </div>

      <div className="campos-linha">
        <div className="campo">
          <label htmlFor="prioridade">Prioridade</label>
          <select
            id="prioridade"
            name="prioridade"
            value={valores.prioridade}
            onChange={alterarCampo}
            className={campoClasse('prioridade')}
          >
            <option value="">Selecione...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {erros.prioridade && <span className="erro">{erros.prioridade}</span>}
        </div>

        <div className="campo">
          <label htmlFor="status">Status</label>
          <select id="status" name="status" value={valores.status} onChange={alterarCampo}>
            <option value="aberto">Aberto</option>
            <option value="fechado">Fechado</option>
          </select>
        </div>
      </div>

      <div className="form-acoes">
        {acoesExtras}
        <button className="btn btn-primario" type="submit">{textoBotao}</button>
      </div>
    </form>
  )
}

export default FormChamado
