var dropdownList = document.getElementById("colorSelect");

// Get the button element
var removeButton = document.querySelector("input[type='button'][value='Select and Remove']");

// Add an event listener to the button element
removeButton.addEventListener("click", function() {
    // Get the selected option element
    var selectedOption = dropdownList.options[dropdownList.selectedIndex];
  
    // Remove the selected option element from the dropdown list
    dropdownList.removeChild(selectedOption);
});