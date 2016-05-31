import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class DepartmentList extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.header}>
                        Department List
                    </Text>
                </View>
                {this.props.departments.map(item => {
                    return (
                        <View
                            key={item.name}
                            style={styles.itemContainer}
                        >
                            <Text>
                                Name: {item.name}
                            </Text>
                            <Text>
                                HOD: {item.hod}
                            </Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    itemContainer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'rgb(0, 200, 200)'
    },
    header: {
        fontSize: 30
    }
})
