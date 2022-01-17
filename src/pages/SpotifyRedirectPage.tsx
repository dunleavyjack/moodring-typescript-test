import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions';
// import { setTokens } from '../actions';
import { connect } from 'react-redux';

interface Props {
    history: any;
    location: any;
    // setTokens: any;
}

class SpotifyRedirectPage extends React.Component<Props> {
    // componentDidMount() {
    //     const { history, location, setTokens } = this.props;
    //     // const history = this.props.history

    //     try {
    //         if (_.isEmpty(location.hash)) {
    //             return history.push('/yourmood');
    //         }
    //         const access_token = getParamValues(location.hash);
    //         setTokens(access_token);
    //         history.push('/yourmood');
    //     } catch (error) {
    //         history.push('/');
    //     }
    // }
    render() {
        return null;
    }
}

const mapStateToProps = (state: any) => {
    return state;
};

export default connect(mapStateToProps, {
    // setTokens,
})(SpotifyRedirectPage);
