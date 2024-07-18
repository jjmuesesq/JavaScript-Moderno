import { User } from '../models/user';

/**
 * 
 * @param {Like<User>} userLike 
 */

export const saveUser = async( userLike ) => {
    const user = new User( userLike );

    //TODO Realizar mapper

    if(user.id){
        throw 'No implementada la actualización';
        return;
    }

    const updatedUser = await createUser( user );
    return updatedUser;

}

/**
 * 
 * @param {Like<User>} user 
 */

const createUser = async(user) => {
    //Solicitud POST al backend
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'aplication/json'
        }
    });

    const newUser = await res.json();
    console.log(newUser);
    return newUser;
}

