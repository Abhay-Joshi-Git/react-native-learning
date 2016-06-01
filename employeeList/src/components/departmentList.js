import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native';

export default class DepartmentList extends React.Component {
    constructor(props) {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state ={
            dataSource: ds.cloneWithRows(props.departments)
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.header}>
                        Department List
                    </Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderDepartmentRow.bind(this)}
                >
                </ListView>
            </View>
        )
    }

    renderDepartmentRow(item) {
        return (
            <TouchableHighlight
                underlayColor='rgb(0, 100, 150)'
                onPress={() => {this.onDepartmentPress(item)} }
            >
                <View style={styles.itemContainer}>
                    <View style={styles.labelRow}>
                        <Text style={[styles.label, styles.textFont]}>Name:</Text>
                        <Text style={styles.textFont}>{item.name}</Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>HOD:</Text>
                        <Text>{item.hod}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    renderDepartmentRowWithTouchableNativeFeedback(item) {
        return (
            <TouchableNativeFeedback
                onPress={this.onDepartmentPress.bind(this)}
                background={TouchableNativeFeedback.Ripple('gray')}
            >
                <View style={styles.itemContainer}>
                    <View style={styles.labelRow}>
                        <Text style={[styles.label, styles.textFont]}>Name:</Text>
                        <Text style={styles.textFont}>{item.name}</Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={styles.label}>HOD:</Text>
                        <Text>{item.hod}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }


    onDepartmentPress(depatment) {
        console.log('on Department press', depatment);
    }
}



var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    itemContainer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'rgb(0, 200, 200)',
        backgroundColor: 'white'
    },
    header: {
        fontSize: 30
    },
    labelRow: {
        flexDirection: 'row'
    },
    label: {
        fontWeight: 'bold'
    },
    textFont: {
        fontSize: 18
    }
})
