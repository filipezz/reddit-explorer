import React from 'react';

import { Container, Error } from './styles';

interface IProps {
  numberOfRepetitions?: number;
  error?: string;
}
const Ghost: React.FC = () => {
  return (
    <Container>
      <div />
      <section>
        <div />
        <div />
        <div />
      </section>
    </Container>
  );
};

const GhostElement: React.FC<IProps> = ({
  error,
  numberOfRepetitions = 1,
}: IProps) => {
  let counter;
  const ghostArray = [];

  for (counter = 0; counter < numberOfRepetitions; counter++) {
    ghostArray.push(Ghost);
  }

  return (
    <>
      {error ? (
        <Error>
          <strong>{error}</strong>
        </Error>
      ) : (
        <>
          {ghostArray.map((Element, index) => (
            <Element key={index} />
          ))}
        </>
      )}
    </>
  );
};

export default GhostElement;
