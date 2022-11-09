import {createContext, useState, useEffect, Children} from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const tokensLocalStorage = JSON.parse(localStorage.getItem("tokens"))
    const onLoadTokens = tokensLocalStorage ? tokensLocalStorage : null
    const decodedToken = tokensLocalStorage ? jwt_decode(tokensLocalStorage.access): null
    const [user, setUser] = useState(() => decodedToken);
    const [tokens, setTokens] = useState(() => onLoadTokens);
    const [isloading, setIsLoading] = useState(null)
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    //Sign in a user
    const registerUser = async (e) => {
        e.preventDefault()
        const firstname = e.target.firstname.value
        const lastname = e.target.lastname.value
        const username = e.target.username.value 
        const email = e.target.email.value
        const county = e.target.county.value
        const association = e.target.association.value
        const password1 = e.target.password1.value
        const password2 = e.target.password2.value
        
        setIsLoading(true)

        if (username && email && password1 && password2){
            if(password1 === password2){
                const response = await fetch("http://127.0.0.1:8000/api-auth/signup/", {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify(
                        {
                          "first_name":firstname,
                          "last_name":lastname,
                          "username":username,
                          "email":email,
                          "county":county,
                          "association":association,
                          "password":password1  
                            
                        })
                    })
                response ? setIsLoading(false) : setIsLoading(true)
                const data = await response.json()
                //console.log(data)
                if(response.status === 201){
                    alert(`${username}, You were registered successfully`)
                    navigate("/login")
                }else if(response.status === 400){
                    if(data.username){
                        alert(data.username[0])
                    }else if(data.email){
                        alert(data.email[0])
                    }else{
                        alert("error occured please check your inputs")
                    }
                }else{
                    alert("error occured")
                }
                
                
            }else{
                alert("passwords entered do not match")
            }

        }else{
            alert("please enter all fields")
        }

        // console.log(username, email, password1, password2)
    }

    //login a user
    const loginUser = async (e) => {
        e.preventDefault();

        setIsLoading(true)
        //console.log(isloading)
       try {
        const response = await fetch("http://127.0.0.1:8000/api-auth/token/", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})

    })


     if (response.status === 200) {
        const data = await response.json()
        setTokens(data)
        setUser(jwt_decode(data.access))
        localStorage.setItem("tokens", JSON.stringify(data))

        if(user.admin === true){

            navigate("/")
        }else{
            navigate("/user")
        }
        
        
    } else {
        const errorMessage = "Something went Wrong"
        setError(errorMessage);
        alert(error)
    }

       } catch (error) {
            console.log(error)
       }
        
       
    }

    const logoutUser = () => {
        setTokens(null)
        setUser(null)
        localStorage.removeItem("tokens")
        navigate('/login')
    }



    const contextData = {
        registerUser, loginUser, user, tokens, logoutUser, isloading
    }
    return (
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext