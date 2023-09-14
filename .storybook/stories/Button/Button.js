import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './Button.style';

export const MyButton = ({onPress, text}) => (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
);



