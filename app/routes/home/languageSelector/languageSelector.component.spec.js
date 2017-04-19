import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {spy, assert} from 'sinon';
import LanguageSelector from './languageSelector.component';
import { appLocales } from '../../../i18n';
import { Route } from 'react-router';


describe('LanguageSelector: Component', () => {
  const defaultProps = {
    language: 'en',
    setLanguage: () => {},
    router: {
      push: () => {}
    },
  };

  const routeMock = () => (
    <Route/>
  );

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
    // const push = spy()
    // const wrapper = shallow(component());
    // wrapper.instance().handleLanguageChange('en');
    //
    // expect(assert()).to.be.true;
  });
});