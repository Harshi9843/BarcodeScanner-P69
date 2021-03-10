import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component{

    constructor(){
        super();
        this.state={
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }

    getCameraPermission = async ()=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);

        this.setState({
            hasCameraPermissions:status === "granted"
        });
    }

    handleBarcodeScanned = async ({type, data}) => {
        this.setState({
            scanned: true,
            scannedData: data,
            buttonState: 'normal'
        })
    }

    render(){
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;

        if(buttonState === "clicked" && hasCameraPermissions){
            return(
                <BarCodeScanner
                onBarCodeScanned = {scanned ? undefined: this.handleBarcodeScanned}
                style = {StyleSheet.absoluteFillObject}
                />
            )
        }
        else if(buttonState === "normal"){

        return(
            <View style = {styles.container}>
                <Text style = {styles.displayText}>{
                    hasCameraPermissions === true ? this.state.scannedData: "Request Camera Permission"
                }</Text>

                <TouchableOpacity
                onPress = {this.getCameraPermission}
                style = {styles.scanButton}>
                    <Text style ={styles.buttonText}>Scan QR code</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    displayText:{
        flex: 1,
        justifyContent: 'center',
        textDecorationLine: 'underline',
        marginTop: 25
    },

    buttonText:{
        flex: 1,
        justifyContent: 'center',
        margin: 10
    },

    scanButton:{
        justifyContent: 'center',
        backgroundColor: 'blue',
        marginTop: 1
    }
})