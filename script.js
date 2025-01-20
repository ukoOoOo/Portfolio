function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToContact() {
  // Close the menu if toggleMenu exists
  if (typeof toggleMenu === "function") {
    toggleMenu();
  }

  // Scroll to the contact section
  const contactSection = document.querySelector("#contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("Contact section not found.");
  }
}
