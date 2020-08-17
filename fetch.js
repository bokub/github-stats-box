const axios = require('axios');

const userInfoFetcher = (token) => {
    return axios({
        url: 'https://api.github.com/graphql',
        method: 'post',
        headers: {
            Authorization: `bearer ${token}`,
        },
        data: {
            query: `
              query userInfo {
                viewer {
                  name
                  login
                  contributionsCollection {
                    totalCommitContributions
                  }
                  repositoriesContributedTo(first: 1, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
                    totalCount
                  }
                  pullRequests(first: 1) {
                    totalCount
                  }
                  issues(first: 1) {
                    totalCount
                  }
                  repositories(first: 100, ownerAffiliations: OWNER, isFork: false, orderBy: {direction: DESC, field: STARGAZERS}) {
                    totalCount
                    nodes {
                      stargazers {
                        totalCount
                      }
                    }
                  }
                }
              }`,
        },
    });
};

// Experimental API
const totalCommitsFetcher = async (login, token) => {
    return axios({
        method: 'get',
        url: `https://api.github.com/search/commits?q=author:${login}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/vnd.github.cloak-preview',
            Authorization: `bearer ${token}`,
        },
    }).then((res) => res.data.total_count);
};

module.exports = {
    userInfoFetcher,
    totalCommitsFetcher,
};
