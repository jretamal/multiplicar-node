const argv = require('./config/yargs').argv;
const colors = require('colors');

const {
    crearArchivo,
    listarTabla
} = require("./multiplicar/multiplicar");

let comando = argv._[0];

// console.log(argv);

switch (comando) {
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado', colors.green(`${archivo}`)))
            .catch(err => {
                console.log(err);
            });

        break;
    case "listar":
        listarTabla(argv.base, argv.limite)
            .then(listado => console.log(`El listado ha sido creado exitosamente.`))
            .catch(err => {
                console.log(err);
            })
        break;
    default:
        console.log("Comando no reconocido.");
}

// let argv2 = process.argv;

// console.log('Limite', argv.limite);