function UserGreeting(props) {
        const welcomeMsg = <h2 className="welcome">Welcome {props.userName}</h2>
        const warningMsg = <h2 className="warning">Please log in!</h2>
        if(props.isLoggedIn) return welcomeMsg;
        return warningMsg;
}

export default UserGreeting;