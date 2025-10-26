function Filme({titulo, foto, ano, genero, avaliacao, txtalt}){
    let destaque = avaliacao

    if (destaque >= 8){
        destaque = "⭐⭐⭐ Recomendado"
    } else {
        destaque = ""
    }

    return (
        <div>
            <h1>{titulo}</h1>
            <img src={foto} alt={txtalt} />
            <p>Gênero: {genero}</p>
            <p>Ano de Lançamento: {ano}</p>
            <p>Avaliação: {avaliacao}</p>
            <p>{destaque}</p>
        </div>
    )
}

export default Filme