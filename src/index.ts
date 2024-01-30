// prakash this side ("removeComments": true,)
const myName: string = "prkskrs";
console.log(myName);

interface Person {
  name: string;
  age: number;
}

const checkVoteEligibility = (person: Person): boolean => {
  if (person.age >= 18) {
    return true;
  }
  return false;
};

console.log(checkVoteEligibility({ name: "prkskrs", age: 18 }));
