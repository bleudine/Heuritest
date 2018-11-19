export default function (uri, options = {method: 'GET'}) {
    return fetch(uri, options)
        .then(response => {
            if (response.status > 200) {
                throw response;
            }

            return response;
        }, error => error)

}