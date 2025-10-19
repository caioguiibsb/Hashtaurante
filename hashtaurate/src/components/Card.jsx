

const Card = (props) => {
    return (
        <div className="card">
            <div className="card__textos">
                <div className="card__titulo">
                    <h2>{props.titulo}</h2>
                    <p>{props.descricao}</p>
                    <p className="card__preco">{props.preco}</p>
                </div>
            </div>

            <div className="card__img">
                <img src={props.imagem} alt="Foto do Produto" />
            </div>
        </div>
    );
};

export default Card;