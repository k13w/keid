import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: #FFF;
`;

export const HeaderBackground = styled.ImageBackground`
	height: 40%;
	width: 100%;
	border-top-left-radius: 400px;
`;

export const PanelLogin = styled.View`
	padding: 32px;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 20px;
  height: 50px;
  background-color: #8258FA;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18%;
  border-radius: 26px;
`;

export const SubmitButtonText = styled.Text`
  color: #e6e6e6;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2.8px;
`;

export const Footer = styled.View`
	background-color: #8258FA;
	height: 94px;
  border-top-right-radius: 200px;
`;