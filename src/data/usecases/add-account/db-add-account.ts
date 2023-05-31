import { AccountModel } from '../../../domain/models/account';
import { AddAccount, AddAccountModel } from '../../../domain/usecases/add-account';
import { AddAccountRepository } from '../../protocols/database/account/add-account-repository';

export class DbAddAccount implements AddAccount {
  constructor(private readonly addAccount: AddAccountRepository) {}

  async add({ name, email, password }: AddAccountModel): Promise<AccountModel | null> {
    return this.addAccount.add({ name, email, password });
  }
}
