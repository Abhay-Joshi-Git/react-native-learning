import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight
} from 'react-native';
import _ from 'lodash';

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
                        <Text style={styles.textFont}>{_.capitalize(item.name)}</Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={[styles.label, styles.textFont]}>HOD:</Text>
                        <Text style={styles.textFont}>{item.hod}</Text>
                    </View>
                </View>
            </TouchableHighlight>
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
        height: 60,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'rgb(0, 100, 100)',
        backgroundColor: 'white',
        paddingLeft: 5
    },
    header: {
        fontSize: 30,
        marginBottom: 5
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
    }
})
