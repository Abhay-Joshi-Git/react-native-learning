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
            employeesData: props.route.employees,
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
                {this.getEmployeeListView()}
                <TouchableHighlight
                    style={styles.footer}
                    onPress={this.onAddEmployeePress.bind(this)}
                    underlayColor='gray'
                >
                    <View>
                        <Text style={styles.footerIconText}> {'+'} </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }

    onAddEmployeePress() {
        this.props.navigator.push({
            name: 'employeeDetails',
            employee: {
                department: this.props.route.department
            },
            onSaveEmployee: this.onAddNewEmployee.bind(this)
        });
    }

    onAddNewEmployee(employee) {
        var updatedData = [
            ...this.state.employeesData,
            employee
        ];
        this.setState({
            employeesData: updatedData,
            dataSource: this.state.dataSource.cloneWithRows(updatedData)
        })
    }

    getEmployeeListView() {
        if (this.props.route.employees.length <= 0) {
            return (
                <View style={{alignItems: 'center'}}>
                    <Text style={[styles.label, styles.textFont]}>
                        No employees found!!
                    </Text>
                </View>
            );
        } else {
            return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderEmployeeRow.bind(this)}
                    >
                </ListView>
            );
        }
    }

    onBackButtonPressed() {
        this.props.route.updateEmployees({
            department: this.props.route.department,
            employees: this.state.employeesData
        })
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
