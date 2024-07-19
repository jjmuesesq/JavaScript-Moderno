import { User } from '../models/user';

/**
 * 
 * @param {Like<User>} userLike 
 */

export const saveUser = async( userLike ) => {
    
    const user = new User( userLike );
    //TODO Realizar mapper
    
    if( user.id ){
        console.log('entra...');
        throw 'No implementada la actualización';
        return;
    }
    
    console.log('=>', user);
    const updatedUser = await createUser( user );
    console.log('updateduser => ', updatedUser);
    return updatedUser;

}

/**
 * 
 * @param {Like<User>} user 
 */

const createUser = async(user) => {
    //Solicitud POST al backend
    let user2 = {
        id: undefined, 
        isActive: true, 
        balance: 125, 
        avatar: undefined, 
        first_name: 'Jhon Jairo',
        last_name: 'Mueses',
        gender: undefined
    }
    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'aplication/json'
        }
    });

    const newUser = await res.json();
    console.log({ newUser });
    return newUser;
}

