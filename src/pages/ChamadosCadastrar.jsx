import { useState } from 'react'
import { Link } from 'react-router' 

function ChamadosCadastrar({ aoCadastrar }) {
    const [erros, setErros] = useState({})
    const [mensagemSucesso, setMensagemSucesso] = useState('')

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [prioridade, setPrioridade] = useState(0)
    const [solicitante, setSolicitante] = useState('')
    const [status, setStatus] = useState('aberto')

    function cadastrarChamado(evento) {
        evento.preventDefault()
        setMensagemSucesso('')

        const novoChamado = {
            titulo: titulo.trim(),
            descricao: descricao.trim(),
            solicitante: solicitante.trim(),
            prioridade: Number(prioridade),
            status: status
        }

        aoCadastrar(novoChamado)
        setMensagemSucesso('Chamado cadastrado com sucesso!')

        setErros({})
        setTitulo('')
        setDescricao('')
        setPrioridade('default')
        setSolicitante('')
        setStatus('fechado')
    }

    return (
        <main className="pagina-chamados">
            <h1>Cadastrar novo chamado</h1>
            <strong>Dev: Kauã Yanase</strong>
            
            {mensagemSucesso && (
                <p className="mensagem-sucesso">
                    {mensagemSucesso}
                </p>
            )}

            <form className="formulario-chamado" onSubmit={cadastrarChamado} noValidate>
                
                <div className="form-cadastro">
                    <div className="wrapper">
                    <label htmlFor="titulo">Título</label>
                    <input
                        id="titulo"
                        type="text"
                        value={titulo}
                        onChange={(evento) => {
                            setTitulo(evento.target.value)
                        }}
                        className={erros.titulo ? 'campo-invalido' : ''}
                        placeholder="Título do Chamado"
                        required
                    />
                </div>

                <div className="wrapper">

                <label htmlFor="descricao">Descrição</label>
                <textarea
                    id="descricao"
                    value={descricao}
                    onChange={(evento) => {
                        setDescricao(evento.target.value)
                    }}
                    className={erros.descricao ? 'campo-invalido' : ''}
                    placeholder="Descreva os detalhes do chamado aqui..."
                    rows="5"
                    required
                />
                </div>

                <div className="wrapper solicitante">

                <label id='solicitante' htmlFor="solicitante">Solicitante do chamado:</label>
                <input
                    id="solicitante"
                    type="text"
                    value={solicitante}
                    onChange={(evento) => {
                        setSolicitante(evento.target.value)
                    }}
                    className={erros.solicitante ? 'campo-invalido' : ''}
                    placeholder="Resumo do chamado"
                    required
                />
                </div>

                <div className="wrapper">
                <label htmlFor="">Proridade:</label>
                <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)} name="" id="prioridade">
                    <option value="default">Selecione a prioridade</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                </div>
                
                <div className="wrapper">   
                <label htmlFor="">Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)} name="status" id="status">
                    <option value="aberto">Aberto</option>
                    <option value="fechado">fechado</option>
                </select>
                </div>
            </div>


                <button className='btn cadastrar-btn' type="submit">Cadastrar chamado</button>
            </form>
            
            <Link className='voltar-btn' to="/chamados">Voltar para Gerenciamento de chamados</Link>
        </main>
    )
}

export default ChamadosCadastrar