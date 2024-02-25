import {View, Text, FlatList} from 'react-native';
import React from 'react';
import CartProduct from './CardProduct/CartProduct';
const imgList = [
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 10000000,
    id: 1,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 1000,
    id: 2,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 1000,
    id: 3,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 1000,
    id: 4,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Iphone 15',
    ram: '8/32GB',
    price: 1000,
    id: 5,
    img: 'https://plus.unsplash.com/premium_photo-1682309761340-3f8b1cbaa655?auto=format&fit=crop&q=80&w=1824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
const Hello = () => {
  return (
    <FlatList
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      numColumns={2}
      data={imgList}
      renderItem={({item}) => <CartProduct item={item} />}
    />
  );
};

export default Hello;
