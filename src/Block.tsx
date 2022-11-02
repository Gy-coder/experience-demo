import React from 'react';
import Icon from './Icon';

interface Props {
  name: string;
  message: string;
}

const Block = (props: Props) => {
  const { message, name } = props;
  return (
    <div
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: 200,
        height: 200,
        boxShadow:
          '0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%)',
        cursor: 'pointer'
      }}
    >
      <Icon name={name} />
      {message}
    </div>
  );
};

export default Block;
