const github = new GitHub,
  searchForm = document.getElementById("search-form");

// Search input event listener
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get input text
  const username = e.target[0].value;
  if (!username || /^\s*$/.test(username)) {
    e.target[0].value = "";
    return;
  }

  // Make HTTP call
  github.getUser(username)
    .then(data => {
      console.log(data)
      if (data.profile.message === "Not Found") {
        console.log(`User: ${username} Not Found`)
      } else {
        console.log(`User: ${username} Found`)
      }
    })

  e.target[0].value = "";
})