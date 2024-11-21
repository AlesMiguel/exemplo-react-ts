import './style.css';

type TCard = {
    img: string;
    nome: string;
    desc: string;
    preco: string;
}

export default function Card({img, nome, desc, preco}: TCard) {
  return (
    <div className='card bg-dark text-white d-flex flex-column'>
        <img src={img} alt={nome} />

        <div className='other'>
            <div className="d-flex flex-row items-center align-items-lg-center gap-5">
                <h3>{nome}</h3>
                <span>{preco}</span>
            </div>
            <p>{desc}</p>
        </div>
    </div>
  )
}