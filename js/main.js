var els;
var errors = false;

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    document.getElementById("basicinfo").classList.remove('text-InactiveIT')
    document.getElementById("basicinfo").classList.add('text-white')
    els = document.querySelectorAll('.progTitle');
  }
}

var x = 0;

function itnSwitch(param) {
  validate();

  if (param == 'next' && x < 6 && errors == false)
    x++;

  if (param == 'previous' && x > 0)
    x--;

  if (x == 6) {
    document.getElementById('switchItnNext').classList.add('hidden')
  } else {
    document.getElementById('switchItnNext').classList.remove('hidden')
  }

  if (x == 0) {
    document.getElementById('switchItnPrev').classList.add('hidden')
  } else {
    document.getElementById('switchItnPrev').classList.remove('hidden')
  }

  switch (x) {
    case 0:
      remove();
      document.getElementById("basicinfo").classList.remove('text-InactiveIT')
      document.getElementById("basicinfo").classList.add('text-white')
      document.querySelector('.category0').classList.remove('hidden')
      break;
    case 1:
      remove();
      document.getElementById('duration').classList.remove('text-InactiveIT')
      document.getElementById('duration').classList.add('text-white')
      document.querySelector('.category1').classList.remove('hidden')
      break;
    case 2:
      remove();
      document.getElementById('tripinfo').classList.remove('text-InactiveIT')
      document.getElementById('tripinfo').classList.add('text-white')
      document.querySelector('.category2').classList.remove('hidden')
      break;
    case 3:
      remove();
      document.getElementById('stayind').classList.remove('text-InactiveIT')
      document.getElementById('stayind').classList.add('text-white')
      document.querySelector('.category3').classList.remove('hidden')
      break;
    case 4:
      remove();
      document.getElementById('actf').classList.remove('text-InactiveIT')
      document.getElementById('actf').classList.add('text-white')
      document.querySelector('.category4').classList.remove('hidden')
      break;
    case 5:
      remove();
      document.getElementById('budget').classList.remove('text-InactiveIT')
      document.getElementById('budget').classList.add('text-white')
      document.querySelector('.category5').classList.remove('hidden')
      break;
    case 6:
      remove();
      document.getElementById('extrainfo').classList.remove('text-InactiveIT')
      document.getElementById('extrainfo').classList.add('text-white')
      document.querySelector('.category6').classList.remove('hidden')
      document.getElementById('switchItnSubmit').classList.remove('hidden');
      break;
  }
  updateValues();
}

function remove() {
  for (var i = 0; i < els.length; i++) {
    els[i].classList.remove('text-white')
    els[i].classList.add('text-InactiveIT')
    document.querySelector('.category' + i.toString()).classList.add('hidden')
  }
  document.getElementById('switchItnSubmit').classList.add('hidden');
}

function jumpTo(index) {
  validate();

  if (!errors)
    x = index;

  if (x == 6) {
    document.getElementById('switchItnNext').classList.add('hidden')
    document.getElementById('switchItnSubmit').classList.remove('hidden');
  } else {
    document.getElementById('switchItnNext').classList.remove('hidden')
    document.getElementById('switchItnSubmit').classList.add('hidden');
  }

  if (x == 0) {
    document.getElementById('switchItnPrev').classList.add('hidden')
  } else {
    document.getElementById('switchItnPrev').classList.remove('hidden')
  }

  if (!errors || index <= x) {
    remove();
    els[index].classList.remove('text-InactiveIT')
    els[index].classList.add('text-white')
    document.querySelector('.category' + index.toString()).classList.remove('hidden')
  }

  if (x == 6)
    document.getElementById('switchItnSubmit').classList.remove('hidden');
  updateValues();
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const MONTH_SHORT_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var curTime = new Date();
var formatMoNo = (
  "0" +
  (parseInt(curTime.getMonth()) + 1)
).slice(-2)
var formatDay = ("0" + curTime.getDate()).slice(
  -2
);

function app() {
  return {
    showDatepicker: false,
    datepickerValue: "",
    selectedDate: "",
    dateFormat: "YYYY-MM-DD",
    month: "",
    year: "",
    no_of_days: [],
    blankdays: [],
    initDate() {
      let today;
      if (this.selectedDate) {
        today = new Date(Date.parse(this.selectedDate));
      } else {
        today = new Date();
      }
      this.month = today.getMonth();
      this.year = today.getFullYear();
      this.datepickerValue = this.formatDateForDisplay(
        today
      );
    },
    formatDateForDisplay(date) {
      let formattedDay = DAYS[date.getDay()];
      let formattedDate = ("0" + date.getDate()).slice(
        -2
      ); // appends 0 (zero) in single digit date
      let formattedMonth = MONTH_NAMES[date.getMonth()];
      let formattedMonthShortName =
        MONTH_SHORT_NAMES[date.getMonth()];
      let formattedMonthInNumber = (
        "0" +
        (parseInt(date.getMonth()) + 1)
      ).slice(-2);
      let formattedYear = date.getFullYear();
      if (this.dateFormat === "DD-MM-YYYY") {
        return `${formattedDate}-${formattedMonthInNumber}-${formattedYear}`; // 02-04-2021
      }
      if (this.dateFormat === "YYYY-MM-DD") {
        return `${formattedYear}-${formattedMonthInNumber}-${formattedDate}`; // 2021-04-02
      }
      if (this.dateFormat === "D d M, Y") {
        return `${formattedDay} ${formattedDate} ${formattedMonthShortName} ${formattedYear}`; // Tue 02 Mar 2021
      }
      return `${formattedDay} ${formattedDate} ${formattedMonth} ${formattedYear}`;
    },
    isSelectedDate(date) {
      const d = new Date(this.year, this.month, date);
      return this.datepickerValue ===
        this.formatDateForDisplay(d) ?
        true :
        false;
    },
    isToday(date) {
      const today = new Date();
      const d = new Date(this.year, this.month, date);
      return today.toDateString() === d.toDateString() ?
        true :
        false;
    },
    getDateValue(date) {
      let selectedDate = new Date(
        this.year,
        this.month,
        date
      );
      this.datepickerValue = this.formatDateForDisplay(
        selectedDate
      );
      // this.$refs.date.value = selectedDate.getFullYear() + "-" + ('0' + formattedMonthInNumber).slice(-2) + "-" + ('0' + selectedDate.getDate()).slice(-2);
      this.isSelectedDate(date);
      this.showDatepicker = false;


      // Check to see if date is in future
      var time = new Date();
      var parse = new Date(this.year, this.month, date);

      if (time >= parse) {
          errors = true;
          document.getElementById('arrivalDateError').classList.remove('hidden')
      } else {
          errors = false;
          document.getElementById('arrivalDateError').classList.add('hidden')
      }
    },
    getNoOfDays() {
      let daysInMonth = new Date(
        this.year,
        this.month + 1,
        0
      ).getDate();
      // find where to start calendar day of week
      let dayOfWeek = new Date(
        this.year,
        this.month
      ).getDay();
      let blankdaysArray = [];
      for (var i = 1; i <= dayOfWeek; i++) {
        blankdaysArray.push(i);
      }
      let daysArray = [];
      for (var i = 1; i <= daysInMonth; i++) {
        daysArray.push(i);
      }
      this.blankdays = blankdaysArray;
      this.no_of_days = daysArray;
    },
  };
}