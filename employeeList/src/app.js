import React from 'react';
import {
    View,
    Navigator,
    Text
} from 'react-native';
import EmployeeList from './components/employeeList.js';
import EmployeeDetails from './components/employeeDetails.js';
import DepartmentList from './components/departmentList.js';

var routes = {
    departments: DepartmentList,
    employees: EmployeeList,
    employeeDetails: EmployeeDetails
}

export default class App extends React.Component {
    renderScene(route, navigator) {
        var Component = routes[route.name];
        return <Component route={route} navigator={navigator} />;
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'departments'}}
                renderScene={this.renderScene}
            />
        );
    }
}
