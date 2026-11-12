import { useState } from 'react'
import { Link } from 'react-router'
import FormChamado from '../components/FormChamado'

function ChamadosCadastrar({ aoCadastrar }) {
    const [mensagemSucesso, setMensagemSucesso] = useState('')

    function cadastrarChamado(novoChamado) {
        aoCadastrar(novoChamado)
        setMensagemSucesso(`Chamado "${novoChamado.titulo}" cadastrado com sucesso!`)
    }

    return (
        <section className="pagina">
            <div className="pagina-topo">
                <div>
                    <h1>Novo chamado</h1>
                    <p className="subtitulo">Preencha os dados abaixo para abrir um chamado.</p>
                </div>
            </div>

            {mensagemSucesso && (
                <div className="alerta alerta-sucesso">
                    <span>{mensagemSucesso}</span>
                    <Link to="/chamados/listar">Ver lista →</Link>
                </div>
            )}

            <div className="painel">
                <FormChamado
                    textoBotao="Cadastrar chamado"
                    aoEnviar={cadastrarChamado}
                    limparAposEnviar
                    acoesExtras={<Link className="btn btn-secundario" to="/chamados">Cancelar</Link>}
                />
            </div>
        </section>
    )
}

export default ChamadosCadastrar
