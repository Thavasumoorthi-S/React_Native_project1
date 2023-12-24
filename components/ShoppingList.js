    import { cloneElement } from "react"
import { Button, FlatList, StyleSheet,Text, TouchableOpacity, View} from "react-native"

export const ShoppingList=({list,deleteItem,updateItem})=>{
    
    return(
        <FlatList

        data={list}

        keyExtractor={(item)=>item.id}

        ItemSeparatorComponent={()=>{
            <View style={styles.separator}></View>
        }}


        renderItem={({item})=>{

            return(
                // <TouchableOpacity onPress={()=>deleteItem(item)}>
                <View style={styles.itemcont}>
                 <Text style={styles.item}>{item.todo}</Text>
                 <View style={styles.edit}><Button title="EDIT" onPress={()=>updateItem(item)} /></View>
                 <View style={styles.delete}><Button title="DELETE" color='red' onPress={()=>deleteItem(item)}/></View>
                </View>
             
                
                // </TouchableOpacity>
            )
        }
    
    }
        style={styles.flatlist}

        />
    )
}


const styles=StyleSheet.create({

    item:{
        fontWeight:'bold',
        padding:20,
        flex:2,
        fontSize:17,
    },
    separator:{
        height:1,
        backgroundColor:"lightgray"
    },
    flatlist:{
        paddingTop:20
    },
    itemcont:{
        flexDirection:'row',
    },
    edit:{
        flex:1,
        // marginRight:3,
        justifyContent:'center',
        alignItems:'center'
    },
    delete:{
        flex:1,
        // marginRight:3,
        justifyContent:'center',
        alignItems:'center'
    }
})