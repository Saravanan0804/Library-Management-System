import React from 'react'
import Button from 'react-bootstrap/Button';


function home(props) {
    const onChange = () => {
        console.log('hit')
        localStorage.setItem("ADMIN", 'admin')


        props.history.push("/Login")
    }
    return (
        <div>


            <div className="card-action center">
                <div>
                    <h2>Welcome to our Gypzeez Library</h2>
                </div>
                <br></br>
                <div className="mb-2">
                    <Button variant="dark" onClick={onChange} >
                        Admin Login
    </Button>{' '}
                    <Button href="userlogin" variant="info" >
                        User Login
    </Button>

                </div>
            </div>

        </div>
    )
}

export default home
