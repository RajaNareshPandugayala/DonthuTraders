window.addEventListener("load", function () {
    var loader = document.querySelector('.loader');
    loader.style.display = "none"; // Hide the loader element

    var boxShadowElement = document.querySelector('.box_parent');
    boxShadowElement.classList.remove('hidden'); // Remove the 'hidden' class
});
