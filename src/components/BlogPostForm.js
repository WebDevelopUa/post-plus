import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import CustomButton from "./CustomButton";

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    const checkInput = () => (title !== '') ? onSubmit(title, content) : alert('Enter title')

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Edit Title:</Text>
            <TextInput style={styles.input}
                       value={title}
                       onChangeText={newTitle => setTitle(newTitle)}
                       autoCorrect={false}
                       autoCapitalize="none"
                       autoFocus={true}
                       placeholder="Enter title"/>
            <Text style={styles.label}>Edit Content:</Text>
            <TextInput style={styles.textarea}
                       value={content}
                       onChangeText={newContent => setContent(newContent)}
                       autoCorrect={false}
                       autoCapitalize="none"
                       multiline={true}
                       placeholder="Enter message"/>
            <CustomButton viewStyle={styles.button}
                // onPress={() => onSubmit(title, content)}
                          onPress={checkInput}
            >Submit</CustomButton>
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        marginVertical: 24,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#07a1c9',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#07a1c9',
        color: '#07a1c9',
        marginBottom: 35,
        marginHorizontal: 30,
        padding: 15,
        backgroundColor: '#ffffff',
    },
    textarea: {
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#07a1c9',
        color: '#07a1c9',
        marginBottom: 30,
        marginHorizontal: 30,
        padding: 15,
        minHeight: 100,
        backgroundColor: '#ffffff',
    },
    label: {
        fontSize: 20,
        marginVertical: 5,
        marginHorizontal: 30,
        color: '#07a1c9',
    },
    button: {
        marginTop: 10,
        textAlign: 'center',
        display: 'flex',
        alignSelf: 'center',
    },
});

export default BlogPostForm
