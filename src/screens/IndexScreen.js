import React, {useContext, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as BlogContext} from "../context/BlogContext";
import {Feather} from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";

const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost, getBlogPosts} = useContext(BlogContext);

    useEffect(() => {
        getBlogPosts();
        const listener = navigation.addListener('didFocus', () => getBlogPosts());
        return () => listener.remove();
    }, [])

    return (
        <View style={styles.container}>
            <CustomButton viewStyle={styles.button}
                          textStyle={styles.button}
                          onPress={() => navigation.navigate('CREATE POST')}>+ post </CustomButton>
            <FlatList
                data={state}
                showsVerticalScrollIndicator={false}
                keyExtractor={blogPost => blogPost.title + Math.floor(Math.random() * 99999)}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('SHOW POST', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.listTitle}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather style={styles.listIcon} name='trash'/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('CREATE POST')}>
            <Feather style={styles.plusIcon} name="plus"/></TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#ecf0f1',
        paddingBottom: 120,
        marginHorizontal: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 7,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#07a1c9',
        borderRadius: 5,
        backgroundColor: '#b7d7e0'
    },
    listTitle: {
        fontSize: 18,
        margin: 14,
        fontWeight: 'bold',
    },
    listIcon: {
        fontSize: 24,
        margin: 14,
        fontWeight: 'bold',
        color: '#a50707',
    },
    plusIcon: {
        fontSize: 30,
        marginRight: 14,
        fontWeight: 'bold',
        color: '#1c6172',
    },
    button: {
        textAlign: 'center',
        display: 'flex',
        alignSelf: 'center',
    },
});

export default IndexScreen;
