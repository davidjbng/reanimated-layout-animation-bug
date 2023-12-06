# Reanimated Layout Animation

This was supposed to be a repodruction for https://github.com/software-mansion/react-native-reanimated/issues/4516 but it seems to be working fine.

## How to test

```sh
npm run ios
```

1. Click on `Remove item` -> Layout animation is triggered
2. Click on an item to go to the detail screen
3. Go back to the list screen
4. Click on `Remove item` -> Layout animation is triggered (previously this was broken)
