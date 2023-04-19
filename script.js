//your JS code here. If required.
let colorSelect = document.querySelector('#colorSelect');
let removeButton = document.querySelector('#remove-item');

removeButton.addEventListener('click', function() {
    let selectedOption = colorSelect.options[colorSelect.selectedIndex];
    colorSelect.removeChild(selectedOption);
});