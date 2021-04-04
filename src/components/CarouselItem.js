import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions,TextInput } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
          
            <View style={styles.textView}>
                <Text style={styles.itemTitle}> {item.title}</Text>
            </View>
            <View>
            <Text style={styles.textView}>Brand Name: </Text>
            <TextInput style={styles.textinput} />
            </View>
            <View>
            <Text style={styles.textView}>Grade: </Text>
            <TextInput style={styles.textinput} />
            </View>
            <View>
            <Text style={styles.textView}>Type: </Text>
            <TextInput style={styles.textinput} />
            </View>
            <View>
            <Text style={styles.textView}>Quality: </Text>
            <TextInput style={styles.textinput} />
            </View>
            <View>
            <Text style={styles.textView}>Price: </Text>
            <TextInput style={styles.textinput} />
            </View>
            <View 
                  //onClick={this.checkLogin}
                style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Add</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        height: height / 2,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        color: 'black',
        fontSize: 20,
        marginLeft:10,
        marginBottom: 10,
        fontWeight: "bold",
        elevation: 5
    },
    textinput:{
        position: 'absolute',
        marginLeft:150,
        fontSize:15, 
        height: 30, 
        width:150,
        borderColor: "#00000", 
        borderWidth: 2,
         padding: 2 
        },
    image: {
        width: width - 20,
        height: height / 3,
        borderRadius: 10
    },
    itemTitle: {
        color: 'black',
        fontSize: 22,
        marginTop:10,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5,
        alignSelf:"center"
    },
    itemDescription: {
        color: 'black',
        fontSize: 12,
        elevation: 5
    }
})

export default CarouselItem