function myun() {

    const myTech: string[] = ["Node", "Mysql", "JS", "PostgreSql", "MongoDb"];
    return myTech
}

//Type intersection (using AND between types)

type hasID = { id: string | number }
type hasName = { name: string }
type hasEmail = { email: string };
type hasPhNo = { phNo: number | null };

type userCredz = hasID & hasName & hasEmail & hasPhNo;

const user: userCredz = {
    name: "Karim",
    id: 3435,
    email: "email@email.com",
    phNo: 8432948299
}

console.log(user.name.toLocaleUpperCase());
// console.log(typeof user.name, "\n");
// console.log(typeof user.id, "\n");
// console.log(typeof user.email === "boolean");
// console.log(typeof user.phNo, "\n");
myun();

export { };