var like = document.querySelectorAll('.card')
let likezinho = document.getElementsByClassName('fa-heart')

document.addEventListener('click',Babiele)
 function Babiele(e){
    let classlike = e.target; 
    console.log(classlike)

    if (classlike.classList.contains('fa-heart')){
        classlike.classList.toggle('fa-solid')
    }
};
const liked = false;
function likedsalve(){
if(classlike === likezinho){
    liked = true
}else{
    liked = false
}

}
//Salvar no navegador
localStorage.setItem('Likesalve', Babiele(e));
localStorage.getItem('likesalve')
