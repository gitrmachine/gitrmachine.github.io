String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Checkboxes for stays
var stays = document.querySelectorAll(".stayChoices");

for (var i = 0; i < stays.length; i++) {
  stays[i].addEventListener("click", (e) => {
    console.log("hi");
    if (document.querySelectorAll(".stayChoices:checked").length == 0) {
      document.getElementById("stayError").classList.remove("hidden");
    } else {
      document.getElementById("stayError").classList.add("hidden");
    }
  });
}

// Checkboxes for holidays
var holidays = document.querySelectorAll(".holiday");

for (var i = 0; i < stays.length; i++) {
  holidays[i].addEventListener("click", (e) => {
    if (document.querySelectorAll(".holiday:checked").length == 0) {
      document.getElementById("holidayError").classList.remove("hidden");
    } else {
      document.getElementById("holidayError").classList.add("hidden");
    }
  });
}

// Checkboxes for age ranges
var ageranges = document.querySelectorAll('input[name="childrange"]');

for (var i = 0; i < ageranges.length; i++) {
  ageranges[i].addEventListener("click", (e) => {
    errors = false;
    document.getElementById("ageRangeError").classList.add("hidden");

    if (
      document.querySelectorAll('input[name="childrange"]:checked').length >
        document.getElementById("durationNightSlideChildren").value &&
      document.getElementById("durationNightSlideChildren").value != 0
    ) {
      errors = true;
      document.getElementById("ageRangeError").classList.remove("hidden");
      document.getElementById("ageRangeError").innerHTML =
        "Must have less age ranges than children.";
    }

    if (
      document.getElementById("durationNightSlideChildren").value == 0 &&
      document.querySelector('input[name="childrange"][value="NA"]:checked') ==
        null
    ) {
      errors = true;
      document.getElementById("ageRangeError").classList.remove("hidden");
      document.getElementById("ageRangeError").innerHTML =
        "Must select 'N/A' if no children.";
    }

    if (
      document.querySelectorAll('input[name="childrange"]:checked').length <
        1 ||
      document.querySelectorAll('input[name="childrange"]:checked').length > 4
    ) {
      errors = true;
      document.getElementById("ageRangeError").classList.remove("hidden");
      document.getElementById("ageRangeError").innerHTML =
        "Must only have four options selected at maximum and NA must be selected if there are no children";
    }

    if (
      document.getElementById("durationNightSlideChildren").value != 0 &&
      document.querySelector('input[name="childrange"][value="NA"]:checked') !=
        null
    ) {
      errors = true;
      document.getElementById("ageRangeError").classList.remove("hidden");
      document.getElementById("ageRangeError").innerHTML =
        "Each option can only be selected once and 'NA' cannot be selected";
    }

    /*if (document.getElementById('durationNightSlideChildren').value != 0 && document.querySelectorAll('input[name="childrange"]:checked').length == 0) {
            errors = true;
            document.getElementById('ageRangeError').classList.remove('hidden')
        }*/
  });
}

