class YearListGenerator {
  dateLibrary: (_d?: any) => any;

  constructor(dateLibrary?: any) {
    this.dateLibrary = dateLibrary;
  }

  RangeMaker(startVal = 0, endVal = 0, increment = 0) {
    let list: Array<number> = [];
    if (increment <= 0) {
      return list;
    }
    for (let index = startVal; index <= endVal; index = index + increment) {
      list = [...list, index];
    }
    return list;
  }

  Generate(scope: number = 99, minDate: any, maxDate: any) {
    const scopeYear = scope;
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
