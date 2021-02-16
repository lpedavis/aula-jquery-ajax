function consultar(){
	let cep = document.querySelector("#cep").value
	let url = "https://viacep.com.br/ws/"+ cep +"/json/";
	console.log(url)
	$.ajax({
		url: url,
		type: "GET", 
		success: function (response){
			$("#titulo").html("CEP" + cep)
		$("#logradouro").html(response.logradouro);
		$("#bairro").html(response.bairro);
		$("#localidade").html(response.localidade);	
		$("#uf").html(response.uf);
		$("#ddd").html(response.ddd)
		//document.querySelector("#logradouro").innerHTML= response.logradouro;
		//document.querySelector("#bairro").innerHTML= response.bairro;
		//document.querySelector("#localidade").innerHTML= response.localidade;
		//document.querySelector("#uf").innerHTML= response.uf;
		//document.querySelector("#ddd").innerHTML= response.ddd;


			console.log(response)
			//alert(response.logradouro)
		}
	})
}
