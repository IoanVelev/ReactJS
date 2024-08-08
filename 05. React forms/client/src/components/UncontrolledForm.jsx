import { useState } from "react";

export default function UncontrolledForm() {
    const [user, setUser] = useState({
        username: 'Joe'
    });

    const formSubmitHanlder = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        setUser({
            username: formData.get('username')
        });
    }

    const logoutHandler = () => {
        setUser({});
    }

    return (
        <>
            <h1>Uncontrolled Form</h1>
            {user.username
                ?
                <p>Hello {user.username}! <button onClick={logoutHandler}>Logout</button></p>
                : <form onSubmit={formSubmitHanlder}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </form>}
        </>
    );
}
