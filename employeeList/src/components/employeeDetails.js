import React from 'react';
import {
    View,
    ListView,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native';
import commonStyles from '../CommonStyles/common.js';

export default class EmployeeDetails extends React.Component {
    constructor(props) {
        super();
        var item = props.route.employee;
        this.state = {
            employee: {
                name: item ? item.name : '',
                department: item ? item.department : ''
            }
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>
                            Employee Details
                        </Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'flex-start'}}>
                    <View style={styles.labelRow}>
                        <TextInput
                            value={this.state.employee.name}
                            onChangeText={this.onNameChange.bind(this)}
                            style={styles.input}
                            placeholder={this.state.employee.name ?
                                this.state.employee.name : 'Name'   }
                        />
                    </View>
                    <View style={styles.labelRow}>
                        <TextInput
                            value={this.state.employee.department}
                            style={styles.input}
                            editable={false}
                            placeholder={this.state.employee.department ?
                                this.state.employee.department : 'Department'}
                        />
                    </View>
                </View>
                <View style={{
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                    <TouchableHighlight
                        onPress={this.onSavePress.bind(this)}
                        underlayColor='gray'
                        style={{
                            borderWidth: 1,
                            borderRadius: 4
                        }}
                    >
                        <Text style={styles.footerIconText}> Save </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

    onSavePress() {
        this.props.route.onSaveEmployee(this.state.employee);
        this.props.navigator.pop();
    }

    onNameChange(text) {
        this.setState({
            employee:{
                ...this.state.employee,
                name: text
            }
        })
    }

    onDepartmentChange(text) {
        this.setState({
            employee:{
                ...this.state.employee,
                department: text
            }
        })
    }
}


var styles = StyleSheet.create({
    ...commonStyles,
    input: {
        padding: 4,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        width: 200,
        alignSelf: 'center'
    },
    footerIconText: {
        ...commonStyles.footerIconText,
        fontSize: 15
    }
})
