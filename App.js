/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/*eslint no-alert: "error"*/
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';
import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';

const Div = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Listagem = styled.FlatList`
  flex: 1;
`;

export default () => {
  const [items, setItems] = useState(lista);

  const addNewItem = (txt) => {
    let newItems = [...items];
    newItems.push({
      task:txt,
      done:false,
    });
    setItems(newItems);
  }

  const toggleDone = (index) => {
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  }

  return (
    <Div>
    <AddItemArea onAdd={addNewItem}/>
      <Listagem
        data={items}
        renderItem={({item, index}) => <ListaItem onPress={() => toggleDone(index)} data={item} />}
        keyExtractor={(item, index) => String(index)}
      />
    </Div>
  );
};
