import {StyleSheet} from "react-native";

const styles = StyleSheet.create(
    {
        statusBar: {
            color: "black"
        },
        header: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 30,
            alignItems: "center",
        },
        headerTitle: {
            fontSize: 40,
            width: "65%",
            textAlign: "center"
        },
        headerSignIn: {
            color: "#BEAA6F",
            width: "15%",
            fontSize: 11
        },
        headerLogo: {
            width: "15%",
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 0.2,
            borderColor: "#BDBDBD",
            borderRadius: 10,
            padding: 10,

        },
        inputPassword: {
            height: 40,
            margin: 12,
            padding: 10,
            flexDirection: 'row', alignItems: 'center',
            borderWidth: 0.2,
            borderColor: "#BDBDBD",
            borderRadius: 10,
            backgroundColor: "#F6F6F6"

        },
        toggle: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        containerButton: {
            display: "flex",
            alignItems: "center",
            marginTop: 30,
            height: 120,
            justifyContent: "space-between",
        },
        buttonSignUp: {
            borderRadius: 30,
            backgroundColor: "#BEAA6F",
            height: 50,
            width: "90%",
            display: "flex",
            justifyContent: "center",

            alignItems: "center"
        },
        buttonText: {
            textAlign: "center",
            color: "#ffff",
            fontWeight: "bold",
        },
        errorText: {
            color: "red",
            textAlign: "center"
        }

    }
)
export default styles
