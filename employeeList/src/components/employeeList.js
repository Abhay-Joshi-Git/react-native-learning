import React from 'react';
import {
    View,
    TouchableHighlight,
    Text,
    StyleSheet
} from 'react-native';
import _ from 'lodash';
import listStyle from '../CommonStyles/list.js';
import { connect } from 'react-redux';
import { addEmployee } from '../../redux/actions';

class EmployeeList extends React.Component {
    constructor(props) {
        super();
        var filteredData = this.getFilteredEmployeesData(props)
        this.state = {
            employeesFilteredData: filteredData
        }
    }

    getFilteredEmployeesData(props) {
        if (props.route && props.route.filter) {
            var filter = props.route.filter;
            if (filter.department) {
                return props.employees.filter(item => {
                    return item.department === filter.department
                })
            }
        }
        return props.employees;
    }

    componentWillReceiveProps(nextProps) {
        var filteredData = this.getFilteredEmployeesData(nextProps);
        this.setState({
            employeesFilteredData: filteredData
        })
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
        // this.props.addEmployee({
        //     name: 'Tom',
        //     department: 'manufacturing'
        // });
        this.props.navigator.push({
            name: 'employeeDetails',
            employee: {
                department: (this.props.route && this.props.route.filter) ? this.props.route.filter.department: ''
            }
        });
    }

    getEmployeeListView() {
        if (this.state.employeesFilteredData.length <= 0) {
            return (
                <View style={{alignItems: 'center'}}>
                    <Text style={[styles.label, styles.textFont]}>
                        No employees found!!
                    </Text>
                </View>
            );
        } else {
            return (
                <View style={styles.mainContainer}>
                    {this.state.employeesFilteredData.map(this.renderEmployeeRow.bind(this))}
                </View>
            );
        }
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

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
        departments: state.departments
    }
};

export default connect(
    mapStateToProps,
    { addEmployee }
)(EmployeeList)
