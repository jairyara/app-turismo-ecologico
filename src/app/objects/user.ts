/* eslint-disable */
export class User {
  private readonly _name: string;
  private readonly _email: string;
  private readonly _password: string;

  constructor(userArray: any) {
    this._id = userArray._id;
    this._name = userArray.name;
    this._email = userArray.email;
    this._password = userArray.password;
  }

  private _id: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }
}
