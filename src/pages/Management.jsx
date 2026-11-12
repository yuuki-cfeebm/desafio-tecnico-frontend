import Card from "../components/Card"

function Management() {
    return (
        <section className="pagina">
            <div className="pagina-topo">
                <div>
                    <h1>Gerenciamento de Chamados</h1>
                    <p className="subtitulo">O que você deseja fazer?</p>
                </div>
            </div>
            <div className="grade-cards">
                <Card
                    icone="📋"
                    titulo="Listar chamados"
                    descricao="Consulte, edite ou exclua os chamados cadastrados."
                    rota="/chamados/listar"
                />
                <Card
                    icone="➕"
                    titulo="Novo chamado"
                    descricao="Abra um novo chamado preenchendo o formulário."
                    rota="/chamados/cadastrar"
                />
            </div>
        </section>
    )
}

export default Management
