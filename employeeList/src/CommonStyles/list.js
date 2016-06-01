import common from './common.js';

export default {
    ...common,
    mainContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    itemContainer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 5,
        marginBottom: 2,
        backgroundColor: 'rgb(240, 240, 240)'
    }
}
