$(document).ready(function() {
	//Меню бургер
	const menuIcon=document.querySelector('.header-menu-icon')
	if(menuIcon){
		const menuBody=document.querySelector('.header__menu');
		menuIcon.addEventListener('click', function(e){
			document.body.classList.toggle('_lock');
			menuBody.classList.toggle('header__menu_active');
			menuIcon.classList.toggle('header-menu-icon_active');
		});
	}
});

window.onload=function(){
	let submitButton=document.getElementsByClassName('sign-up__send')[0];
	let input=document.getElementsByClassName('req');
	for(let index=0;index<input.length;index++){
      input[index].onclick=function(){
         removeError(input[index]);
      }
   }
	submitButton.onclick=function(event){
		let form=document.getElementsByClassName('sign-up__form')[0];
		event.preventDefault();
		let error = checkForm(input);
		if(error==0){
			form.submit();
		}
	}
};

function checkForm(input){
	let error=0;

	for(let index=0;index<input.length;index++){
		removeError(input[index]);
		if(input[index].value==''){
			error++;
			addError(input[index]);
		}
	}
	return error;
}

function removeError(input){
	input.parentElement.classList.remove('_error');
	input.classList.remove('_error');
}

function addError(input){
	input.parentElement.classList.add('_error');
	input.classList.add('_error');
}