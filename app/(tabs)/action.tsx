import React, { useState } from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Card, Text, TextInput } from "react-native-paper";

export default function ActionTab() {
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");

  const handleSend = () => {
    console.log(inputText);
  };

  return (
    <KeyboardAwareScrollView className="flex-1 bg-slate-100">
      <View className="p-4 flex-1 gap-4">
        <Card className="rounded-xl overflow-hidden shadow-sm">
          <Card.Title title="Action Menu" subtitle="System Ready" />
          <Card.Content className="gap-2">
            <Text variant="bodyMedium" className="text-slate-600 mb-2">
              Enter text input
            </Text>

            <TextInput
              mode="outlined"
              label="Input Data"
              value={inputText}
              onChangeText={setInputText}
              multiline
              numberOfLines={4}
              className="bg-white"
            />
          </Card.Content>
          <Card.Actions className="mt-2">
            <Button mode="text" onPress={() => setInputText("")}>
              Clear
            </Button>

            <Button mode="contained" onPress={handleSend}>
              Send
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </KeyboardAwareScrollView>
  );
}
