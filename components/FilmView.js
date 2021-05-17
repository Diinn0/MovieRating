import React from "react";
import {Image, Text, View, StyleSheet, Button} from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

const FilmView = (props) => {
    return (
        <View>
            <Text>{props.props.titre}</Text>
            {/*<Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>*/}
            <Text>{props.props.resumeP}</Text>
            <Text>{props.props.commentsP}</Text>
            <Text>{props.props.noteP}</Text>

        </View>
    );



};

export default FilmView;
