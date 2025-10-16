// Step 2: Select and cache DOM elements
const itemInput = document.getElementById('item-input'); // Input field for new items
const addBtn = document.getElementById('add-btn'); // Button to add items
const shoppingList = document.getElementById('shopping-list'); // Unordered list to display items

// Step 3: Add Item functionality
addBtn.addEventListener('click', function() {
  // Get the value from the input field
  const itemText = itemInput.value.trim();
  // Only add if the input is not empty
  if (itemText !== "") {
    // Create a new list item element
    const li = document.createElement('li');
    // Create a span to hold the item text
    const span = document.createElement('span');
    span.textContent = itemText;

    // Create Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    // Step 4: Remove Item functionality
    removeBtn.addEventListener('click', function() {
      // li is the parent list item, so we remove it from the shopping list
      shoppingList.removeChild(li);
    });

    // Create Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    // Step 5: Edit Item functionality
    editBtn.addEventListener('click', function() {
      // If the button says 'Edit', switch to edit mode
      if (editBtn.textContent === 'Edit') {
        // Create an input field with the current item text
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = span.textContent;

        // Replace the span with the input field
        li.replaceChild(editInput, span);

        // Change the button text to 'Save'
        editBtn.textContent = 'Save';
      } else {
        // If the button says 'Save', update the item text
        const newText = li.querySelector('input').value.trim();
        if (newText !== "") {
          span.textContent = newText;
        }
        // Replace the input field with the updated span
        li.replaceChild(span, li.querySelector('input'));
        // Change the button text back to 'Edit'
        editBtn.textContent = 'Edit';
      }
    });

    // Add all elements to the list item
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);

    // Add the list item to the shopping list
    shoppingList.appendChild(li);

    // Clear the input field for the next item
    itemInput.value = "";
  }
});
