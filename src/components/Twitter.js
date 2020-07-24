import React, { Component } from 'react';
import SearchBox from './SearchBox'
import ProfileList from './ProfileList';
import fetchProfiles from '../actions/fetchProfiles'
import { connect } from 'react-redux'
import '../styles/search.scss'

class Twitter extends Component {
    state = {
        currentUsers: this.props.currentUsers,
        query: "",
        user: "",
        tweets: [],
        showProfile: false,
        isSearched: false,
        tweetsFetched: false
    }
    handleInputChange = ({ target: { value } }) => {
        this.setState({ query: value, showProfile: false })
    };

    getData = (event) => {
        const { query } = this.state;
        event.preventDefault();
        event.stopPropagation();
        !!query && this.props.profiles(this.state.query) && this.setState({ isSearched: true });
    }

    fetchFullUserProfile = (userDetails) => {
        this.setState({ user: userDetails, showProfile: true })
    }

    render() {
        const { user, showProfile, isSearched } = this.state;
        return (
            <div className="search">
                <div className="search-title">Search Twitter Profiles with Top 5 Tweets</div>
                <SearchBox
                    handleInputChange={e => this.handleInputChange(e)}
                    query={this.state.query}
                    getData={e => this.getData(e)}
                />
                <div>
                    {isSearched &&
                        <ProfileList
                            profiles={this.props.currentUsers}
                            viewProfile={this.fetchFullUserProfile}
                            showProfile={showProfile}
                            userDetails={user}
                            showSpinner={this.props.status}
                        />}
                </div>

            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        currentUsers:
            !!state && state.currentUsers,
        status: !!state && state.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        profiles: query => dispatch(fetchProfiles(query))
    };
};

// We are using connect HOC of react-edux
//In the other example wil be sharing Hook based examples that uses >> useDispatch() from redux and >> useReducer from react

export default connect(mapStateToProps, mapDispatchToProps)(Twitter);
