import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false)

    useEffect(() => {

        const email = user?.email
        const currentUser = { email: email }

        if (email) {
            // fetch(`https://mysterious-citadel-05250.herokuapp.com/admin/${email}`, {
            //     method: 'GET',
            //     headers: {
            //         'content-type': 'application/json'
            //     },

            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         setAdmin(data.admin)
            //     })
        }




    }, [user])
    return [admin]
}


export default useAdmin;