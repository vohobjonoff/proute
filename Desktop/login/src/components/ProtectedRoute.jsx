/* eslint-disable react/prop-types */
import { Navigate } from "react-router"


export default function ProtectedRoute({ signedIn, children }) {

    if (!signedIn) {
        return <Navigate to='/' replace />
    }


  return children
}
