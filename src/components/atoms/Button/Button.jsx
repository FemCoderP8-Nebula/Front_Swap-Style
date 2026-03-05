import styles from './button.module.css';
import { useNavigate } from 'react-router';
import React from 'react';

const Button = ({ text, BtnClass, path }) => {
  const navigate = useNavigate();

  return (
    <button
      className={styles[BtnClass]} onClick={() => navigate(path)}>{text}</button>
  );
};

export default Button;