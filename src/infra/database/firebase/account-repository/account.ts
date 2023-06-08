import { v4 as uuid } from 'uuid';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AddAccountRepository } from '../../../../data/protocols/database/account/add-account-repository';
import { AccountModel } from '../../../../domain/models/account';
import { AddAccountModel } from '../../../../domain/usecases/add-account';
import { adminAuth, firebaseAuth } from '../../../../main/config/firebase';
import { SignInAccountRepository } from '../../../../data/protocols/database/account/sign-in-account-repository';
import { SignInAccountModel } from '../../../../domain/usecases/sign-in-account';
import { UserLoggedModel } from '../../../../domain/models/user-logged';

export class AccountFirebaseRepository implements AddAccountRepository, SignInAccountRepository {
  async add(data: AddAccountModel): Promise<AccountModel | null> {
    const id = uuid();

    const result = await adminAuth.createUser({
      uid: id,
      displayName: data.name,
      email: data.email,
      password: data.password,
    });

    return {
      id: result.uid,
      email: result.email || '',
      name: result.displayName || '',
    };
  }

  async signIn(data: SignInAccountModel): Promise<UserLoggedModel | null> {
    const result = await signInWithEmailAndPassword(firebaseAuth, data.email, data.password);
    const token = await result.user.getIdToken();
    return {
      id: result.user.uid,
      name: result.user.displayName || '',
      email: result.user.email || '',
      accessToken: token,
    };
  }
}
