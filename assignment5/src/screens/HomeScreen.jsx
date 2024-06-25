import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileView}>
                    <Image source={require('../assets/profile.png')}></Image>
                    <View>
                        <Text>Welcome back,</Text>
                        <Text>Eric Atsu</Text>
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
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 10,
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
        padding: 10,
    },
    card: {
        alignItems: 'center',
        padding: 20,
    },
    actionView: {
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
    }
});

export default HomeScreen;