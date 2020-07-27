/* eslint-disable semi */
/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import styled from 'styled-components/native';


const AdditemArea = styled.View`
background-color:#ccc;
padding:10px;
`;

const AdditemImput = styled.TextInput`
background-color:#fff;
font-size:15px;
height:50px;
border-radius: 5px;
padding: 2px 10px;
`;

export default (props) => {
    const [item, setItem] = useState('');

    const handleSubmit = () => {
        if (item.trim() != ''){
            props.onAdd(item.trim());
            setItem('');
        }
    }

    return (
    <AdditemArea>
    <AdditemImput
        placeholder="Digite um novo Item!"
        value={item}
        onChangeText={e=>setItem(e)}
        onSubmitEditing={handleSubmit}
        returnKeyType="send"
    />
    </AdditemArea>
    );
};
