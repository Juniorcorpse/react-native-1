/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableOpacity`
padding:10px;
background-color:#EEE;
flex-direction:row;
`;

const ItemCheck = styled.View`
width:20px;
height:20px;
border-radius:10px;
border:5px solid #fff;
background-color:${props=>props.done ? '#ccc' : 'transparent'};
`;

const ItemText = styled.Text`
font-size:15px;
flex:1;
`;


export default (props) => {
    return (
        <Item onPress={props.onPress} activeOpacity={0.7}>
            <>
                <ItemText>{props.data.task}</ItemText>
                <ItemCheck done={props.data.done}></ItemCheck>
            </>
        </Item>
    );
};
