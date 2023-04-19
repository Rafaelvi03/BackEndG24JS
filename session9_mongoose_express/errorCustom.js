class CustomError extends Error {
    status;
    constructor(message, status) {
        super(message);
        this.status = status || 400; // Va almavenar el codigo de error, por default tiene 400
    }
}
export { CustomError };


// Creamos un error Mensaje y contiene tambien un status