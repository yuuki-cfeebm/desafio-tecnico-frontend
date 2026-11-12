import './App.css'
import { Route, Routes } from 'react-router'
import { useState } from 'react'
import Management from './pages/Management'
import Layout from './components/Layout'
import Card from './components/Card'
import ChamadosCadastrar from './pages/ChamadosCadastrar'
import ChamadosLista from './pages/ChamadosLista'
import ChamadoEditar from './pages/ChamadosEditar'

const chamadosIniciais = []

const modulos = [
  {
    id: 1,
    icone: '🛠️',
    titulo: 'Gerenciamento de Chamados',
    descricao: 'Cadastre, consulte, edite e exclua chamados.',
    rota: '/chamados'
  }
]

function Inicio() {
  return (
    <section className="pagina">
      <div className="hero">
        <h1>Sistema de Gestão de Chamados</h1>
        <p className="subtitulo">Organize e acompanhe as solicitações em um só lugar.</p>
      </div>
      <div className="grade-cards">
        {modulos.map((modulo) => (
          <Card
            key={modulo.id}
            icone={modulo.icone}
            titulo={modulo.titulo}
            descricao={modulo.descricao}
            rota={modulo.rota}
          />
        ))}
      </div>
    </section>
  )
}

function App() {
  const [chamados, setChamados] = useState(chamadosIniciais)

  function adicionarChamado(novoChamado) {
    const chamadoComId = {
      id: Date.now(),
      ...novoChamado,
    }
    setChamados((listaAtual) => [
      ...listaAtual,
      chamadoComId,
    ])
  }

  function excluirChamado(id) {
    setChamados((listaAtual) =>
      listaAtual.filter((chamado) => chamado.id !== id)
    )
  }

  function alterarChamado(chamadoAtualizado) {
    setChamados((listaAtual) =>
      listaAtual.map((chamado) =>
        chamado.id === chamadoAtualizado.id
          ? chamadoAtualizado
          : chamado
      )
    )
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/chamados" element={<Management />} />
        <Route path="/chamados/cadastrar" element={<ChamadosCadastrar aoCadastrar={adicionarChamado} />} />
        <Route path="/chamados/listar" element={<ChamadosLista chamados={chamados} aoExcluir={excluirChamado} />} />
        <Route path="/chamados/editar/:id" element={<ChamadoEditar chamados={chamados} aoAlterar={alterarChamado} />} />
      </Route>
    </Routes>
  )
}

export default App
