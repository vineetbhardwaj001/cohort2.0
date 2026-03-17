let arr = [
  {
    name: "vineet",
    age: 21,
    city: "narora",
    profile: "Full Stack Developer",
    about: "Passionate full stack developer skilled in frontend and backend development.",
    image: "./1.png"
  },
  {
    name: "raj",
    age: 21,
    city: "arora",
    profile: "MERN Developer",
    about: "MERN developer who loves building dynamic web applications using MongoDB, Express, React, and Node.",
    image: "./2.png"
  },
  {
    name: "ujjwal",
    age: 21,
    city: "naora",
    profile: "Data Scientist",
    about: "Data science enthusiast focused on data analysis, machine learning, and insights.",
    image: "./3.png"
  },
  {
    name: "bhardwaj",
    age: 21,
    city: "arora",
    profile: "UI/UX Designer",
    about: "Creative UI/UX designer with a focus on user-friendly and modern interface design.",
    image: "./4.png"
  },
  {
    name: "devo",
    age: 21,
    city: "nar",
    profile: "Developer",
    about: "Developer interested in coding, problem-solving, and building useful software projects.",
    image: "./5.png"
  },
  {
    name: "vineet",
    age: 21,
    city: "narora",
    profile: "Full Stack Developer",
    about: "Passionate full stack developer skilled in frontend and backend development.",
    image: "./1.png"
  },
  {
    name: "raj",
    age: 21,
    city: "arora",
    profile: "MERN Developer",
    about: "MERN developer who loves building dynamic web applications using MongoDB, Express, React, and Node.",
    image: "./2.png"
  },
  {
    name: "ujjwal",
    age: 21,
    city: "naora",
    profile: "Data Scientist",
    about: "Data science enthusiast focused on data analysis, machine learning, and insights.",
    image: "./3.png"
  },
  {
    name: "bhardwaj",
    age: 21,
    city: "arora",
    profile: "UI/UX Designer",
    about: "Creative UI/UX designer with a focus on user-friendly and modern interface design.",
    image: "./4.png"
  },
  {
    name: "devo",
    age: 21,
    city: "nar",
    profile: "Developer",
    about: "Developer interested in coding, problem-solving, and building useful software projects.",
    image: "./5.png"
  }
];

let sum = "";

arr.forEach((elem,idx)=>{

sum += `   <div class="card">
           
            <img src=${elem.image} alt="">
            <h2>${elem.name}</h2>
            <h3>Age : ${elem.age}</h3>
            <h4>city : ${elem.city}</h4>
            <h4>profile : ${elem.profile}</h4>
            <h4>about : ${elem.about}</h4>
            

        </div>`;



})

let main = document.querySelector("#main")


main.innerHTML = sum;