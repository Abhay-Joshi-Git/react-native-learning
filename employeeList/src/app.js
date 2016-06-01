import React from 'react';
import DepartmentList from './components/departmentList.js';
import {
    View,
    Navigator
} from 'react-native';
import departments from '../mockData/departmentList.js';

//<DepartmentList departments={departments} />

var routes = {
    departments: DepartmentList
}

export default class App extends React.Component {
    renderScene(route, navigator) {
        var Component = routes[route.name];
        return <Component route={route} navigator={navigator} />;
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'departments', departments: departments}}
                renderScene={this.renderScene}
            />
        );
    }
}
