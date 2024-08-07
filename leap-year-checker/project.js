console.log("Welcome to Leap Year Checker\nby theEMA - Made for Codedex\n==============================\nUse the checkLeapYear() function to check\nif a year is a leap year or not.");

function checkLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

document.getElementById('leapYearForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const year = document.getElementById('year').value;
  const result = checkLeapYear(year) ? `${year} is a leap year.` : `${year} is not a leap year.`;
  const resultElement = document.getElementById('result');
  resultElement.textContent = result;
  resultElement.classList.remove('show');
  void resultElement.offsetWidth;
  resultElement.classList.add('show');
});