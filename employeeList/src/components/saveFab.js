import React from 'react';
import {
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import commonStyles, { otherStyles } from '../CommonStyles/common.js';
import _ from 'lodash';
import { MKButton } from 'react-native-material-kit';

const ColoredFab = MKButton.accentColoredFab()
   .withStyle()
   .build();
   import Icon from 'react-native-vector-icons/FontAwesome';

const Fab = MKButton.plainFab().build();

export default class SaveFab extends React.Component {
    render() {
        return this.getFabComponentUI(
                {
                    onPress: this.props.onSavePress,
                    style: styles.fab
                },
                <Icon
                    name='check'
                    size={30}
                    color={this.props.disabled ? 'gray' : 'white'}
                    style={styles.fabIcon}
                />
            )
    }

    getFabComponentUI(fabProps, children) {
        if (this.props.disabled) {
            return (
                <Fab {...fabProps}
                    disabled
                >
                    {children}
                </Fab>
            )
        } else {
            return (
                <ColoredFab {...fabProps}>
                    {children}
                </ColoredFab>
            )
        }
    }
}

var styles = StyleSheet.create(commonStyles);
