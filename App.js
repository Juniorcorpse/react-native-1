/* eslint-disable prettier/prettier */
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
  return (
    <Div>
    <AddItemArea items={items}  setItems={setItems}/>
      <Listagem
        data={items}
        renderItem={({item}) => <ListaItem data={item} />}
        keyExtractor={(item, index) => String(index)}
      />
    </Div>
  );
};
