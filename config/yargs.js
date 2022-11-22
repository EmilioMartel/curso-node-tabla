const argv = require('yargs')
                .options({
                    'b':{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        description: 'base de la tabla de multiplicar'
                    },
                    'h':{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: false,
                        default: 10,
                        description: 'límite de la tabla de multiplicar'
                    },
                    'l':{
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false,
                        description: 'muestra la tabla de multiplicar'
                    }

                })
                .check( (argv, options) =>{
                    if( isNaN(argv.b) ){
                        throw 'La base tiene que ser un número';
                    }
                    return true;
                })    
                .argv;

module.exports = argv;