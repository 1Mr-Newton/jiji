import { Image, Text, View } from "react-native";
import { COLORS, imagePaths } from "../constants";

function getColor(comp, theme, style) {
  return COLORS[comp]?.[theme]?.[style] ?? null;
}
export default function BottomNavItem({
  focused,
  label,
  iconName,
  notifications,
  theme,
}) {
  console.log(getColor("bottomnavitem", theme, "tintColor"));
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        minWidth: 70,
        marginHorizontal: 10,
      }}
    >
      <Image
        source={imagePaths[iconName]}
        style={{
          width: 24,
          height: 24,
          tintColor: focused
            ? getColor("bottomnavitem", theme, "tintFColor")
            : getColor("bottomnavitem", theme, "tintNColor"),
        }}
      />
      <Text
        style={{
          fontWeight: "500",
          fontSize: 12,
          marginTop: 5,
          color: focused
            ? getColor("bottomnavitemtext", theme, "FColor")
            : getColor("bottomnavitemtext", theme, "NColor"),
        }}
      >
        {label}
      </Text>
      {notifications && (
        <View
          style={{
            backgroundColor: "red",
            position: "absolute",

            top: 10,
            right: 5,
            height: 18,
            width: 25,
            paddingHorizontal: 5,
            paddingVertical: 2,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Text style={{ color: "white" }}>
            {notifications > 99 ? 99 : notifications}
          </Text>
        </View>
      )}
    </View>
  );
}
