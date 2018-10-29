import { calClient } from "@/utils/window"

const app = {
    state: {
        client: calClient(),
        pendings: [],
        loading : 0
    },
    mutations: {
        UPDATE_CLIENT: (state, step) => { 
            if (step != undefined) {
              state.client.step = step
            } else { 
              state.client = calClient();
            }
        },
        AJAX_PENDING: (state, isPending) => { 
            if (isPending) {
              state.pendings.push(0);
            } else { 
              state.pendings.pop();
            }
            state.loading = state.pendings.length;
        }
    },
    actions: {
        windowResizeHandler({ commit }) { 
            commit('UPDATE_CLIENT');
        },
        ajaxPending({ commit }, isPending) { 
            commit('AJAX_PENDING', isPending);
        }
    }
}

export default app