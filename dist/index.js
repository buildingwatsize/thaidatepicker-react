function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var DatePicker = require('react-datepicker');
var DatePicker__default = _interopDefault(DatePicker);
var antd = require('antd');
var LeftOutlined = _interopDefault(require('@ant-design/icons/LeftOutlined'));
var RightOutlined = _interopDefault(require('@ant-design/icons/RightOutlined'));
require('react-datepicker/dist/react-datepicker.css');
var dayjs = _interopDefault(require('dayjs'));
require('dayjs/locale/th');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'น้อยกว่า 1 วินาที',
    other: 'น้อยกว่า {{count}} วินาที'
  },
  xSeconds: {
    one: '1 วินาที',
    other: '{{count}} วินาที'
  },
  halfAMinute: 'ครึ่งนาที',
  lessThanXMinutes: {
    one: 'น้อยกว่า 1 นาที',
    other: 'น้อยกว่า {{count}} นาที'
  },
  xMinutes: {
    one: '1 นาที',
    other: '{{count}} นาที'
  },
  aboutXHours: {
    one: 'ประมาณ 1 ชั่วโมง',
    other: 'ประมาณ {{count}} ชั่วโมง'
  },
  xHours: {
    one: '1 ชั่วโมง',
    other: '{{count}} ชั่วโมง'
  },
  xDays: {
    one: '1 วัน',
    other: '{{count}} วัน'
  },
  aboutXMonths: {
    one: 'ประมาณ 1 เดือน',
    other: 'ประมาณ {{count}} เดือน'
  },
  xMonths: {
    one: '1 เดือน',
    other: '{{count}} เดือน'
  },
  aboutXYears: {
    one: 'ประมาณ 1 ปี',
    other: 'ประมาณ {{count}} ปี'
  },
  xYears: {
    one: '1 ปี',
    other: '{{count}} ปี'
  },
  overXYears: {
    one: 'มากกว่า 1 ปี',
    other: 'มากกว่า {{count}} ปี'
  },
  almostXYears: {
    one: 'เกือบ 1 ปี',
    other: 'เกือบ {{count}} ปี'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      if (token === 'halfAMinute') {
        return 'ใน' + result;
      } else {
        return 'ใน ' + result;
      }
    } else {
      return result + 'ที่ผ่านมา';
    }
  }

  return result;
}

function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

var dateFormats = {
  full: 'วันEEEEที่ do MMMM y',
  "long": 'do MMMM y',
  medium: 'd MMM y',
  "short": 'dd/MM/yyyy'
};
var timeFormats = {
  full: 'H:mm:ss น. zzzz',
  "long": 'H:mm:ss น. z',
  medium: 'H:mm:ss น.',
  "short": 'H:mm น.'
};
var dateTimeFormats = {
  full: "{{date}} 'เวลา' {{time}}",
  "long": "{{date}} 'เวลา' {{time}}",
  medium: '{{date}}, {{time}}',
  "short": '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'medium'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale = {
  lastWeek: "eeee'ที่แล้วเวลา' p",
  yesterday: "'เมื่อวานนี้เวลา' p",
  today: "'วันนี้เวลา' p",
  tomorrow: "'พรุ่งนี้เวลา' p",
  nextWeek: "eeee 'เวลา' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

var eraValues = {
  narrow: ['B', 'คศ'],
  abbreviated: ['BC', 'ค.ศ.'],
  wide: ['ปีก่อนคริสตกาล', 'คริสต์ศักราช']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['ไตรมาสแรก', 'ไตรมาสที่สอง', 'ไตรมาสที่สาม', 'ไตรมาสที่สี่']
};
var dayValues = {
  narrow: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
  "short": ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
  abbreviated: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
  wide: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
};
var monthValues = {
  narrow: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  abbreviated: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  wide: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
};
var dayPeriodValues = {
  narrow: {
    am: 'ก่อนเที่ยง',
    pm: 'หลังเที่ยง',
    midnight: 'เที่ยงคืน',
    noon: 'เที่ยง',
    morning: 'เช้า',
    afternoon: 'บ่าย',
    evening: 'เย็น',
    night: 'กลางคืน'
  },
  abbreviated: {
    am: 'ก่อนเที่ยง',
    pm: 'หลังเที่ยง',
    midnight: 'เที่ยงคืน',
    noon: 'เที่ยง',
    morning: 'เช้า',
    afternoon: 'บ่าย',
    evening: 'เย็น',
    night: 'กลางคืน'
  },
  wide: {
    am: 'ก่อนเที่ยง',
    pm: 'หลังเที่ยง',
    midnight: 'เที่ยงคืน',
    noon: 'เที่ยง',
    morning: 'เช้า',
    afternoon: 'บ่าย',
    evening: 'เย็น',
    night: 'กลางคืน'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ก่อนเที่ยง',
    pm: 'หลังเที่ยง',
    midnight: 'เที่ยงคืน',
    noon: 'เที่ยง',
    morning: 'ตอนเช้า',
    afternoon: 'ตอนกลางวัน',
    evening: 'ตอนเย็น',
    night: 'ตอนกลางคืน'
  },
  abbreviated: {
    am: 'ก่อนเที่ยง',
    pm: 'หลังเที่ยง',
    midnight: 'เที่ยงคืน',
    noon: 'เที่ยง',
    morning: 'ตอนเช้า',
    afternoon: 'ตอนกลางวัน',
    evening: 'ตอนเย็น',
    night: 'ตอนกลางคืน'
  },
  wide: {
    am: 'ก่อนเที่ยง',
    pm: 'หลังเที่ยง',
    midnight: 'เที่ยงคืน',
    noon: 'เที่ยง',
    morning: 'ตอนเช้า',
    afternoon: 'ตอนกลางวัน',
    evening: 'ตอนเย็น',
    night: 'ตอนกลางคืน'
  }
};

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  return number;
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};

