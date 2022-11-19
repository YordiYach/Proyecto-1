keysAndValues({ a: 1, b: 2, c: 3 });
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
keysAndValues({ key1: true, key2: false, key3: undefined });

function keysAndValues(obj) {
    let claves = [];
    let valores = [];
    for (let elemento in obj) {
      claves.push(elemento);
      valores.push(obj[elemento]);
    }

    function orden(a,b){
        return a - b;
    }

    var resultado = [claves.sort(orden), valores.sort(orden)];
    console.log({resultado});
  }

alert("Por favor, revise los resultados en la consola")