const userinfo = {
    state: {
        user: {
            token: "c160774b-59fc-42b4-bc85-062ee23cc35b",
            userId: "M00001"
        }
    },
    mutations: {
        UPDATE_USER: (state, userinfo) => { 
            state.user = Object.assign(state.user, userinfo);
            console.log(state.user);
        },
        UPDATE_USER_TOKEN: (state, token) => {
            state.user.token = token;
        },
        UPDATE_USER_ID: (state, userId) => {
            state.user.userId = userId;
        }
    },
    actions: {
        UpdateUser({ commit }, userinfo) { 
            commit("UPDATE_USER", userinfo)
        },
        UpdateUserId({ commit }, userId) { 
            commit("UPDATE_USER_ID", userId)
        },
        UpdateToken({ commit }, token) { 
            commit("UPDATE_USER_TOKEN", token)
        }
    }
}

export default userinfo