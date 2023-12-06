import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Animated, { LinearTransition } from "react-native-reanimated";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const initialItems = [
  { id: 1, name: "item 1" },
  { id: 2, name: "item 2" },
  { id: 3, name: "item 3" },
  { id: 4, name: "item 4" },
  { id: 5, name: "item 5" },
];

function Home() {
  const { navigate } = useNavigation();
  const [items, setItems] = useState(initialItems);

  return (
    <View style={{ padding: 4 }}>
      <Button onPress={() => setItems(items.slice(1))} title="Remove Item" />
      <View style={{ marginTop: 8, gap: 8 }}>
        {items.map((item) => (
          <Animated.View key={item.id} layout={LinearTransition.delay(200)}>
            <TouchableOpacity onPress={() => navigate("Details")}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ccc",
                  height: 50,
                }}
              >
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </View>
  );
}

function Details() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}
