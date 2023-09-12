module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        'react-native-reanimated/plugin',
        'module:react-native-dotenv',
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.js', '.ios.js', '.android.js', '.ts', '.tsx', '.json'],
            },
        ],
    ]
};
