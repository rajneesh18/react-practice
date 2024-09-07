const formatName = (user) => {
    return user.firstName + ' ' + user.lastName
}

function App() {
    const user = {
        firstName: "Rajneesh",
        lastName: "Shukla"
    }    

    return <>
        <div>
            <h1>
                Hello, {formatName(user)}
            </h1>
        </div>
    </>
}

export default App;