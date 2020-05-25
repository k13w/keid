import styled from 'styled-components/native';

export const StoragedContainer = styled.View`
`;

export const InfoStoraged = styled.View`
    background-color: transparent;
    box-shadow: 10px 500px 50px yellowgreen;
    width: 150px;
    height: 150px;
    justify-content: center;
    align-items: center;
    align-self: center;
`;

export const FolderContainer = styled.TouchableOpacity`
    margin-top: 20px;
    width: 170px;
    height: 170px;
    border-radius: 12px;
    margin-left: 20px;
    background-color: rgba(41,67,89, 0.3);
    border: 1px solid;
    border-color: rgba(164, 164, 164, 0.3);
    justify-content: space-between;
`;

export const FolderIcon = styled.View`
    margin: 20px;
`;

export const FolderDescription = styled.View`
    margin: 20px;
`;

export const ImageContainer = styled.View`
    flex-direction: row;
    background-color: rgba(41,67,89, 0.3);
    border-radius: 12px;
    margin: 8px;
    padding: 10px 15px;
`;

export const InfoFile = styled.View`
    margin-left: 20px;
`;