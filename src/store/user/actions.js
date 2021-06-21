export async function loadAccount({commit}, token) {
    commit('fetchAccountBegin')
    fetch('http://localhost:3000/api/v1/accounts/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title: "Vue POST Request Example"})
    })
        .then(response => response.json())
        .then((response) =>
            fetch('http://localhost:3000/api/v1/accounts/get-user?token=' + response.data).then((data) => {
                commit('fetchStudentSuccess', {
                    data: data
                })
            })
        )
}