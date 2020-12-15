const colors=require("colors")
const fs=require("fs")
const argv=require("./config/yargs").argv_variable.argv

let comando = argv._[0];

switch (comando) {
    case 'listar':
        ImprimirFactorial(argv.limite)
        break;
    case 'crear':
        CrearExcel(argv.limite)
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
function ImprimirFactorial(limite){
        console.log("TABLA DE FACTORIAL DE LIMITE "+limite+"".green)
    for (let index = 1; index <= limite; index++) {
        let lista_de_numeros=[...new Array(index+1).keys()].filter(item=>item!=0)
        let resultadototal=lista_de_numeros.reduce((total, num) => total * num);
        console.log(`${index}! ${lista_de_numeros.join(" X ").toString()} = ${resultadototal}`.magenta)
    }
}
function CrearExcel(limite){
    let FILAPRINCIPAL_NOMBRE_DE_COLUMNAS="INDICE"+"\t"+" NUMEROS QUE MULTIPLICARAN"+"\t"+"RESULTADO"+"\n";
    fs.appendFile("tabla_excel_creado.xls",FILAPRINCIPAL_NOMBRE_DE_COLUMNAS,err=>{if(err)console.log(err)})
        for (let index = 1; index <= limite; index++) {
            let lista_de_numeros=[...new Array(index+1).keys()].filter(item=>item!=0);
            let resultadototal=lista_de_numeros.reduce((total, num) => total * num);
            let cadena_resultado =index+"\t"+lista_de_numeros.join(" X ").toString()+"\t"+resultadototal+"\n"
            fs.appendFile("tabla_excel_creado.xls",cadena_resultado,(err)=>{if (err) console.log(err)})
        }
        console.log("SE CREO CORRECTAMENTE EL ARCHIVO EXCEL ".red)
}