function validate() {
  switch (x) {
    case 0:
      // Check for empty name
      if (document.getElementById("nameField").value == "") {
        errors = true;
        document.getElementById("nameError").classList.remove("hidden");
      } else {
        errors = false;
        document.getElementById("nameError").classList.add("hidden");
      }

      // Check for empty email
      if (document.getElementById("emailField").value == "") {
        errors = true;
        document.getElementById("emailError").classList.remove("hidden");
      } else {
        errors = false;
        document.getElementById("emailError").classList.add("hidden");
      }
      break;
    case 1:
      var time = new Date();
      var parse = new Date(document.getElementById("arrivalDate").value);

      if (time >= parse) {
        errors = true;
        document.getElementById("arrivalDateError").classList.remove("hidden");
      } else {
        errors = false;
        document.getElementById("arrivalDateError").classList.add("hidden");
      }
      break;
    case 2:
      errors = false;

      if (
        document.querySelectorAll('input[name="childrange"]:checked').length >
          document.getElementById("durationNightSlideChildren").value &&
        document.getElementById("durationNightSlideChildren").value != 0
      ) {
        errors = true;
        document.getElementById("ageRangeError").classList.remove("hidden");
        document.getElementById("ageRangeError").innerHTML =
          "Must have less age ranges than children.";
      }

      if (
        document.getElementById("durationNightSlideChildren").value == 0 &&
        document.querySelector(
          'input[name="childrange"][value="NA"]:checked'
        ) == null
      ) {
        errors = true;
        document.getElementById("ageRangeError").classList.remove("hidden");
        document.getElementById("ageRangeError").innerHTML =
          "Must select 'N/A' if no children.";
      }

      if (
        document.querySelectorAll('input[name="childrange"]:checked').length <
          1 ||
        document.querySelectorAll('input[name="childrange"]:checked').length > 4
      ) {
        errors = true;
        document.getElementById("ageRangeError").classList.remove("hidden");
        document.getElementById("ageRangeError").innerHTML =
          "Must only have four options selected at maximum and NA must be selected if there are no children";
      }

      if (
        document.getElementById("durationNightSlideChildren").value != 0 &&
        document.querySelector(
          'input[name="childrange"][value="NA"]:checked'
        ) != null
      ) {
        errors = true;
        document.getElementById("ageRangeError").classList.remove("hidden");
        document.getElementById("ageRangeError").innerHTML =
          "Each option can only be selected once and 'NA' cannot be selected";
      }

      if (
        document.getElementById("durationNightSlideChildren").value != 0 &&
        document.querySelectorAll('input[name="childrange"]:checked').length ==
          0
      ) {
        errors = true;
        document.getElementById("ageRangeError").classList.remove("hidden");
      }
      break;
    case 3:
      // Check for empty stay checkboxes
      if (document.querySelectorAll(".stayChoices:checked").length == 0) {
        errors = true;
        document.getElementById("stayError").classList.remove("hidden");
      } else {
        errors = false;
        document.getElementById("stayError").classList.add("hidden");
      }
      break;
    case 4:
      // Check for empty vacation activities checkboxes
      if (document.querySelectorAll(".holiday:checked").length == 0) {
        errors = true;
        document.getElementById("holidayError").classList.remove("hidden");
      } else {
        errors = false;
        document.getElementById("holidayError").classList.add("hidden");
      }
      break;
    case 5:
      break;
  }
}

function updateValues() {
  document.getElementById("confirmName").innerHTML =
    document.getElementById("nameField").value;
  document.getElementById("confirmEmail").innerHTML =
    document.getElementById("emailField").value;

  document.getElementById("confirmArrivalDate").innerHTML =
    document.getElementById("arrivalDate").value;
  document.getElementById("confirmNights").innerHTML =
    document.getElementById("durationNightSlide").value + " nights";

  document.getElementById("confirmArrivalPoint").innerHTML =
    document.querySelector('input[name="arrive"]:checked').value;
  document.getElementById("confirmNumberAdults").innerHTML =
    document.getElementById("durationNightSlideAdults").value;

  document.getElementById("confirmNumberChildren").innerHTML =
    document.getElementById("durationNightSlideChildren").value;

  // Age ranges
  document.getElementById("confirmChildrenAgeRange").innerHTML = "";
  var crange = document.querySelectorAll('input[name="childrange"]:checked');
  for (var i = 0; i < crange.length; i++) {
    var newh = document.createElement("h1");
    var textNode = document.createTextNode(`${crange[i].value}`);
    newh.appendChild(textNode);
    document.getElementById("confirmChildrenAgeRange").append(newh);
  }

  document.getElementById("confirmTransportation").innerHTML =
    document.querySelector('input[name="transport"]:checked').value;

  // Places to stay
  document.getElementById("confirmPlacesStay").innerHTML = "";
  var stays = document.querySelectorAll(".stayChoices:checked");
  for (var i = 0; i < stays.length; i++) {
    var newh = document.createElement("h1");
    var textNode = document.createTextNode(`${stays[i].value.capitalize()}`);
    newh.appendChild(textNode);
    document.getElementById("confirmPlacesStay").append(newh);
  }

  document.getElementById("confirmNightsInArea").innerHTML =
    document.querySelector('input[name="nightsSpend"]:checked').value;
  document.getElementById("confirmFrequency").innerHTML =
    document.querySelector('input[name="activity"]:checked').value;

  document.getElementById("confirmDestinationScale").innerHTML =
    document.getElementById("scaleSlide").value;

  // Activities
  document.getElementById("confirmActivities").innerHTML = "";
  var holiday = document.querySelectorAll(".holiday:checked");
  for (var i = 0; i < holiday.length; i++) {
    var newh = document.createElement("h1");
    var textNode = document.createTextNode(`${holiday[i].value.capitalize()}`);
    newh.appendChild(textNode);
    document.getElementById("confirmActivities").append(newh);
  }

  document.getElementById("confirmWord").innerHTML = document.querySelector(
    'input[name="word"]:checked'
  ).value;
  document.getElementById("confirmBudget").innerHTML = document.querySelector(
    'input[name="budget"]:checked'
  ).value;
}

