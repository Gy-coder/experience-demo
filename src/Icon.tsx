import React from 'react';

interface Props {
  name: string;
  size?: number;
}

const Icon = (props: Props) => {
  const { name, size = 50 } = props;
  return (
    <svg style={{ width: size, height: size }}>
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  );
};

export default Icon;
