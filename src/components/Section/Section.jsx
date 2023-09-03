import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <span>{children}</span>
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
