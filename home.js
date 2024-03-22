function Data(){

    var data = new Date();
    var hours = data.getHours()
    var minutes = data.getMinutes()

    if (minutes < 10){
        minutes = "0" + minutes
    }

    if (hours > 12){

        hours = hours - 12;
        var t_str = hours + ":" + minutes + " ";
        t_str += "PM";

    }
    else{
        var t_str = hours + ":" + minutes + " ";
        t_str += "AM";
    }

    document.getElementById('setData').innerHTML = t_str;
}

  /* */
  
  function Sata() {
    // Alte coduri aici...
    document.body.classList.add('loaded');
}

/* 

// Selectează toate elementele <li> din lista de imagini
const imageItems = document.querySelectorAll('.image-list li');

// Parcurge fiecare element <li> și adaugă un eveniment de ascultare pentru evenimentul de hover
imageItems.forEach(item => {
  item.addEventListener('mouseover', showAdditionalImages);
  item.addEventListener('mouseout', hideAdditionalImages);
});

// Funcție pentru afișarea imaginilor suplimentare atunci când utilizatorul trece cu mouse-ul peste imaginea principală
function showAdditionalImages(event) {
  const currentItem = event.currentTarget;
  const additionalImages = currentItem.querySelector('.additional-images');
  additionalImages.style.display = 'block';
}

// Funcție pentru ascunderea imaginilor suplimentare atunci când utilizatorul își mută mouse-ul de la imaginea principală
function hideAdditionalImages(event) {
  const currentItem = event.currentTarget;
  const additionalImages = currentItem.querySelector('.additional-images');
  additionalImages.style.display = 'none';
}
*/
/**/

window.addEventListener("DOMContentLoaded", function() {
    // Obține elementele imaginii și zona de informații
    var images = document.querySelectorAll(".portret-list li img");
    var imageInfo = document.getElementById("image-info");

    // Adaugă un eveniment de clic pentru fiecare imagine
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            // Obține descrierea imaginii
            var description = this.nextElementSibling.textContent;

            // Actualizează conținutul zonei de informații
            imageInfo.innerHTML = "<p>" + description + "</p>";
        });
    });
});

/*window.addEventListener("DOMContentLoaded", function() {
    // Obține elementele imaginii și zona de informații
    var imageContainers = document.querySelectorAll(".portret-list .image-container");

    // Adaugă un eveniment de clic pentru fiecare imagine
    imageContainers.forEach(function(container) {
        var image = container.querySelector("img");
        var description = container.querySelector(".image-description");

        image.addEventListener("click", function() {
            // Actualizează conținutul zonei de informații
            document.getElementById("image-info").innerHTML = "<p>" + description.textContent + "</p>";
        });
    });
});*/ 