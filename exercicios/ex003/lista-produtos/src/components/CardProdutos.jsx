import Produtos from './Produtos'
import styles from './CardProdutos.module.css'

function CardProdutos() {
    return (
        <ul className={styles.cardList}>
            <Produtos nome="Teclado Mecânico Pro" preco="399,90" emPromocao={true} imagem="https://i.ibb.co/chmJDMCq/51-Ha-CM8w-Fc-L.jpg" alt="Imagem do Teclado Mecânico Pro" />
            <Produtos nome="Fone Bluetooth X200" preco="249,00" emPromocao={false} imagem="https://i.ibb.co/Z91Kdpm/D-NQ-994864-MLB81255820666-122024-V.webp" alt="Imagem do Fone Bluetooth X200" />
            <Produtos nome="Tênis Esportivo RunFast" preco="329,99" emPromocao={true} imagem="https://i.ibb.co/wNDVTksw/download.jpg" alt="Imagem do Tênis Esportivo RunFast" />
            <Produtos nome="Cafeteira Expresso Mini" preco="499,00" emPromocao={false} imagem="https://i.ibb.co/v6G4CqwY/51-QP72-Lh-To-L-UF894-1000-QL80.jpg" alt="Imagem da Cafeteira Expresso Mini" />
            <Produtos nome="Smartwatch FitLife" preco="699,90" emPromocao={true} imagem="https://i.ibb.co/v4sv4Yk5/sunstech-fitlife-pro-79182-g-alt.jpg" alt="Imagem do Smartwatch FitLife" />
            <Produtos nome="Controle Gamer Pro" preco="279,00" emPromocao={false} imagem="https://i.ibb.co/GfCd48M4/sg-11134201-7rce9-lt0l5kfwqdmn9b.jpg" alt="Imagem do Controle Gamer Pro"/>
            <Produtos nome="Livro: Aprendendo React" preco="89,90" emPromocao={true} imagem="https://i.ibb.co/rRzNHsSB/610-IZVM6aj-L.jpg" alt="Imagem do Livro" />
            <Produtos nome="Panela Antiaderente MasterCook" preco="149,00" emPromocao={false} imagem="https://i.ibb.co/Q3JdZwSv/download.jpg" alt="Imagem da Panela Antiaderente MasterCook" />
        </ul>
    )
}

export default CardProdutos