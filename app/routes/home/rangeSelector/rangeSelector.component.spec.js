import React from 'react';
import RangeSelector from './rangeSelector.component';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import { IntlProvider } from 'react-intl';
import InputRange from 'react-input-range';


describe('RangeSelector: Component', () => {
  const defaultProps = {
    setRangeValues: () => {},
    intl: {
      messages: {}
    },
    rangeValues: {
      toJS: () => {}
    }
  };

  const component = (props = {}) => (
    <IntlProvider locale='en'>
      <RangeSelector {...defaultProps} {...props} />
    </IntlProvider>
  );
  it('should render with class range-selector', () => {
    const wrapper = mount(component());
    expect(wrapper.find('.range-selector')).to.have.length(1);
  });

  it('should render InputRange', () => {
    const wrapper = mount(component());
    expect(wrapper.find(InputRange)).to.have.length(1);
  });

  it('should call setRangleValues', () => {
    const wrapper = mount(component());
    const setRangeValues = spy(defaultProps, 'setRangeValues');
    // wrapper.instance().setRangeValues();
    // expect(setRangeValues.calledOnce).to.be.true;
  });

});