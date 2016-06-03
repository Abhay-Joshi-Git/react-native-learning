import * as MK from 'react-native-material-kit';

const { MKColor } = MK;

export const MKTheme = {
  primaryColor: MKColor.Teal,
  accentColor: MKColor.Red,
};

const fab = {
    height: 50,
    width: 50
}

export default {
    mainContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    headerText: {
        fontSize: 30,
        marginBottom: 5,
        color: 'white'
    },
    labelRow: {
        flexDirection: 'row'
    },
    label: {
        fontWeight: 'bold'
    },
    textFont: {
        fontSize: 18,
        marginLeft: 5
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'teal'
    },
    headerTextContainer: {
        flex: 15,
        alignItems: 'center',
        height: 50
    },
    headerIconContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    iconText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    footerFab: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        ...fab
    },
    fabIcon: {
        left: 12.5,
        top: 10
    },
    fab: {
        ...fab
    },
    input: {
        padding: 4,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        width: 250,
        alignSelf: 'center'
    }
}
