import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// Add function here
import { getRepos } from '../../actions/gitActions';

function Repositories({ getRepos, repos, isLoading, success }) {
    // Call function
    useEffect(() => {
        getRepos();
        console.log(repos);
    });

    if (isLoading) {
        return (
            <p>Loading ...</p>
        );
    }
    
    return (
        <div>
            
        </div>
    );
}

// states
const mapStateToProps = state => ({
    repos : state.git.repos,
    success : state.git.success,
    isLoading : state.git.isLoading
});

export default connect(mapStateToProps, {
    getRepos
})(Repositories);