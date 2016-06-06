import React from 'react';
import commonStyles, { otherStyles } from '../CommonStyles/common.js';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BackButtonIcon extends React.Component {
    render() {
        return (
            <View style={styles.headerIconContainer}>
                <Icon
                    style={{
                        justifyContent: 'center',
                        marginLeft: 10
                    }}
                    name='arrow-left'
                    size={otherStyles.headerIconSize}
                    color='white'
                    onPress={this.props.onPress}
                />
            </View>
        );
    }
};

var styles = StyleSheet.create(commonStyles);
