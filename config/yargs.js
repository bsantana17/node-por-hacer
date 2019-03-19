const descripcion = {
    alias: 'd',
    demand: true
};

const completado = {
    alias: 'c',
    default:true,
    desc: 'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
                .command('crear', 'Crea una tarea', {
                    descripcion
                })
                .command('actualizar', 'actualiza una tarea', {
                    descripcion,
                    completado
                })
                .command('borrar', 'borra una tarea', {
                    descripcion
                })
                .help()
                .argv;

module.exports = {
    argv
}