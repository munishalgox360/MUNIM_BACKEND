export function sanitizeUser(user){
    return {id : user._id, role : user.role}
}