function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

var matchOrdinalNumberPattern = /^\d+/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^([bB]|[aA]|คศ)/i,
  abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,
  wide: /^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i
};
var parseEraPatterns = {
  any: [/^[bB]/i, /^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^ไตรมาส(ที่)? ?[1234]/i
};
var parseQuarterPatterns = {
  any: [/(1|แรก|หนึ่ง)/i, /(2|สอง)/i, /(3|สาม)/i, /(4|สี่)/i]
};
var matchMonthPatterns = {
  narrow: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,
  abbreviated: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,
  wide: /^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i
};
var parseMonthPatterns = {
  wide: [/^มก/i, /^กุม/i, /^มี/i, /^เม/i, /^พฤษ/i, /^มิ/i, /^กรก/i, /^ส/i, /^กัน/i, /^ต/i, /^พฤศ/i, /^ธ/i],
  any: [/^ม\.?ค\.?/i, /^ก\.?พ\.?/i, /^มี\.?ค\.?/i, /^เม\.?ย\.?/i, /^พ\.?ค\.?/i, /^มิ\.?ย\.?/i, /^ก\.?ค\.?/i, /^ส\.?ค\.?/i, /^ก\.?ย\.?/i, /^ต\.?ค\.?/i, /^พ\.?ย\.?/i, /^ธ\.?ค\.?/i]
};
var matchDayPatterns = {
  narrow: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  "short": /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  abbreviated: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  wide: /^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i
};
var parseDayPatterns = {
  wide: [/^อา/i, /^จั/i, /^อั/i, /^พุธ/i, /^พฤ/i, /^ศ/i, /^เส/i],
  any: [/^อา/i, /^จ/i, /^อ/i, /^พ(?!ฤ)/i, /^พฤ/i, /^ศ/i, /^ส/i]
};
var matchDayPeriodPatterns = {
  any: /^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ก่อนเที่ยง/i,
    pm: /^หลังเที่ยง/i,
    midnight: /^เที่ยงคืน/i,
    noon: /^เที่ยง/i,
    morning: /เช้า/i,
    afternoon: /บ่าย/i,
    evening: /เย็น/i,
    night: /กลางคืน/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

var locale = {
  code: 'th',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};

dayjs.locale('th');
DatePicker.registerLocale('th', locale);
DatePicker.setDefaultLocale('th');
var months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];

var CustomInput = function CustomInput(_ref) {
  var value = _ref.value,
      onClick = _ref.onClick,
      placeholderName = _ref.placeholderName,
      displayFormat = _ref.displayFormat,
      style = _ref.style;
  var thaiDate = '';

  if (value !== '') {
    var date = dayjs(value);
    var thaiYear = date.year() + 543;
    var wrappedDisplayFormat = displayFormat ? displayFormat.replace(/YYYY/, thaiYear).replace(/YY/, thaiYear % 100) : null;
    thaiDate = wrappedDisplayFormat && "" + date.format(wrappedDisplayFormat) || "" + thaiYear + date.format('-MM-DD');
  }

  return /*#__PURE__*/React__default.createElement(antd.Input, {
    value: thaiDate,
    onClick: onClick,
    placeholder: placeholderName,
    style: style
  });
};

var CustomInputWrapper = React__default.forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default.createElement("div", {
    ref: ref
  }, /*#__PURE__*/React__default.createElement(CustomInput, props));
});
var headerStyle = {
  margin: 10,
  display: 'flex',
  justifyContent: 'space-between'
};
var range = function range(startVal, endVal, increment) {
  if (startVal === void 0) {
    startVal = 0;
  }

  if (endVal === void 0) {
    endVal = 0;
  }

  if (increment === void 0) {
    increment = 0;
  }

  var list = [];

  if (increment <= 0) {
    return list;
  }

  for (var index = startVal; index < endVal; index = index + increment) {
    list = [].concat(list, [index]);
  }

  return list;
};
var WatDatePicker = function WatDatePicker(props) {
  var _props$yearBoundary;

  var _useState = React.useState(props.value ? props.value : null),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = React.useState(value ? new Date(value) : null),
      selectedDate = _useState2[0],
      setSelectedDate = _useState2[1];

  var thisYear = dayjs().year();
  var yearBoundary = (_props$yearBoundary = props.yearBoundary) != null ? _props$yearBoundary : 50;
  var years = range(thisYear - yearBoundary, thisYear + yearBoundary, 1);
  var highlightWithRanges = [{
    'react-datepicker__day--highlighted-today': [new Date()]
  }];
  return /*#__PURE__*/React__default.createElement(DatePicker__default, _extends({
    locale: "th",
    renderCustomHeader: function renderCustomHeader(_ref2) {
      var date = _ref2.date,
          changeYear = _ref2.changeYear,
          changeMonth = _ref2.changeMonth,
          decreaseMonth = _ref2.decreaseMonth,
          increaseMonth = _ref2.increaseMonth,
          prevMonthButtonDisabled = _ref2.prevMonthButtonDisabled,
          nextMonthButtonDisabled = _ref2.nextMonthButtonDisabled;
      return /*#__PURE__*/React__default.createElement("div", {
        style: headerStyle
      }, /*#__PURE__*/React__default.createElement("button", {
        className: "borderless",
        onClick: decreaseMonth,
        disabled: prevMonthButtonDisabled
      }, /*#__PURE__*/React__default.createElement(LeftOutlined, null)), /*#__PURE__*/React__default.createElement("select", {
        className: "borderless",
        value: months[dayjs(date).month()],
        onChange: function onChange(_ref3) {
          var value = _ref3.target.value;
          return changeMonth(months.indexOf(value));
        }
      }, months.map(function (option) {
        return /*#__PURE__*/React__default.createElement("option", {
          key: option,
          value: option
        }, option);
      })), /*#__PURE__*/React__default.createElement("select", {
        className: "borderless",
        value: dayjs(date).year(),
        onChange: function onChange(_ref4) {
          var value = _ref4.target.value;
          return changeYear(value);
        }
      }, years.map(function (option) {
        return /*#__PURE__*/React__default.createElement("option", {
          key: option,
          value: option
        }, option + 543);
      })), /*#__PURE__*/React__default.createElement("button", {
        className: "borderless",
        onClick: increaseMonth,
        disabled: nextMonthButtonDisabled
      }, /*#__PURE__*/React__default.createElement(RightOutlined, null)));
    },
    isClearable: props.clearable,
    minDate: props.minDate ? new Date(props.minDate) : null,
    maxDate: props.maxDate ? new Date(props.maxDate) : null,
    dateFormat: props.dateFormat ? props.dateFormat : 'yyyy-MM-dd',
    selected: selectedDate,
    disabled: prop.disabled,
    onChange: function onChange(date) {
      setSelectedDate(date);
      var dayjsObj = dayjs(date).isValid() ? dayjs(date) : null;
      setValue(dayjsObj ? dayjsObj.format('YYYY-MM-DD') : '');
      var thaiDate = dayjsObj ? "" + (dayjsObj.year() + 543) + dayjsObj.format('-MM-DD') : '';
      props.onChange(dayjsObj ? dayjsObj.format('YYYY-MM-DD') : '', thaiDate);
    },
    highlightDates: highlightWithRanges,
    customInput: /*#__PURE__*/React__default.createElement(CustomInputWrapper, {
      placeholderName: props.placeholder,
      displayFormat: props.displayFormat,
      style: props.inputStyle
    })
  }, props.datePickerProps));
};

exports.WatDatePicker = WatDatePicker;
exports.range = range;
//# sourceMappingURL=index.js.map
