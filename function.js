$(function(){

	//Funções de abrir e fechar formulário

	abrirJanela();
	verificarCliqueFechar();


	function abrirJanela(){
		$('.btn').click(function(e){
			e.stopPropagation();
			$('.bg').fadeIn();
		})

	}

	function verificarCliqueFechar(){

		var el = $('body,.closeBtn');

		el.click(function(){
			$('.bg').fadeOut();
		})

		$('.form').click(function(e){
			e.stopPropagation();
		})
	}

	//Eventos do formulario

	$('input[type=text]').focus(function(){
		resertarCampoInvalido($(this));
	})

	$('form#form1').submit(function(e){
		e.preventDefault();
		var nome = $('input[name=nome]').val();
		var telefone = $('input[name=telefone]').val();
		var email = $('input[name=email]').val();

		if(verificarNome(nome) == false){
			aplicarCampoInvalido($('input[name=nome]'));
		}else if(verificarTelefone() == false){
			aplicarCampoInvalido($('input[name=telefone]'));
		}else if(verificarEmail() == false){
			aplicarCampoInvalido($('input[name=email]'));

		}


		else{
			alert("Formulario enviado com sucesso!");
		}
		

		//Se chegou ate aqui, esta tudo okay
	})

	//Funçoes para estilizar o campo do formulario

	function aplicarCampoInvalido(el){
		el.css('color','red');
		el.css('border','2px solid red');
		//el.data('invalido','true');
		el.val('Campo Inválido!');
	}

	function resertarCampoInvalido(el){
		el.css('color','#ccc');
		el.css('border','1px solid #ccc');
		el.val('');
	}

	//Funçoes para verificar nossos campos
		function verificarNome(nome){
		//Contando a quantidade de espaço e os respectivos valores
		if(nome == ''){
			return false;
		}
		var amount = nome.split(' ').length;
		var splitStr = nome.split(' ');
		if(amount >= 2){
			for(var i = 0; i < amount; i++){
				if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){

				}else{
					return false;
				}
			}
		}else{
			return false;
		}
	}

		function verificarTelefone(telefone){
			if(telefone ==''){
				return false;
			}
			
			if(telefone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/)== null){
				return false;
			}
    }

		function verificarEmail(email){
			if(email == '')
				return false

			if(email.match(/^([a-z0-9-_]{1,})+@+([a-z.]{1,})$/) == null){
				return false;
			}
		}

});