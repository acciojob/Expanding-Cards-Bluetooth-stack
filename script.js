//your JS code here. If required.
const pic = document.querySelectorAll('.panel');

pic.forEach((photo)=>{
	photo.addEventListener('click',()=>{
		removeActive();
		photo.classList.add('active');
	});
});

function removeActive(){
	pic.forEach((photo)=>{
		photo.classList.remove('active');
	});
}