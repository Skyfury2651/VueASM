export function fetchAccountBegin(state) {
    state.account = {}
}

export function fetchAccountSuccess(state, { data }) {
    state.account = data
}


