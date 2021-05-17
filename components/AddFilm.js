import React from 'react';
import {View, TextInput, StyleSheet} from "react-native";
import {Button, Input, Text} from 'react-native-elements';
import {useController, useForm} from "react-hook-form";
import {Film} from "../Entity/Film";

const styles = StyleSheet.create({
    container: {
        textAlignVertical: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    textInput: {
        width: 350,
        height: 40,
        margin: 5,
        paddingLeft: 6,
        borderBottomWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderRadius: 3
    },
    button: {
        backgroundColor: '#E7414D',
        width: 300
    }
});

export default function AddFilm({data, addFilm}) {
    const { control, handleSubmit } = useForm();

    const Input = ({name, control, placeholder}) => {
        const {field} = useController({
            control,
            defaultValue: '',
            name,
        })
        return (
            <TextInput
                placeholder={placeholder}
                selectionColor='#477FA2'
                style={styles.textInput}
                value={field.value}
                onChangeText={field.onChange}
            />
        );
    };

    const InputRating = ({name, control}) => {

        const {field} = useController({
            control,
            defaultValue: '',
            name,
        })
        return (
            <TextInput
                placeholder="Note/5"
                value={field.value}
                onChangeText={field.onChange}
                keyboardType='numeric'
                maxLength={1}
                selectionColor='#477FA2'
                style={styles.textInput}
            />
        );
    };

    const onSubmit = (e) => {
        //console.log(e);
        let film = new Film(e.title, null, e.desc, null, e.note);
        addFilm(film);
    };

    return(
        <View style={styles.container} className="wrapper">
            <Text h2>Nouveau film</Text>
            <View>
                <Input control={control} name="title" placeholder="Title" />
                <Input control={control} name="desc" placeholder="Description"/>
                <InputRating control={control} name="note" />
                <Button
                    buttonStyle={styles.button}
                    title="submit"
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </View>
    )
}