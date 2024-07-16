export const metadata = {
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false
        },
        nocache: true,
        noarchive: true
    }
}

const ProtectedPage = () => {
    return ( 
        <div>
            <h1>Protected Page</h1>
            <p>This is a protected page</p>
            <p>You must be logged in to view this page or only for admins to view this page</p>
        </div>
     );
}
 
export default ProtectedPage;