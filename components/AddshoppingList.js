import { useEffect, useState } from "react"
import { Button, TextInput ,StyleSheet,View,Alert} from "react-native"



export const AddshoppingList=({addItem,UpdateItem,list,setShoppingList})=>{
    const [item,setItem]=useState("")
    
    const [title,setTitle]=useState("Add Item")
    

    useEffect(()=>{
        console.log(UpdateItem)
            if(UpdateItem.todo)
            {
                setItem(UpdateItem.todo)
                setTitle("Update  Item")
            }
            
    

    },[UpdateItem])
    const addHandler=(item)=>{
        if(title=="Update  Item")
        {
            if(item.length==0)
            {
                Alert.alert("Please Enter at least one letter")

            }
            else
            {
                const result=list.map((Items)=>{
                    return Items.id==UpdateItem.id?{...Items,todo:item}:Items
                })
                console.log(result)
                setShoppingList(result)
                setTitle("Add Item")
                setItem("")

            }
            
        }
        else
        {
        addItem(item) 
        setItem("")
        }

    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter an Item" onChangeText={(item)=>setItem(item)} value={item}/>
            <Button title={title} onPress={()=>addHandler(item)} />
        </View>
    )
}

const styles=StyleSheet.create({

    input:{
        borderBottomWidth:1,
        borderBottomColor:"lightgray",
        marginVertical:20,
        textAlign:"center",
    },
    container:{
      marginHorizontal:40
    }
})