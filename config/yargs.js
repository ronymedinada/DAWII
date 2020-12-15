const argv_variable = require('yargs')

const opts = {
    limite: {
        alias: 'l',
        default: 1,
        describe:"Indica el limite de los numeros factoriales"
    }
}
argv_variable
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help().argv
    


module.exports = {
    argv_variable
}