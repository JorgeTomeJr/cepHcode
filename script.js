const cep = document.querySelector('#cep')//seleciona input cep

const showData = (result)=>{//objeto resultado da requisicao da api
    for(const campo in result){//for in para deixar dinamico a inserção dos input
        if(document.querySelector("#"+campo)){//SELECIONANDO NO DOCUMENTO HTML TODO SE TEM O ID IGUAL AO DA CHAVE DO OBJETO (PROPRIEDADE:VALOR)
            document.querySelector("#"+campo).value = result[campo]//seleciona o id e inseri a chave e valor que esta vindo da api
        }
    }
}

cep.addEventListener('blur', (e)=>{//
    let search = cep.value.replace("-",'')
    const options = {
        method:'GET',
        mode:'cors',
        cache:'default'
    }
    
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then( response => { response.json() 
        .then( data=> {showData(data)})
    })
    .catch(e=> console.log("Deu erro"+e))
})