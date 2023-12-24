import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Button, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Header } from './components/Header';
import { ShoppingList } from './components/ShoppingList';
import { AddshoppingList } from './components/AddshoppingList';

export default function App() {

  const [shoppingList,setShoppingList]=useState([
    {
      todo:"Buy Computer",
      id:'1'
    },
    {
      todo:"Buy Mobile",
      id:'2'
    },
    {
      todo:"Buy Bike",
      id:'3'
    }
  ])

  const [UpdateItem,setUpdateItem]=useState({})

  const deleteItem=(item)=>{
    setShoppingList((prevshoppingList)=>{
       return prevshoppingList.filter((listitem)=>listitem.id!=item.id)
    })
  }

  const addItem=(item)=>{
    if(item.length==0)
    {
      Alert.alert("Please Enter an item")
      return
    }
    setShoppingList([...shoppingList,{todo:item,id:Math.random().toString()}])
  }

  const dismissKeyboard=()=>{
    Keyboard.dismiss()
  }


  const updateItem=(item)=>{
    setUpdateItem(item)
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <AddshoppingList addItem={addItem} UpdateItem={UpdateItem} list={shoppingList} setShoppingList={setShoppingList}/>
      <ShoppingList list={shoppingList} deleteItem={deleteItem} updateItem={updateItem}/>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50
  },
  
});
