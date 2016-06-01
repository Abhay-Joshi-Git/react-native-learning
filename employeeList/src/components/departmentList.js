import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight
} from 'react-native';
import _ from 'lodash';
import listStyle from '../CommonStyles/list.js';

export default class DepartmentList extends React.Component {
    constructor(props) {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.route.departments)
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.headerText}>
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

    onDepartmentPress(department) {
        console.log('on Department press', department);

        this.props.navigator.push({
            name: 'employees',
            employees: this.props.route.employees.filter(item => item.department === department.name)
        })
    }
}

var styles = StyleSheet.create(listStyle);
