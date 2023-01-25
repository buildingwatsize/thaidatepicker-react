class YearListGenerator {
  constructor(dateLibrary) {
    this.dateLibrary = dateLibrary;
  }

  RangeMaker(startVal = 0, endVal = 0, increment = 0) {
    let list = [];
    if (increment <= 0) {
      return list;
    }
    for (let index = startVal; index <= endVal; index = index + increment) {
      list = [...list, index];
    }
    return list;
  }

  Generate(scope, minDate, maxDate) {
    const scopeYear = scope ?? 99;
    const currentYear = this.dateLibrary().year();
    const minYear = minDate
      ? this.dateLibrary(minDate).year()
      : currentYear - scopeYear;
    const maxYear = maxDate
      ? this.dateLibrary(maxDate).year()
      : currentYear + scopeYear;
    return this.RangeMaker(minYear, maxYear, 1);
  }
}

export default YearListGenerator;
