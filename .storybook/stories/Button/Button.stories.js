import React from 'react';
import {View} from 'react-native';

import {MyButton} from './Button';
import {styles} from "./Button.style";

const MyButtonMeta = {
    title: 'MyButton',
    component: MyButton,
    argTypes: {
        onPress: {action: 'pressed the button'},
    },
    args: {
        text: 'Hello world',
    },
    decorators: [
        (Story) => (
            <View style={styles.storyWrap}>
                <Story/>
            </View>
        ),
    ],
};

export default MyButtonMeta;

export const Basic = {};

export const AnotherExample = {
    args: {
        text: 'Another example',
    },
};
