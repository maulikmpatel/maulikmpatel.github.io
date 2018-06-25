// Delete a card when the 'x' button is click
// Display navigation when menu button is clicked
// Make a new card with the 'New Card' form
// Add 'active' class to navigation elements when they are clicked
// Remove 'active' class from other navigation elements when one is clicked
describe(' showNavMenu', function() {
    it('shows navigation menu when MENU button is clicked ', function() {
        var navMenu = document.createElement('nav');
        var unorderedListOfNavigationMenu = document.createElement('ul');
        unorderedListOfNavigationMenu.classList.add('newNav');
        var button = document.createElement('button');
        navMenu.appendChild(button);
        navMenu.appendChild(unorderedListOfNavigationMenu);
        // document.body.appendChild(navMenu);
        showNavMenu(button.nextElementSibling);
        expect(unorderedListOfNavigationMenu.classList.contains('newNav')).toBe(false);
    });
});