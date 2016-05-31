import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView
} from 'react-native';

export default class DepartmentList extends React.Component {
    constructor(props) {
        super();
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state ={
            dataSource: ds.cloneWithRows(props.departments)
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.header}>
                        Department List
                    </Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={item => {
                        return (
                            <View style={styles.itemContainer}>
                                <Text>Name:  {item.name}</Text>
                                <Text>HOD: {item.hod} </Text>
                            </View>
                        )
                    }}
                ></ListView>

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
