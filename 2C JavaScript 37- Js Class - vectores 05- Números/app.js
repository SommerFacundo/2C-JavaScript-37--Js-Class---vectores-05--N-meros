class CNumber{
    constructor(num){
        this.num = num;
    }

    esPrimo() {
        let band = true;
        for(let i = 2; i < this.num;i++ ){
            if(this.num%i == 0){
                band = false;
            }
        }
        return (band) ? "Si" : "No";
    }
    esPerfecto(){
        let acum = 0;
        for (let i = 1; i < this.num; i++) {
            if(this.num%i == 0){
                acum += i;
            }
        }
        console.log(acum)
        return (acum == this.num) ? "Si" : "No";
    }
    ParImpar(){
        return (this.num%2 === 0) ? "Par" : "Impar";
    }
    get obtenerDatos(){
        return {
            "Numero" : this.num,
            "EsPrimo": this.esPrimo(),
            "EsPerfecto": this.esPerfecto(),
            "Par/Impar": this.ParImpar()
        }
    }
}

function añadirNum(n){num.push(new CNumber(n))}

//FUNCION CREADA PARA CREAR TABLAS AUTOMATICAMENTE Y AHORRAR LA PARTE MAS ABURRIDA JIJI
function crearTabla(id_Contenedor,nombreTabla,objectCantHeader,arrInfo){
    let cont = document.getElementById(id_Contenedor)
    cont.innerHTML = "";
    let p = document.createElement("h2");
    p.innerHTML = nombreTabla;
    cont.appendChild(p)
    let table = document.createElement("table");
    table.setAttribute("border","1")
    let valores = Object.values(objectCantHeader);
    let trTh = document.createElement("tr");
    for (const v of valores) {
        let th = document.createElement("th");
        th.innerHTML = v;
        trTh.appendChild(th)        
    }
    table.appendChild(trTh)
    while (table.rows.length > 1) {
        cont.deleteRow(1);
    }
    for (const a of arrInfo) {
        let datos = a.obtenerDatos;
        let tr = document.createElement("tr")
        datos = Object.values(datos);
        console.log(datos)
        for (const val of datos) {
            
            let td = document.createElement("td");
            td.innerHTML = val;
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    cont.appendChild(table)
    console.log(table)
}
let num = [];
document.getElementById("btn").addEventListener("click",()=>{
    event.preventDefault();
    let numero = parseInt(document.getElementById("num").value);
    añadirNum(numero);
})
document.getElementById("mostrar").addEventListener("click",()=>{
    event.preventDefault();
    crearTabla("contenedorRes","RESULTADOS",{1:"Numero",2:"Primo",3:"Perfecto",4:"Par/Impar"},num)

})