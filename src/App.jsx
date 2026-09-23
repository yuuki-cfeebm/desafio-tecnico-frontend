import './App.css'
import { Route, Routes } from 'react-router'
import { useState } from 'react'
import Management from './pages/Management'
import Header from './components/Header'
import Card from './components/Card'
import ChamadosCadastrar from './pages/ChamadosCadastrar'
import ChamadosLista from './pages/ChamadosLista'
import ChamadoEditar from './pages/ChamadosEditar'

const chamadosIniciais = []

function App() {

  const modulos = [
    {
      id: 1,
      titulo: 'Gerenciamento de Chamados',
      descricao: 'Cadastre e consulte os chamados.',
      rota: "/chamados"
    }
  ]

  // Estado atualizado de 'clientes' para 'chamados'
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
      <Route  
        path='/'
        element={
          <div className="aplicacao">
            <Header />
            <main className="conteudo-principal">
              <p className="introducao">
              Aplicação desenvolvida por Kauã Yanase
              </p>

                <section className="modulos">
                {modulos.map((modulo) => (
                  <Card
                    key={modulo.id}
                    titulo={modulo.titulo}
                    descricao={modulo.descricao}
                    rota={modulo.rota}
                  />
                ))}

              </section>
            </main>
          </div>
        }
      />
      
      <Route path="/chamados" element={<Management />} />
      <Route path="/chamados/cadastrar" element={<ChamadosCadastrar aoCadastrar={adicionarChamado} chamados={chamados}/>} />
      <Route path="/chamados/listar" element={<ChamadosLista chamados={chamados} aoExcluir={excluirChamado} />} />
      <Route path="/chamados/editar/:id" element={<ChamadoEditar chamados={chamados} aoAlterar={alterarChamado} />}/>
    </Routes>
  )
}

export default App