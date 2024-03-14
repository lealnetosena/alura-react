import { AiFillCloseCircle } from 'react-icons/ai'
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (<div className="colaborador">
        <AiFillCloseCircle 
            size={25} 
            className="deletar" 
            onClick={() => aoDeletar}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador

// Sempre que não tem as chaves é import default
// Interatividade
// Declarativa (qual variavel, e qual função)
// Virtual DOM
// Ele precisa para ser mais performatio
// TWO Way Data Binding (Angular, etc, modulos: pai -> filho, ou filho -> pai  ) 
// ONE Way Data Binding (React: Do pai -> filho)
/*
Por que cria-se state?
Por que troca a informação via props?
Por que que ele é declarativo?
Por que que ele é uma biblioteca?
Por que ele é ONE Way Data Binding?
Por que podemos criar novas features criando bloquinhos nos componentes?

*/