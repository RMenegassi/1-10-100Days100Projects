import React from 'react';

import {
  ScrollView,
  ContainerImage,
  Image,
  Title,
  ContainerMainData,
  ContainerRowText,
  TextBold,
  Text,
} from './styles';

interface ItemProps {
  data: any;
}

const Item = ({data}: ItemProps) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (data.meals[0][`strIngredient${i}`]) {
      ingredients.push(
        `${data.meals[0][`strIngredient${i}`]} - ${
          data.meals[0][`strMeasure${i}`]
        }`,
      );
    } else {
      break;
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ContainerImage>
        <Image source={{uri: data.meals[0].strMealThumb}} />
      </ContainerImage>
      <Title>{data.meals[0].strMeal}</Title>
      <ContainerMainData>
        <ContainerRowText>
          <TextBold>Category: </TextBold>
          <Text>{data.meals[0].strCategory}</Text>
        </ContainerRowText>
        <ContainerRowText>
          <TextBold>Area: </TextBold>
          <Text>{data.meals[0].strArea}</Text>
        </ContainerRowText>
        <ContainerRowText>
          <TextBold>Tags: </TextBold>
          <Text>{data.meals[0].strTags || 'Sem Tags registradas'}</Text>
        </ContainerRowText>
      </ContainerMainData>
      <Title>Ingredients</Title>
      {ingredients.map((item, index) => (
        <Text key={`${item} - ${index}`}>{item}</Text>
      ))}
      <Title>Steps</Title>
      <Text>{data.meals[0].strInstructions}</Text>
    </ScrollView>
  );
};

export default Item;
