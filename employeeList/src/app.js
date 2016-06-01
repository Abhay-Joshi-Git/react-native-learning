import React from 'react';
import DepartmentList from './components/departmentList.js';
import {
    View,
    Navigator
} from 'react-native';
import departments from '../mockData/departmentList.js';
import employees from '../mockData/employeeList.js';
import EmployeeList from './components/employeeList.js';

var routes = {
    departments: DepartmentList,
    employees: EmployeeList
}

export default class App extends React.Component {
    renderScene(route, navigator) {
        var Component = routes[route.name];
        return <Component route={route} navigator={navigator} />;
    }

    render() {
        return (
            <Navigator
                initialRoute={{
                    name: 'departments',
                    departments: departments,
                    employees: employees
                }}
                renderScene={this.renderScene}
            />
        );
    }
}
