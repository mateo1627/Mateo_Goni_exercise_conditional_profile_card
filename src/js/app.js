import "../style/index.css";
/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,
        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console

  // Set default values
  const defaults = {
    name: "Lucy",
    lastName: "Boilett",
    role: "Web Developer",
    city: "Miami",
    country: "USA",
    twitter: "4geeksacademy",
    github: "4geeksacademy",
    linkedin: "in/4geeksacademy",
    instagram: "4geeksacademy"
  };

  // Destructure variables with defaults
  let {
    includeCover,
    background,
    avatarURL,
    socialMediaPosition,
    name,
    lastName,
    role,
    city,
    country,
    twitter,
    github,
    linkedin,
    instagram
  } = { ...defaults, ...variables };

  // Determine cover image
  let cover = includeCover
    ? `<div class="cover"><img src="${background}" /></div>`
    : "<div class='cover'></div>";

  // Determine social media position class
  let position =
    variables.socialMediaPosition === "left"
      ? "position-left"
      : "position-right";

  // Update HTML content
  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${avatarURL}" class="photo" />
      <h1>${name == null ? "Lucy" : name} ${
    lastName == null ? "Boilett" : lastName
  }</h1>
      <h2>${role == null ? "Web Developer" : role}</h2>
      <h3>${city == null ? "Miami" : city}, ${
    country == null ? "USA" : country
  }</h3>
      <ul class="${variables.socialMediaPosition}">
        <li><a href="https://twitter.com/${twitter}" target="_blank"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://github.com/${github}" target="_blank"><i class="fab fa-github"></i></a></li>
        <li><a href="https://linkedin.com/in/${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="https://instagram.com/${instagram}" target="_blank"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>
  `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value === "" || this.value === "null"
          ? null
          : this.value === "true"
          ? true
          : this.value === "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
