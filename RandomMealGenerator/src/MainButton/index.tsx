import React, {useState} from 'react';

import {Container, Title, SubTitle, Button, ButtonText} from './styles';

interface MainButtonProps {
  getData: () => Promise<void>;
}

const MainButton = ({getData}: MainButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleGetMeal = async () => {
    setLoading(true);
    await getData();
    setLoading(false);
  };

  return (
    <Container>
      <Title>Feeling hungry?</Title>
      <SubTitle>Get a random meal by clicking below</SubTitle>
      <Button
        activeOpacity={0.7}
        onPress={() => handleGetMeal()}
        isLoading={loading}
        disabled={loading}>
        <ButtonText>{loading ? 'Carregando...' : 'GET MEAL 🍔'}</ButtonText>
      </Button>
    </Container>
  );
};

export default MainButton;
