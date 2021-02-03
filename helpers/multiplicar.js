const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 5, lista = false, hasta = 10 ) => {
    console.clear();

    const promesa = new Promise ((resolve, rejact) => {
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} ${'x'} ${i} = ${base * i}\n`);
        }
        if (lista) {

            console.log(salida.rainbow);
        }
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        //console.log(`tabla-${base}.txt creado`);

        (fs)
        ?resolve(`tabla-${base}.txt`.bold)
        :rejact(`Error al guardar txt ${base}`);

    });
    return promesa;
    

}

module.exports = {
    //crearArchivo : crearArchivo Redundante
    crearArchivo
}