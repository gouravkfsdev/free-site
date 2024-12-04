// accordian
const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");
  header.addEventListener("click", () => {
    // Close other open items
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".accordion-content").style.display = "none";
      }
    });

    // Toggle current item
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});

// form validate js

const form = document.getElementById("registration-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dateOfIncorporation = document.getElementById("date-of-incorporation");
  const panNo = document.getElementById("pan-no");
  const contactNo = document.getElementById("contact-no");
  const declaration = document.getElementById("declaration");

  let isValid = true;

  // Validate form fields
  if (!dateOfIncorporation.value) {
    document.getElementById("date-of-incorporation-error").textContent =
      "Please enter the date of incorporation/birth.";
    isValid = false;
  } else {
    document.getElementById("date-of-incorporation-error").textContent = "";
  }

  if (!panNo.value) {
    document.getElementById("pan-no-error").textContent =
      "Please enter the PAN no. of the entity.";
    isValid = false;
  } else {
    document.getElementById("pan-no-error").textContent = "";
  }

  if (!contactNo.value) {
    document.getElementById("contact-no-error").textContent =
      "Please enter the contact number.";
    isValid = false;
  } else {
    document.getElementById("contact-no-error").textContent = "";
  }

  if (!declaration.checked) {
    document.getElementById("declaration-error").textContent =
      "Please accept the declaration.";
    isValid = false;
  } else {
    document.getElementById("declaration-error").textContent = "";
  }

  if (isValid) {
    // Submit the form or perform other actions
    alert("Form submitted successfully!");
    form.reset();
  }
});
