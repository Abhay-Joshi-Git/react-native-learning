import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight
} from 'react-native';
import _ from 'lodash';
import listStyle from '../CommonStyles/list.js';
import { connect } from 'react-redux';

class DepartmentList extends React.Component {
    constructor(props) {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.departments)
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.header}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>
                        Department List
                    </Text>
                </View>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderDepartmentRow.bind(this)}
                >
                </ListView>
            </View>
        )
    }

    renderDepartmentRow(item) {
        return (
            <TouchableHighlight
                underlayColor='rgb(0, 100, 150)'
                onPress={() => {this.onDepartmentPress(item)} }
            >
                <View style={styles.itemContainer}>
                    <View style={styles.labelRow}>
                        <Text style={[styles.label, styles.textFont]}>Name:</Text>
                        <Text style={styles.textFont}>{_.capitalize(item.name)}</Text>
                    </View>
                    <View style={styles.labelRow}>
                        <Text style={[styles.label, styles.textFont]}>HOD:</Text>
                        <Text style={styles.textFont}>{item.hod}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    onDepartmentPress(department) {
        this.props.navigator.push({
            name: 'employees',
            filter: {
                department: department.name,
            }
        })
    }
}

var styles = StyleSheet.create(listStyle);


const mapStateToProps = (state) =>  {
    return {
        departments: state.departments
    }
}

export default connect(
    mapStateToProps
)(DepartmentList)
