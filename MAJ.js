<script>
  // Inclure votre JavaScript ici
  console.log("Bienvenue sur notre page web commerciale !");

  // Définir une fonction pour afficher la boîte modale
  function showUpdateBox() {
    // Créer une boîte modale
    var updateBox = document.createElement("div");
    updateBox.innerHTML = "Il y a des mises à jour disponibles pour notre site web. Cliquez ici pour en savoir plus.";
    updateBox.style.backgroundColor = "#333";
    updateBox.style.color = "#fff";
    updateBox.style.padding = "20px";
    updateBox.style.position = "fixed";
    updateBox.style.bottom = "0";
    updateBox.style.right = "0";
    updateBox.style.display = "block";
    updateBox.style.zIndex = "999";

    // Ajouter la boîte modale à la page
    document.body.appendChild(updateBox);

    // Définir un timer pour masquer la boîte modale après 10 secondes
    setTimeout(function() {
      updateBox.style.display = "none";
    }, 10000);
  }

  // Définir un intervalle de temps pour afficher la boîte modale toutes les 5 minutes
  setInterval(showUpdateBox, 300000);
</script>
