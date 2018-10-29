const getters = {
    client: state => state.app.client,
    loading: state => state.app.loading,
    token: state => state.userinfo.user.token,
    userId: state => state.userinfo.user.userId
}

export default getters