export const checkValidateData=(email, password)=>{


const isValidEmail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
const isPasswordValid= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)

    if(!isValidEmail) return "Invalid email address"
    if(!isPasswordValid) return "Invalid password"
    if(!isValidEmail && !isPasswordValid) return "Invalid Email address and password"

    return null;

}