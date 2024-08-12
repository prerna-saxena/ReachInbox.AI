Login Page: The Login.js component handles user authentication. Once authenticated, it navigates to the Onebox screen.

Onebox Screen: Onebox.js fetches the list of threads from an API and displays them. It allows deletion of threads and supports keyboard shortcuts for deletion (D) and opening the reply box (R).

Custom Text Editor: The CustomEditor.js component includes custom buttons to save content and insert variables.

Reply Functionality: Reply.js handles replying to a thread by sending the reply data through an API.

Light/Dark Mode: App.js includes a toggle for switching between light and dark themes. CSS styles are applied conditionally based on the selected theme.

CSS: Basic styling is provided, with separate rules for light and dark modes.
