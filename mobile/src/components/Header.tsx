import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { StackHeaderProps } from "@react-navigation/stack";

interface HeaderProps extends StackHeaderProps {
  showCancel?: boolean;
  title: string;
}

export default function Header({
  showCancel = true,
  title,
  navigation,
}: HeaderProps) {
  function handleCancelCreateOrphanage() {
    navigation.navigate("OrphanagesMap");
  }

  return (
    <View style={styles.container}>
      <BorderlessButton>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {showCancel ? (
        <BorderlessButton onPress={handleCancelCreateOrphanage}>
          <Feather name="x" size={24} color="#FF669D" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#f9fafc",
    borderBottomWidth: 1,
    borderColor: "#DDE3F0",
    paddingTop: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "Nunito_600SemiBold",
    color: "#8fa7b3",
    fontSize: 16,
  },
});
