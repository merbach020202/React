import Title from "./Components/Title/Title";
import CardEvento from "./Components/CardEventos/CardEvento";
import "./App.css";
import Container from "./Components/Container/Container";

function App() {
    return (
        <div className="App">
            <h1>Hello world react</h1>
            <Title nome="Eduardo" sobrenome="Brenn"></Title>

            <br />

            <Container>
                <CardEvento
                    titulo="Sql Server"
                    texto="Lorem ipsum dolor ia si ametsu"
                    textoLink="Conectar"
                />

                <CardEvento
                    titulo="JavaScript"
                    texto="Lorem ipsum dolor ia si ametsu"
                    textoLink="Conectar"
                />

                <CardEvento
                    titulo="C Sharp"
                    texto="Lorem ipsum dolor ia si ametsu"
                    textoLink="Conectar"
                />
            </Container>
        </div>
    );
}

export default App;
