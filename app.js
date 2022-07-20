const github = new GitHub,
  ui = new UI,
  searchForm = document.getElementById("search-form");

// Search input event listener
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get input text
  const username = e.target[0].value;
  if (!username || /^\s*$/.test(username)) {
    ui.clearProfile();
    e.target[0].value = "";
    return;
  }

  // Make HTTP call
  github.getUser(username)
    .then(data => {
      if (data.profile.message === "Not Found") {
        console.log(`User: ${username} Not Found`)
      } else {
        ui.showProfile(data.profile);
      }
    })
  e.target[0].value = "";
})