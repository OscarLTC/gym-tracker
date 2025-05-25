// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight } from "expo-symbols";
import React from "react";
import {
  OpaqueColorValue,
  Platform,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

import { DumbbellIcon } from "./icons/DumbbellIcon";
import { ListChecksIcon } from "./icons/ListChecksIcon";
import { ChartLineIcon } from "./icons/ChartLineIcon";
import { CalendarIcon } from "./icons/Calendar";

const MAPPING = {
  "house.fill": "home",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
} as const;

const CUSTOM_ICONS = {
  dumbbell: DumbbellIcon,
  "list-checks": ListChecksIcon,
  "chart-line": ChartLineIcon,
  calendar: CalendarIcon,
} as const;

export type IconSymbolName = keyof typeof MAPPING | keyof typeof CUSTOM_ICONS;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  if (Platform.OS !== "ios") {
    const miName = (MAPPING as any)[name];
    if (miName) {
      return (
        <MaterialIcons
          name={miName}
          size={size}
          color={typeof color === "string" ? color : undefined}
          style={style as TextStyle}
        />
      );
    }
    const Custom = (CUSTOM_ICONS as any)[name];
    if (Custom) {
      return (
        <Custom
          size={size}
          color={typeof color === "string" ? color : "#000"}
        />
      );
    }
  }

  return null;
}
