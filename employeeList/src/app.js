import React from 'react';
import DepartmentList from './components/departmentList.js';
import { View } from 'react-native';

var departments = [
    {
        name: 'manufacturing',
        hod: 'ABC'
    },
    {
        name: 'sales',
        hod: 'PQR'
    }
];

export default class App extends React.Component {
    render() {
        return (
            <View>
                <DepartmentList departments={departments} />
            </View>
        );
    }
}
