import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import AverageValue from './averageValue.component';

describe('AverageValue: Component', () => {
  const defaultProps = {
    arithmeticAverage: 22,
  };

  const component = (props = {}) => (
    <AverageValue {...defaultProps} {...props} />
  );

  it('should render with average-value class', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('.average-value'))
      .to.have.length(1);
  });

  describe('Message Rendering: ', () => {
    it('should render message', () => {
      const wrapper = shallow(component());
      expect(wrapper.find(FormattedMessage))
        .to.have.length(1);
    });
  });
});