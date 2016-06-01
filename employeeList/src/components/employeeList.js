import React from 'react';
import {
    View,
    ListView,
    TouchableHighlight,
    Text,
    StyleSheet
} from 'react-native';
import _ from 'lodash';
import listStyle from '../CommonStyles/list.js';


export default class EmployeeList extends React.Component {
    constructor(props) {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.route.employees)
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <TouchableHighlight
                     style={styles.headerIconContainer}
                     onPress={this.onBackButtonPressed.bind(this)}
                     underlayColor='gray'
                    >
                        <Text style={styles.iconText}> {'<'} </Text>
                    </TouchableHighlight>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>
                            Employee List
                        </Text>
                    </View>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderEmployeeRow.bind(this)}
                >
                </ListView>
            </View>
        )
    }

    onBackButtonPressed() {
        this.props.navigator.pop();
    }

    renderEmployeeRow(item) {
        return (
            <TouchableHighlight
                underlayColor='rgb(0, 100, 150)'
                onPress={() => {this.onEmployeePress(item)} }
            >
                <View style={styles.itemContainer}>
                    <View style={styles.labelRow}>
                        <Text style={[styles.label, styles.textFont]}>Name:</Text>
                        <Text style={styles.textFont}>{_.capitalize(item.name)}</Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={[styles.label, styles.textFont]}>Department:</Text>
                        <Text style={styles.textFont}>{_.capitalize(item.department)}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    onEmployeePress(employee) {
        console.log('on employee press', employee);
    }
}

var styles = StyleSheet.create(listStyle);
