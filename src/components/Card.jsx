import { Link } from "react-router"

function Card({ titulo, descricao, rota, icone }) {

  const conteudoCard = (
    <article className="card-modulo">
      {icone && <span className="card-icone">{icone}</span>}
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      {rota && <span className="card-seta">Acessar →</span>}
    </article>
  )

  if(rota){
    return (
      <Link to={rota} className="link-card">
        {conteudoCard}
      </Link>
    )
  }

  return conteudoCard
}
export default Card
