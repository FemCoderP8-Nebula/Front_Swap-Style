import MessageModal from "../../components/organisms/ModalMessage/MessageModal";
import checkGif from "../../assets/CheckButton.gif"

const CheckModal = () => {
    return (
        <main>
            <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Pruebas de Modales</h3>

            {/* Modal para Usuario Registrado ok -> Activar al pulsar boton REGISTER en el Form de Registro usuario */}
            {/* <MessageModal 
                image={checkGif}
                message="User Registered Successfully"
                btnText="Login"
                btnPath="/home/login"
                btnClass="liquid"
            /> */}

            {/* Modal para Articulo Registrado ok -> Activar al pulsar boton ADD en el Form de registro de articulo*/}
            {/* <MessageModal
                image={checkGif}
                message="Article Created Successfully"
                btnText="Back"
                btnPath="/home/wardrobe"
                btnClass="liquid"
            /> */}

            {/* Modal para email de contacto realizado con exito -> Activara al pulsar boton SEND de Form contacto */}
            {/* <MessageModal
                image={checkGif}
                message="Your message has been sent."
                btnText="Back"
                btnPath="/home"
                btnClass="liquid" */}
           //

            {/* Modal para articulo reservado con exito -> Activara al pulsar el boton BOOK en el detalle del Articulo */}
            {/* <MessageModal
                image={checkGif}
                message="Article Reserved Successfully"
                btnText="Back"
                btnPath="/home/gallery"
                btnClass="liquid"
            /> */}

            {/* MOdal para reserva cancela con exito -> Activara al pular el booton BOOKED por el mismo usuario que reservo*/}
            {/* <MessageModal
                image={checkGif}
                message="Article Cancelled Successfully"
                btnText="Back"
                btnPath="/home/info"
                btnClass="liquid"
            /> */}


        </main>
    );
};

export default CheckModal;