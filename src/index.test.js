import React from 'react'
import { WatDatePicker, range } from '.'
import renderer from 'react-test-renderer'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('WatDatePicker', () => {
  it('WatDatePicker is truthy', () => {
    expect(WatDatePicker).toBeTruthy()
  })
  it('Render match snapshot', () => {
    const handleWatDatePickerChange = (christDate, buddhistDate) => {
      console.log(christDate, buddhistDate)
    }
    const component = renderer.create(
      <WatDatePicker
        value='2020-02-29'
        onChange={handleWatDatePickerChange}
        dateFormat='yyyy-MM-dd'
        minDate='2020-01-29'
        maxDate='2020-03-29'
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Right rendering in Deep Children Value', () => {
    const WatDatePickerInstance = shallow(
      <WatDatePicker
        value='2020-02-29'
        dateFormat='yyyy-MM-dd'
        minDate='2020-01-29'
        maxDate='2020-03-29'
      />
    )
    expect(WatDatePickerInstance.props().selected).toStrictEqual(
      new Date('2020-02-29')
    )
    expect(WatDatePickerInstance.props().minDate).toStrictEqual(
      new Date('2020-01-29')
    )
    expect(WatDatePickerInstance.props().maxDate).toStrictEqual(
      new Date('2020-03-29')
    )
    expect(WatDatePickerInstance.props().dateFormat).toStrictEqual('yyyy-MM-dd')
  })
  it('Value is editable', () => {
    const handleWatDatePickerChange = (christDate, buddhistDate) => {
      console.log(christDate, buddhistDate)
    }
    const WatDatePickerInstance = shallow(
      <WatDatePicker
        value='2020-02-29'
        onChange={handleWatDatePickerChange}
        dateFormat='yyyy-MM-dd'
        minDate='2020-01-29'
        maxDate='2020-03-29'
      />
    )
    WatDatePickerInstance.simulate('change', new Date('2020-03-31'))
    expect(WatDatePickerInstance.props().selected).toStrictEqual(
      new Date('2020-03-31')
    )
    console.log(WatDatePickerInstance.props())
  })
})

describe('range', () => {
  it('range(2020, 2050, 10) is right return value must be [2020, 2030, 2040]', () => {
    expect(range(2020, 2050, 10)).toStrictEqual([2020, 2030, 2040])
  })
  it('range(2020, 2020, 1) is right return value must be []', () => {
    expect(range(2020, 2020, 10)).toStrictEqual([])
  })
  it('range(2020, 2010, 1) is wrong return value must be []', () => {
    expect(range(2020, 2010, 1)).toStrictEqual([])
  })
  it('range(2020, 2025, 0) is wrong return value must be []', () => {
    expect(range(2020, 2025, 0)).toStrictEqual([])
  })
  it('range(2020, 2025, -1) is wrong return value must be []', () => {
    expect(range(2020, 2025, -1)).toStrictEqual([])
  })
  it('range(2020, "justString", 1) is wrong return value must be []', () => {
    expect(range(2020, 'justString', 1)).toStrictEqual([])
  })
  it('range("justString", 2020, 1) is wrong return value must be []', () => {
    expect(range('justString', 2020, 1)).toStrictEqual([])
  })
  it('range() invalid params is wrong return value must be []', () => {
    expect(range()).toStrictEqual([])
    expect(range(2020)).toStrictEqual([])
    expect(range(2020, 2030)).toStrictEqual([])
  })
})
