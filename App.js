import React ,{useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet,Text,View,Button,TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveDate =async (value)=>{
    console.log(value,'log: le numero saisi')
    const jsonvalue =JSON.stringify(value)
    try{
        await AsyncStorage.setItem('@storage_key',jsonvalue)
        alert('Bien enreigistrer!')
    } catch(e){
        console.log(e,'log: Erreur pendant la sauvegarde')
    }
}
    export default function App(){
        const[phone,setPhone]=useState('')
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text>Write Data</Text>

                <TextInput
                style={{ marginVertical: 10,fontsize:17,color: "red" }}
                value={phone}
                placehorlder="+223 0000 0000"
                autocompleteType="Tel"
                keyboardType="phone-pad"
                TextContentType="telephone"
                onChangeText={setPhone}
                />
                <Button
                 onPress={() => saveDate(phone)}
                 title="Save Data"/>
            </View>
        );
        
    }
    const styles =StyleSheet.create({
        container: {
            flex:1,
            backgroundcolor: '#16F1B4',
            alignItems: 'center',
            justifyContent:'center',

        },
    });
