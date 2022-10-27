let apply = document.getElementById('application_form');
let notice = document.getElementById('alert');

let personal = document.getElementById('personal');
let personFw = document.getElementById('personFw');

let academic = document.getElementById('academic');
let personBk = document.getElementById('personBk');
let academicFw = document.getElementById('academicFw');

let study = document.getElementById('study');
let studyBk = document.getElementById('studyBk');

let oLevel = document.getElementById('oLevel');
let addBtn = document.getElementById('addInput');
let inputCount = 1;

personFw.addEventListener('click', ()=>{
    if(apply.name.value === ""){
        notice.style.display = "block"
        notice.innerHTML = "Please fill all required fields";
        setTimeout(()=>{
            notice.style.display = "none"
        }, 5000)
    }else{ 
        personal.style.display = "none"
        academic.style.display = "flex"
    }
    
})

personBk.addEventListener('click', ()=>{
    personal.style.display = "flex"
    academic.style.display = "none"
})

academicFw.addEventListener('click', ()=>{
    academic.style.display = "none"
    study.style.display = "flex"
})

studyBk.addEventListener('click', ()=>{
    study.style.display = "none"
    academic.style.display = "flex"
})

const formInput = count =>{
    return `
    <div class="flex flex-col space-y-2 items-start ">
        <label for="o_level${count}" class="block text-sm font-medium"> O'Level Certificate </label>
        <input 
            type="file"
            name="o_level${count}"
            class="w-[80vw] md:w-[400px] px-4 py-2 text-sm border border-armyGreen rounded-md focus:outline-none focus:ring-1 focus:ring-armyGreen"
        />
    </div>
    `
}

addBtn.addEventListener('click', ()=>{
    inputCount += 1;
    oLevel.insertAdjacentHTML('afterend', formInput(inputCount))
    addBtn.style.display = "none"
})