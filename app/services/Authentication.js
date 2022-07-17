import { auth } from '../../database/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import router from '@/router';

onAuthStateChanged(auth, user => router.push({ name: user ? 'home' : 'login' }));

/**
 * Authenticate user.
 * If user authenticated, route will be redirected to route named home
 *
 * @param email
 * @param password
 * @returns {Promise<User>}
 */
export const authenticate = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password)
		.then(userCredential => userCredential.user);
};

/**
 * Logout user
 * If user unauthenticated, route will be redirected to route named login
 *
 * @returns {Promise<void>}
 */
export const logout = () => {
	return signOut(auth);
};
