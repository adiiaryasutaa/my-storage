import { app } from '../../database/firebase';

test('Firebase Connection', () => {
	expect(app.name).not.toBeNull()
})
