# Changelog

## 🎉 Release - v2 🎉

## [v2.1.2] - `2025-02-13`

### Edited

- Edited `peerDependencies` to support react 18 and later

## [v2.1.1] - `2025-02-13`

### Updated

- Patched for `peerDependencies` back-compatibility with `react^18.3.1`

## [v2.1.0] - `2025-02-11`

### Updated

- Supported `React 19` ✨
- Updated dependencies
- Migrated React 19 forwardRef
- Migrated deprecated `React.MutableRefObject` to `React.RefObject`

### Edited

- Edited `customInput` props type to `React.ElementType` to support more various kinds component
- Edited more patched css
- Refactor className, style with `cn` utils

## [v2.0.2] - `2024-11-19`

### Updated

- Fixed known vulnerabilities
- Updated dependencies
- Fixed bugs on css in example project

## [v2.0.1] - `2024-09-20`

### Updated

- Fixed known vulnerabilities
- Updated dependencies

## [v2.0.0] - `2024-09-09`

### Added

- `TypeScript` is now supported.
- Added new props `noIntegratedStyle` which can be define to exclude integrated css

### Updated

- Updated dependencies

## 🎉 Release - v1 🎉

## [v1.3.6] - `2024-08-15`

### Updated

- Updated dependencies

## [v1.3.5] - `2024-06-21`

### Edited

- Updated security alerts from Dependabot

## [v1.3.4] - `2024-06-21`

### Edited

- Updated dependencies (react-datepicker@7.1.0)
- Drop support of example source code with `create-react-app` (You can access via [Source Code v1.3.3](https://github.com/buildingwatsize/thaidatepicker-react/tree/v1.3.3/example))

## [v1.3.3] - `2024-05-10`

### Added

- More example for Typescript project

### Edited

- Fixed bugs for explicit define types on package.json
- Code preparing for Typescript migration (defaultProps will be removed)

### Updated

- dependencies

## [v1.3.2] - `2024-05-02`

### Updated

- dependencies

## [v1.3.1] - `2024-04-19`

### Edited

- Refactor code to explicit props declaration and also minimize the export
- Refactor code to support webpack 5
- Updated example for selectable with input formatting

## [v1.3.0] - `2024-04-18`

### Added 

- Support `dayjs/locale/th` as default
- Support `dayjs/plugin/buddhistEra` as default

### Updated

- dependencies
- `example/with-vite-andt-tailwind`'s deps, source code, and also bumps the vite major version

## [v1.2.1] - `2024-02-20`

### Edited

- Fixed bugs on `dist` output when publish to npmjs

## [v1.2.0] - `2024-02-14`

### Edited

- 🌹 Happy Valentine Day
- updated dependencies (`Alert!` bump major version. So if something not working as expected, don't hesitate for opening the issues/PR.)
- updated demo `example/with-vite-antd-tailwind`

## [v1.1.0] - `2023-09-27`

### Edited

- updated dependencies

## [v1.0.5] - `2023-06-12`

### Edited

- Fixed package linking

## [v1.0.4] - `2023-06-09`

### Edited

- bump dependencies

## [v1.0.3] - `2023-04-11`

### Added

- Vercel Analytics for demo project

### Edited

- bump dependencies
- fixed z-index over the properties table in example

## [v1.0.2] - `2023-01-26`

### Added

- some devDependencies like mockdate for ease to develop
- supporting es import and be standalone without css
- example for this new release

### Edited

- code structure as component separated
- package.json scripts
- replace enzyme testing with react testing library

### Updated

- dependencies and react@18.2

### Removed

- eslint for reducing project complexity (using vscode extension instead)
- antd, @ant-design/icons for reduce package size (customization available)

## [v1.0.0...v1.0.1] - `2023-01-25`

I have to skipping for the old versions which was unpublished once on first created.

---

## Legacy Version - v0.x.x

## [v0.2.2] - `2022-06-16`

- [Fixed] When the value of props.value changes, the state will no longer be updated.
- [Updated] Dependencies

## [v0.2.1] - `2022-04-29`

- [Removed] some dependency which not used anymore
- [Edited] Example page for update latest version

## [v0.2.0] - `2022-04-29`

- [Updated] Dependencies (Note: Upgrade major version of `React@18.1.0` and `react-datepicker`)
- [Added] `inputProps` property for customizable of input
- [Added] `inputProps` description on README.md and also a missing one `reactDatePickerProps`
- [Edited] ESLint and prettier
- [Edited] missing remove unused code

## [v0.1.5] - `2021-04-02`

- [Updated] Dependencies
- [Fixed] bug on "Form Submit" after click prev/next month button

## [v0.1.4] - `2021-01-19`

- [Merged] [PR#2](https://github.com/buildingwatsize/thaidatepicker-react/pull/2)
- [Added] CodeQL Analysis
- [Added] Supported props `disabled` and `readOnly`
- [Added] Supported year boundaries with `yearBoundary` props. The default is 99 btw It depends on `minDate` and `maxDate`
- [Added] Clearable button will hide on `disabled` or `readOnly` props is true. The default is true
- [Added] Supported more props of `react-datepicker` by using `reactDatePickerProps` props
- [Fixed] some buggy on yarn

## [v0.1.3] - `2021-01-12`

- [Merged] [PR#1](https://github.com/buildingwatsize/thaidatepicker-react/pull/1)
- [Added] more features, displayFormat, inputStyle, and clearable

## [v0.1.2] - `2021-01-11`

- [Fixed] Known vulnerabilities
- [Added] Link for demo
- [Added] display date format for input
- [Added] clearable props to let user clear their selected date
- [Added] inputStyle to control input box styling

## [v0.1.1] - `2020-05-11`

- Initialized Project

## [v0.1.0] - `2020-05-11`

- Initialized Project

[v2.1.2]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v2.1.2
[v2.1.1]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v2.1.1
[v2.1.0]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v2.1.0
[v2.0.2]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v2.0.2
[v2.0.1]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v2.0.1
[v2.0.0]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v2.0.0
[v1.3.6]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v1.3.6
[v1.3.5]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v1.3.5
[v1.3.4]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v1.3.4
[v1.3.3]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v1.3.3
[v1.3.2]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v1.3.2
[v1.3.1]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v1.3.1
[v1.3.0]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v1.3.0
[v1.2.1]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v1.2.1
[v1.2.0]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v1.2.0
[v1.1.0]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v1.1.0
[v1.0.5]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v1.0.5
[v1.0.4]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v1.0.4
[v1.0.3]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v1.0.3
[v1.0.2]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v1.0.2
[v0.2.2]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v0.2.2
[v0.2.1]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v0.2.1
[v0.2.0]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v0.2.0
[v0.1.5]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v0.1.5
[v0.1.4]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v0.1.4
[v0.1.3]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v0.1.3
[v0.1.2]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v0.1.2
[v0.1.1]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v0.1.1
[v0.1.0]: https://github.com/buildingwatsize/thaidatepicker-react/releases/tag/v0.1.0