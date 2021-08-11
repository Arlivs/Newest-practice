document.addEventListener("DOMContentLoaded", () => {

//////
const simpleMap = new Map([["name", "Puk"],["nick", "Arlivs"],["Pass", "adasad"]])
const simpleSet = new Set([1, 2, 3, 2, 4, 5])
const simpleObj = {
    name: "Vadick",
    age: 23,
    job: "Taxist",
    _adress: {city: "Praha", street: "strets", },
    sayHello() {console.log(this.name)},
    aboutJob() {console.log("im work " + this.job)},
}
function about({name = "нет имени", age = "без возраста"}){console.log(name, this.job, `${age}`)};
const user = {name: "PukPuk", _password: "asd", nickname: "Arlivs",}
const userArr = ["puk", "asdasdads", "Arlivs"]
////////


const IndexOfArr = new Proxy(Array, {
    construct(target, [arg]) {
        const index = {}
        arg.forEach(el => index[el.id] = el);
        return new Proxy(new target(...arg), {
            get(arr, prop) {
                switch(prop) {
                    case "push": return item => {
                        index[item.id] = item;
                        arr[prop].call(arr, item)
                    };
                    case "getById": return id => index[id];
                    case "splic": return (ind, value) => {
                        !value ? delete arr[ind] : arr[ind] = value;
                    }
                    default: return arr[prop]
                }
            } 
        })
    }
});
const usersi = new IndexOfArr([
    {id:1, name: "Vasya", password: "asddas", job: "Taxist" },
    {id:2, name: "Volodya", password: "asdsad", job: "Streamer" },
    {id:3, name: "Vlad", password: "asdasd", job: "eblan" },
    {id:4, name: "Vova", password: "asddsa", job: "net" },
])

const iterator = {
    [Symbol.iterator](n = 5) {
        let num = 0
        return {
            next() {
                if(num < n) return { value: ++num, done: false}
                return { value: undefined, done: true}; 
            }
        }
    }
}

let changeType = {
    name: "Vasya",
    age: 30,
    job: "Front",
}
function changingType() {
    let count = 0
    $(".type-change").on("click", () => {
        ++count;
        let modType = Object.entries(changeType);
        count == 1 ? console.log(modType): 0;
        count == 2 ? console.log(new Map(modType)): 0;
        if(count == 3) {
            console.log(new Set(modType));
            count = 0
        };
    });
}changingType()

const themeDay = document.querySelector(".layout-day");
const themeNight = document.querySelector(".layout-night");
themeDay.onclick = () => {
    document.body.classList.add("day-theme");
    document.body.classList.remove("night-theme")
}
themeNight.onclick = () => {
    document.body.classList.add("night-theme")
    document.body.classList.remove("day-theme")
}


function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  console.log(x);
}list([{name: 'Bart'},{name: 'Lisa'}])

console.log("sdsfsd".repeat(0));
})