document.getElementById("switchItnSubmit").addEventListener("click", (e) => {
  const data = {
    name: document.getElementById("nameField").value,
    email: document.getElementById("emailField").value,
    arrival: document.getElementById("arrivalDate").value,
    nights: parseInt(document.getElementById("durationNightSlide").value),
    entry: document
      .querySelector('input[name="arrive"]:checked')
      .value.toLowerCase(),
    adults: parseInt(document.getElementById("durationNightSlideAdults").value),
    children: parseInt(
      document.getElementById("durationNightSlideChildren").value
    ),
    agerange: [],
    sleep: [],
    regionights: parseInt(
      document.querySelector('input[name="nightsSpend"]:checked').value
    ),
    offbeat: parseInt(document.getElementById("scaleSlide").value),
    description: document
      .querySelector('input[name="word"]:checked')
      .value.toLowerCase(),
    activities: [],
  };

  // add all stay choices
  var stayChoices = document.querySelectorAll(".stayChoices:checked");

  for (var i = 0; i < stayChoices.length; i++) {
    data.sleep.push(stayChoices[i].value);
  }

  // add all recreational activite
  var holActs = document.querySelectorAll(".holiday:checked");

  for (var j = 0; j < holActs.length; j++) {
    data.activities.push(holActs[j].value);
  }

  // Child range validation
  var childranges = document.querySelectorAll(
    'input[name="childrange"]:checked'
  );

  for (var i = 0; i < childranges.length; i++) {
    switch (childranges[i].value) {
      case "0-1 years":
        data.agerange.push("zerone");
        break;
      case "2-5 years":
        data.agerange.push("twofive");
        break;
      case "6-10 years":
        data.agerange.push("sixten");
        break;
      case "11-18 years":
        data.agerange.push("eleveighteen");
        break;
      case "NA":
        data.agerange[0] = "NA";
        break;
    }
  }

  switch (document.querySelector('input[name="activity"]:checked').value) {
    case "2-4 hours of activity per day":
      data.active = 2;
      break;
    case "4-6 hours of activity per day":
      data.active = 3;
      break;
    case "6-12 hours of activity per day":
      data.active = 4;
      break;
  }

  switch (document.querySelector('input[name="budget"]:checked').value) {
    case "100-250 euro":
      data.budget = 100;
      break;
    case "250-500 euro":
      data.budget = 250;
      break;
    case "500-1000 euro":
      data.budget = 500;
      break;
    case "1000-2000 euro":
      data.budget = 1000;
      break;
    case "No concern about budget":
      data.budget = 99999;
      break;
  }

  fetch("https://grassintheroad.com/survey", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    mode: "no-cors",
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("itinerary", JSON.stringify(data));
      window.location.href = window.location.href.replace(
        "/itinerary",
        "/confirm"
      );
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  data.transport = document.querySelector(
    'input[name="transport"]:checked'
  ).value;
});
