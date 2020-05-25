import styled from 'styled-components/native';

export const InputBox = styled.TextInput.attrs({
    placeholder: "Crie um novo box",
    placeholderTextColor: "#999",
    autoCapitalize: "none",
    autoCorrect: false,
    underlineColorAndroid: "transparent"
    })`
    margin: 20px;
    height: 80px;
    border-radius: 16px;
    padding: 15px 20px;
    font-size: 18px;
    background-color: rgba(41,67,89, 0.3);
`;

export const SubmitBox = styled.TouchableOpacity`
    align-items: center;
    background-color: rgba(41,67,89, 0.3);
    height: 60px;
    margin: 20px;
    padding: 15px 20px;
    border-radius: 26px;
`;

export const TextSubmitBox = styled.Text`
    color: yellowgreen;
`;

export const ImageContainer = styled.View`
    flex-direction: row;
    background-color: rgba(41,67,89, 0.3);
    border-radius: 12px;
    margin: 10px;
    padding: 10px 15px;
`;

export const InfoFile = styled.View`
    margin-left: 20px;
`;

export const ImageInfoShare = styled.View`
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: rgba(41,67,89, 0.3);
    margin-top: 20px;
    padding: 20px 25px;
`;