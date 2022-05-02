const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = "visible";


});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {


    butInstall.setAttribute('disabled', true);

    // do i want to show text? 

    // also install?

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

// alert the user that it has been installed

});
