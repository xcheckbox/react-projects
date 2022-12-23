
export const PersonAdapter = (data) => {

  const person = data.results[0];

  return {
    name: `${person.name.first} ${person.name.last}`,
    lastName: person.name.last,
    email: person.email,
    age: person.dob.age,
    street: `${person.location.street.number} ${person.location.street.name}`,
    phone: person.phone,
    password: person.login.password,
    image: person.picture.large
  }
}