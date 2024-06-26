import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileView}>
                    <Image source={require('../assets/profile.png')}></Image>
                    <View style={{paddingLeft: 15}}>
                        <Text style={{fontSize: 14, color: '#aaa'}}>Welcome back,</Text>
                        <Text style={{fontSize: 22}}>Eric Atsu</Text>
                    </View>
                </View>
                <View style={styles.search}>
                    <Image source={require('../assets/search.png')}></Image>
                </View>
            </View>
            <View style={styles.card}>
                <Image source={require('../assets/Card.png')}></Image>
            </View>
            <View style={styles.actionView}>
                <View>
                    <Image source={require('../assets/send.png')} style={styles.actionViewSend}></Image>
                    <Text>Send</Text>
                </View>
                <View>
                <Image source={require('../assets/recieve.png')}></Image>
                    <Text>Recieve</Text>
                </View>
                <View>
                <Image source={require('../assets/loan.png')}></Image>
                    <Text>Loan</Text>
                </View>
                <View>
                <Image source={require('../assets/topUp.png')}></Image>
                    <Text>TopUp</Text>
                </View>
            </View>
            <View style={styles.transactionView}>
                <Text>Transaction</Text>
                <Text style={styles.sellAll}>Sell all</Text>
            </View>

            <View style={styles.transaction}>
                <View style={styles.transactionImg}>
                    <Image source={require('../assets/apple.png')} ></Image>
                    <View style={{paddingLeft: 10}}>
                        <Text>Apple</Text>
                        <Text style={{fontSize: 11, color: '#aaa'}}>Entertainment</Text>
                    </View>
                </View>
                <Text>- $5.99</Text>
            </View>

            <View style={styles.transaction}>
                <View style={styles.transactionImg}>
                    <Image source={require('../assets/spotify.png')} ></Image>
                    <View style={{paddingLeft: 10}}>
                        <Text>Spotify</Text>
                        <Text style={{fontSize: 11, color: '#aaa'}}>Music</Text>
                    </View>
                </View>
                <Text>- $122,99</Text>
            </View>

            <View style={styles.transaction}>
                <View style={styles.transactionImg}>
                    <Image source={require('../assets/moneyTransfer.png')} ></Image>
                    <View style={{paddingLeft: 10}}>
                        <Text>Money Transfer</Text>
                        <Text style={{fontSize: 11, color: '#aaa'}}>Transaction</Text>
                    </View>
                </View>
                <Text style={{color: 'blue'}}>+ $300</Text>
            </View>

            <View style={styles.transaction}>
                <View style={styles.transactionImg}>
                    <Image source={require('../assets/grocery.png')} ></Image>
                    <View style={{paddingLeft: 10}}>
                        <Text>Grocery</Text>
                        <Text style={{fontSize: 11, color: '#aaa'}}>Shopping</Text>
                    </View>
                </View>
                <Text>- $88</Text>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileView: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    search: {
        padding: 30,
    },
    card: {
        alignItems: 'center',
        padding: 20,
    },
    actionView: {
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    actionViewSend: {
        backgroundColor: '#ddd',
        borderRadius:100,
    },
    transactionView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    sellAll: {
        color: 'blue',
    },
      transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        margin: 10,
        
      },
      transactionImg: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }
});

export default HomeScreen;