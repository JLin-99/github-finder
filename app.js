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
        ui.showAlert(`User "${username}" not found`, "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  e.target[0].value = "";
})