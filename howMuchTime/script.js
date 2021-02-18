var holidayList = [
  {
    date: "01.01.2021",
    isBankingDate: false,
    nameFI: "Uudenvuodenpäivä",
    nameSE: "Nyårsdagen",
    nameEN: "New Year's Day",
  },
  {
    date: "06.01.2021",
    isBankingDate: false,
    nameFI: "Loppiainen",
    nameSE: "Trettondag",
    nameEN: "Epiphany",
  },
  {
    date: "02.04.2021",
    isBankingDate: false,
    nameFI: "Pitkäperjantai",
    nameSE: "Långfredagen",
    nameEN: "Good Friday",
  },
  {
    date: "05.04.2021",
    isBankingDate: false,
    nameFI: "Toinen pääsiäispäivä",
    nameSE: "Annandag påsk",
    nameEN: "Easter Monday",
  },
  {
    date: "01.05.2021",
    isBankingDate: false,
    nameFI: "Vappu",
    nameSE: "Första maj",
    nameEN: "May Day",
  },
  {
    date: "13.05.2021",
    isBankingDate: false,
    nameFI: "Helatorsta",
    nameSE: "Kristi himmelsfärdsdag",
    nameEN: "Ascension Day",
  },
  {
    date: "25.06.2021",
    isBankingDate: false,
    nameFI: "Juhannusaatto",
    nameSE: "Midsommarafton",
    nameEN: "Midsummer's Eve",
  },
  {
    date: "06.12.2021",
    isBankingDate: false,
    nameFI: "Itsenäisyyspäivä",
    nameSE: "Självständigshetsdagen",
    nameEN: "Independence Day",
  },
  {
    date: "24.12.2021",
    isBankingDate: false,
    nameFI: "Jouluaatto",
    nameSE: "Julafton",
    nameEN: "Christmas Eve",
  },
  {
    date: "25.12.2021",
    isBankingDate: false,
    nameFI: "Joulupäivä",
    nameSE: "Juldagen",
    nameEN: "Christmas Day",
  },
  {
    date: "26.12.2021",
    isBankingDate: false,
    nameFI: "Tapaninpäivä",
    nameSE: "Annandag jul",
    nameEN: "Boxing Day",
  },
];
submit = (event) => {
  event.preventDefault();

  let date1 = new Date(document.getElementById("date").value);
  let date2 = new Date();
  let Difference_In_Time = date1.getTime() - date2.getTime();
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  let daysLeft = Math.trunc(Difference_In_Days);
  let text = document.querySelector("p");
  let text1 = document.getElementById("text1");
  let eventName = document.getElementById("eventName").value;
  text.textContent = daysLeft + " days left for " + eventName;
  let weekDays = weekdaysBetween(date2, date1);
  let bankHolidayList = getBankHolidaysExceptWeekend(date1.getFullYear());
  bankHolidayList.forEach((element) => {
    if (
      element.getTime() <= date1.getTime() &&
      element.getTime() >= date2.getTime()
    ) {
       console.log("paari ho rahi hai")
      weekDays = weekDays-1;
    }
  });
  text1.textContent = weekDays + " buisness days left for " + eventName;
};
//The program count show many business days there is left until the entered date(fromtoday(start date) untiltheend dateand skipping Saturdays and Sundays). //

function weekdaysBetween(startDate, endDate) {
  if (startDate < endDate) {
    var s = startDate;
    var e = endDate;
  } else {
    var s = endDate;
    var e = startDate;
  }
  var diffDays = Math.floor((e - s) / 86400000);
  var weeksBetween = Math.floor(diffDays / 7);
  if (s.getDay() == e.getDay()) {
    var adjust = 0;
  } else if (s.getDay() == 0 && e.getDay() == 6) {
    var adjust = 5;
  } else if (s.getDay() == 6 && e.getDay() == 0) {
    var adjust = 0;
  } else if (e.getDay() == 6 || e.getDay() == 0) {
    var adjust = 5 - s.getDay();
  } else if (s.getDay() == 0 || s.getDay() == 6) {
    var adjust = e.getDay();
  } else if (e.getDay() > s.getDay()) {
    var adjust = e.getDay() - s.getDay();
  } else {
    var adjust = 5 + e.getDay() - s.getDay();
  }

  return weeksBetween * 5 + adjust;
}

//Extra Bonus//
//Do all steps and add an opportunity to count only businessdays (also skipping bank holidays). //
getBankHolidaysExceptWeekend = (year) => {
  let holidayDates = [];
  holidayList.forEach((element) => {
    dateString = element.date;
    var dateParts = dateString.split(".");
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    if (dateObject.getDay() != 0 && dateObject.getDay() != 6) {
      holidayDates.push(dateObject);
    }
  });
  return holidayDates;
};
httpGet = (theUrl) => {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
};
console.log(getBankHolidaysExceptWeekend("2021"));

let button = document.getElementById("button");
button.addEventListener("click", submit);
