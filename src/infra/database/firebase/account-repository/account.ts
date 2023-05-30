import { v4 as uuid } from 'uuid';
import { AddAccountRepository } from '../../../../data/protocols/database/account/add-account-repository';
import { AccountModel } from '../../../../domain/models/account';
import { AddAccountModel } from '../../../../domain/usecases/add-account';
import { auth } from '../../../../main/config/firebase';

export class AccountFirebaseRepository implements AddAccountRepository {
  async add(data: AddAccountModel): Promise<AccountModel | null> {
    const id = uuid();

    const result = await auth.createUser({
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
}
