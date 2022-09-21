import React from 'react';

interface Props {
  text: string;
}

const PageHeader: React.FC<Props> = ({ text }) => {
  return <h1>{text}</h1>;
};

export default PageHeader;
