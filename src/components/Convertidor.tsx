import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'

export const Convertidor = () => {
    const [origen, setOrigen] = useState('cm')
    
    const [destino, setDestino] = useState('mt')

    const [convertir, setConvertir] = useState(0)

    const [resultado, setResultado] = useState(0)

    const handleChangeOrigen = (texto:string)=>{

        setOrigen(texto)
    }

    const handleChangeDestino = (texto:string)=>{
       
        setDestino(texto)
    }
    const handleChangeConvertir = (texto:string)=>{
       const numero = parseFloat(texto)
        setConvertir(numero)
    }
    const handleCalcular = () => {
        if (origen === 'cm' && destino === 'mt'){

            const result = convertir / 100
            setResultado(result)


        }
        else if (origen === 'mt' && destino == 'cm'){

            const result = convertir * 100 
            setResultado(result)

        }
        else if (origen ==="ml" && destino ==="cm") {
            const result= convertir / 10;
           setResultado(result)
               }


    }
    return (
        <View>


        <Text>Origen</Text>
        <TextInput
        defaultValue={origen}
        style={styles.input}
        maxLength={2}
        onChangeText={
            (text) => handleChangeOrigen(text)
        }
        
        />
         <Text>Destino</Text>
        <TextInput
        defaultValue={destino}
        style={styles.input}
        maxLength={2}
        onChangeText={

            (text) => handleChangeDestino(text)
        }
        
        />
         <Text>Convertir</Text>
        <TextInput
        defaultValue={convertir.toString()}

        style={styles.input}
        
        onChangeText={

            (text) => handleChangeConvertir(text)
        }
        
        />
         <Text>Resultado</Text>
        <TextInput
        defaultValue={resultado.toString()}
        style={styles.input}
        
        />
        <View style={styles.button}>
        <Button title="Calcular"
        onPress={handleCalcular}/>

        </View>
       
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        marginTop:10,

    },

    input:{
        borderWidth: 1,
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:5,
        borderColor:'black'

    }
})