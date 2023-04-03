import styled from 'styled-components/native';

interface ButtonProps {
  isLoading: boolean;
}

export const Container = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: black;
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 10px;
`;

export const SubTitle = styled.Text`
  color: black;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${props => (props.isLoading ? 'gray' : '#35bad8;')};
  padding: 10px 30px;
  border-radius: 5px;
  margin: 10px 0px;
`;

export const ButtonText = styled.Text`
  color: white;
`;
