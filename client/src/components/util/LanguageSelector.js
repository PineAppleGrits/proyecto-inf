import React from 'react';
import Select, { components } from 'react-select';
import PropTypes from 'prop-types';
import i18n from '../../i18n';

const options = [
  { value: 'es', label: 'Español', icon: 'ar.svg' },
  { value: 'en', label: 'English', icon: 'us.svg' },
  { value: 'fr', label: 'Français', icon: 'fr.svg' },
  { value: 'de', label: 'Deutsch', icon: 'de.svg' },
];
const { Option } = components;
const IconOption = function (property) {
  const { data } = property;
  return (
    <Option {...property}>
      <img
        src={`/flags/${data.icon}`}
        style={{ width: 20, marginRight: 2 }}
        alt={data.label}
      />
      {data.label}
    </Option>
  );
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
  }),
  container: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...provided,
      opacity,
      transition,
      backgroundColor: 'transparent',
      border: 'none',
    };
  },
  control: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return {
      ...provided,
      opacity,
      transition,
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: '0',
    };
  },
};
const LanguageSelector = function (props) {
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.value);
  };
  const { width } = props;
  return (
    <div className="w-100">
      <Select
        onChange={(val) => {
          changeLanguage(val);
        }}
        defaultValue={options[0]}
        options={options}
        styles={customStyles}
        width={width}
        components={{ Option: IconOption }}
      />
    </div>
  );
};
LanguageSelector.propTypes = {
  width: PropTypes.string,
};
LanguageSelector.defaultProps = {
  width: '100%',
};
export default LanguageSelector;
