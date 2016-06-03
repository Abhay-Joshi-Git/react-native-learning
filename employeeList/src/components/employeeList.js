import React from 'react';
import {
    View,
    ListView,
    TouchableHighlight,
    Text,
    StyleSheet
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { addEmployee } from '../../redux/actions';
import * as MK from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import listStyle from '../CommonStyles/list.js';
import { MKTheme } from '../CommonStyles/common.js';

class EmployeeList extends React.Component {
    constructor(props) {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var filteredData = this.getFilteredEmployeesData(props)
        this.state = {
            employeesFilteredData: filteredData,
            dataSource: ds.cloneWithRows(filteredData)
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
            employeesFilteredData: filteredData,
            dataSource: this.state.dataSource.cloneWithRows(filteredData)
        })
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <View style={styles.headerIconContainer}>
                        <Icon
                            style={{
                                justifyContent: 'center',
                                marginLeft: 3
                            }}
                            name='arrow-left'
                            size={18}
                            color='white'
                            onPress={this.onBackButtonPressed.bind(this)}
                        />
                    </View>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>
                            Employee List
                        </Text>
                    </View>
                </View>
                {this.getEmployeeListView()}
                <ColoredFab
                    onPress={this.onAddEmployeePress.bind(this)}
                    style={styles.footerFab}
                >
                    <Icon
                        name='plus'
                        size={30}
                        color='white'
                        style={styles.fabIcon}
                    />
                </ColoredFab>
            </View>
        )
    }

    onAddEmployeePress() {
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
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderEmployeeRow.bind(this)}
                    contentContainerStyle={{justifyContent: 'flex-start'}}
                >
                </ListView>
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
const { MKButton } = MK;

console.log(MKTheme);

MK.setTheme(MKTheme);

const FlatButton = MKButton.flatButton()
  .withText('BUTTON')
  .build();
const ColoredFab = MKButton.accentColoredFab()
   .withStyle()
   .build();


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
