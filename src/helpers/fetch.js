const baseUrl = import.meta.env.VITE_API_URL

const fetchNoAuth = async ( endpoint, data, method = 'GET' ) => {
    const url = `${baseUrl}/${endpoint}`
    if ( method === 'GET' ) {
        const resp = await fetch( url )
        return await resp.json()
    } else {
        const resp = await fetch(url, {
            method,
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return await resp.json()
    }
}

const fetchAuth = async ( endpoint, data, method = 'GET' ) => {
    const url = `${baseUrl}/${endpoint}`
    const token = localStorage.getItem('token') || ''

    if ( method === 'GET' ) {
        const resp = await fetch( url,{
            headers:{
                'x-token': token
            }
        } )
        return await resp.json()
    } else {
        const resp = await fetch(url, {
            method,
            headers:{
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        })

        return await resp.json()
    }
}
export { fetchNoAuth, fetchAuth }