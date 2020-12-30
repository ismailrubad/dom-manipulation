window.onload = (event) => {
  


  function addNewContact(name, email, homepageLink) {
    var temp = document.querySelector("#contact-template");
    var clon = temp.content.cloneNode(true);
    for (var i = 0 ; i < clon.childNodes[1].childNodes.length ; i++) {
      if(clon.childNodes[1].childNodes[i].nodeName == "H2"){
        clon.childNodes[1].childNodes[i].innerHTML = name
      }
      else if(clon.childNodes[1].childNodes[i].className == "email"){
        clon.childNodes[1].childNodes[i].innerHTML = email
      }

      else if(clon.childNodes[1].childNodes[i].className == "homepage"){
        clon.childNodes[1].childNodes[i].childNodes[0].href  = homepageLink
      }
    }

    document.getElementById("contacts").appendChild(clon);
    document.getElementById("input-name").value = "";
    document.getElementById("input-email").value = "";
    document.getElementById("input-homepage").value = "";

  }

  document.getElementById("form").addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault()
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let homepageLink = document.getElementById("input-homepage").value;

    addNewContact(name, email, homepageLink);
  }


};