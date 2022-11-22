const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, hasta = 10, listar = false) =>{

    try {
        if(listar){
            console.log('=================='.green);
            console.log('   Tabla del:'.green, colors.blue(base));
            console.log('=================='.green);
        }
        
        let salida = '';
        let consola = '';

        for (var i = 1; i <= hasta; i++){
            salida  += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }

        if(listar) console.log(consola);
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
};