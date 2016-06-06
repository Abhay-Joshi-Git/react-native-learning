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
import { MKButton } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButtonIcon from './backButtonIcon.js';

const ColoredFab = MKButton.accentColoredFab()
   .withStyle()
   .build();

const Fab = MKButton.plainFab().build();

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
                        />
                    </View>
                </View>
                {this.getSaveEmployeeButtonUI()}
            </View>
        )
    }

    getSaveEmployeeButtonUI() {
    //ToDo: here Icon and props are getting repeated, fetch it as a separate component and
    // props as props and Icon as children
        
        return (
            <View style={{
                    alignItems: 'center',
                    marginTop: 10
                }}>
                {
                    this.state.employee.name ?
                    (<ColoredFab
                            onPress={this.onSavePress.bind(this)}
                            style={styles.fab}
                            disabled={!this.state.employee.name}
                        >
                            <Icon
                                name='check'
                                size={30}
                                color={this.state.employee.name ? 'white' : 'gray'}
                                style={styles.fabIcon}
                            />
                    </ColoredFab>) : (<Fab
                            onPress={this.onSavePress.bind(this)}
                            style={styles.fab}
                            disabled={!this.state.employee.name}
                        >
                            <Icon
                                name='check'
                                size={30}
                                color={this.state.employee.name ? 'white' : 'gray'}
                                style={styles.fabIcon}
                            />
                    </Fab>)
                }
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


var styles = StyleSheet.create({
    ...commonStyles,
    footerIconText: {
        ...commonStyles.footerIconText,
        fontSize: 15
    }
})

export default connect(
    null,
    { addEmployee: actions.addEmployee }
)(EmployeeDetails)
