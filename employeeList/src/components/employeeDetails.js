import React from 'react';
import {
    View,
    ListView,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native';
import commonStyles, { otherStyles } from '../CommonStyles/common.js';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import _ from 'lodash';
import BackButtonIcon from './backButtonIcon.js';
import SaveFab from './saveFab.js';

class EmployeeDetails extends React.Component {
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
                    <BackButtonIcon
                        onPress={this.onBackButtonPressed.bind(this)}
                    />
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
                            value={_.capitalize(this.state.employee.department)}
                            style={styles.input}
                            editable={false}
                            placeholder={this.state.employee.department ?
                                        this.state.employee.department : 'Department'}
                            placeholderStyle={{
                                opacity: 0.4,
                                color: 'blue'
                            }}
                        />
                    </View>
                </View>
                {this.getSaveEmployeeButtonUI()}
            </View>
        )
    }

    getSaveEmployeeButtonUI() {
        return (
            <View style={{
                    alignItems: 'center',
                    marginTop: 10
                }}>
                <SaveFab
                    disabled={!this.state.employee.name}
                    onSavePress={this.onSavePress.bind(this)}
                />
            </View>
        )
    }

    onSavePress() {
        this.props.navigator.pop();
        this.props.addEmployee(this.state.employee);
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

    onBackButtonPressed() {
        this.props.navigator.pop();
    }
}

var styles = StyleSheet.create(commonStyles)

export default connect(
    null,
    { addEmployee: actions.addEmployee }
)(EmployeeDetails)
