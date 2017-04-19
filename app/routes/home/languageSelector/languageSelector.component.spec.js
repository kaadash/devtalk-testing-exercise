import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import LanguageSelector from './languageSelector.component';
import { appLocales } from '../../../i18n';

describe('LanguageSelector: Component', () => {
  const defaultProps = {
    language: 'en',
    setLanguage: () => {},
    router: {
      push: () => {},
      location: {
        pathname: ''
      }
    },
  };

  const component = (props = {}) => (
    <LanguageSelector {...defaultProps} {...props} />
  );

  it('should render language-selector class', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('.language-selector')).to.have.length(1);
  });

  it('should render all locales options', () => {
    const wrapper = shallow(component());
    expect(wrapper.find('option')).to.have.length(appLocales.length);
  });

  it('should change language', () => {
    const push = spy(defaultProps.router, 'push');
    const wrapper = shallow(component());
    wrapper.instance().handleLanguageChange({ target: { value: 'de' } });
    expect(push.withArgs('/de').calledOnce).to.be.true;
  });
});