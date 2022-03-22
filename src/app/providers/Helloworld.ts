export interface Person {
  name: string;
  welcomeInfo: string;
}
export class Student {
  message: string;
  constructor(
    public name,
    public welcomeInfo
  ) {
    this.message = name + '、n' + welcomeInfo;
  }
}
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function greeter(person: Person) {
  return 'Hello, ' + person.name + ' ' + person.welcomeInfo;
}
