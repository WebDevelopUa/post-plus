import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContext";
import {EvilIcons} from "@expo/vector-icons";

const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('EDIT POST',
            {id: navigation.getParam('id')}
        )}>
            <EvilIcons style={styles.editIcon} name="pencil"/></TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        marginVertical: 24,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#07a1c9',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    content: {
        marginHorizontal: 24,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#063232',
        textTransform: 'uppercase',
    },
    editIcon: {
        fontSize: 35,
        marginRight: 14,
        fontWeight: 'bold',
        color: '#1c6172',
    },
});

export default ShowScreen
