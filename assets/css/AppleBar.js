import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "homeFooter": {
        "width": "100%",
        "height": 60,
        "position": "fixed",
        "left": 0,
        "bottom": 0,
        "WebkitAnimationDelay": "0.2s"
    },
    "homeFooter homeFooter-apple-bg": {
        "width": 460,
        "height": 60,
        "backgroundColor": "#fff",
        "borderTopLeftRadius": 10,
        "borderTopRightRadius": 10,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "homeFooter homeFooter-apple-box": {
        "width": 70,
        "height": 70,
        "backgroundColor": "#fff",
        "borderRadius": "50%",
        "position": "absolute",
        "bottom": 0,
        "left": "50%",
        "marginLeft": -30
    },
    "homeFooter-apple": {
        "position": "absolute",
        "bottom": 0,
        "textAlign": "center",
        "listStyle": "none",
        "width": "100%",
        "WebkitAnimationDelay": "0.2s"
    },
    "homeFooter-apple li a": {
        "paddingTop": 7,
        "paddingRight": 24,
        "paddingBottom": 0,
        "paddingLeft": 24,
        "display": "block",
        "textAlign": "center"
    },
    "a": {
        "color": "#108ee9",
        "background": "transparent",
        "textDecoration": "none",
        "outline": "none",
        "cursor": "pointer",
        "transition": "color .3s ease"
    },
    "homeFooter-apple li a img": {
        "width": 40
    },
    "homeFooter-apple span": {
        "color": "#AAA7A3"
    }
});