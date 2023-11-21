import React from "react";
import './EventosPage.css'
import Title from '../../Components/Titulo/Title';

const EventosPage = () => {
    
    const [frmEdit, setFrmEdit] = useState(false); //Está em modo de edição?
    const [titulo, setTitulo] = useState("");
    const [idEvento, setIdEvento] = useState(null) //para editar, por causa do evento!
    const [eventos, setEventos] = useState([]); //array
    const [notifyUser, setNotifyUser] = useState(); //Componente Notification
    const [showSpinner, setShowSpinner] = useState(false); //Spinner Loading

    useEffect(() => {
        async function loadEventsType() {
            setShowSpinner(true)
            try {
                const retorno = await api.get(eventsTypeResource);
                setEventos(retorno.data);
                console.log(retorno.data);
            } catch (error) {
                console.log("Erro na Api");
                console.log(error);
            }

            setShowSpinner(false)
        }
        loadEventsType();
    }, []);






    return (

        <div>
            <Title 
            titleText="Eventos Page"
            potatoClass='margem-acima'
            />
        </div>
    );
};

export default EventosPage;