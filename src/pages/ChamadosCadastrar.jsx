import { useState } from 'react'
import { Link } from 'react-router' 

function ChamadosCadastrar({ aoCadastrar, chamados }) {
    const [erros, setErros] = useState({})
    const [mensagemSucesso, setMensagemSucesso] = useState('')

    // Novos estados focados apenas no Chamado
    const [texto, setTexto] = useState('')
    const [descricao, setDescricao] = useState('')

    function validarFormulario() {
        const novosErros = {}
        const textoTratado = texto.trim()
        const descricaoTratada = descricao.trim()

        if (textoTratado.length < 5) {
            novosErros.texto = 'O texto (assunto) deve possuir no mínimo 5 caracteres.'
        }

        if (descricaoTratada.length < 10) {
            novosErros.descricao = 'A descrição deve possuir no mínimo 10 caracteres para detalhar o problema.'
        }

        setErros(novosErros)
        return Object.keys(novosErros).length === 0
    }

    function limparErro(campo) {
        setErros((errosAtuais) => ({
            ...errosAtuais,
            [campo]: '',
        }))
        setMensagemSucesso('')
    }

    function cadastrarChamado(evento) {
        evento.preventDefault()
        setMensagemSucesso('')
        
        if (!validarFormulario()) {
            return
        }

        // Cria o objeto apenas com os dados do chamado
        const novoChamado = {
            texto: texto.trim(),
            descricao: descricao.trim(),
        }

        aoCadastrar(novoChamado)
        setMensagemSucesso('Chamado cadastrado com sucesso!')
        setErros({})
        setTexto('')
        setDescricao('')
    }

    return (
        <main className="pagina-chamados">
            <h1>Cadastrar novo chamado</h1>
            
            {mensagemSucesso && (
                <p className="mensagem-sucesso">
                    {mensagemSucesso}
                </p>
            )}

            <form className="formulario-chamado" onSubmit={cadastrarChamado} noValidate>
                
                <label htmlFor="texto">Texto / Assunto</label>
                <input
                    id="texto"
                    type="text"
                    value={texto}
                    onChange={(evento) => {
                        setTexto(evento.target.value)
                        limparErro('texto')
                    }}
                    className={erros.texto ? 'campo-invalido' : ''}
                    placeholder="Resumo do chamado"
                    required
                />
                {erros.texto && (
                    <span className="mensagem-erro">
                        {erros.texto}
                    </span>
                )}

                <label htmlFor="descricao">Descrição</label>
                {/* Utilizando textarea por ser melhor para descrições longas */}
                <textarea
                    id="descricao"
                    value={descricao}
                    onChange={(evento) => {
                        setDescricao(evento.target.value)
                        limparErro('descricao')
                    }}
                    className={erros.descricao ? 'campo-invalido' : ''}
                    placeholder="Descreva os detalhes do chamado aqui..."
                    rows="5"
                    required
                />
                {erros.descricao && (
                    <span className="mensagem-erro">
                        {erros.descricao}
                    </span>
                )}

                <button type="submit">Cadastrar chamado</button>
            </form>
            
            <Link to="/chamados">Voltar para Gerenciamento de chamados</Link>
        </main>
    )
}

export default ChamadosCadastrar