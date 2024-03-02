const button = document.getElementById('button');
const date = document.getElementById('date');


button.addEventListener('click',  () => {
    let dateobj = date.value;
    console.log(dateobj);
    // 2023-10-12
    // 0123456789
    let year = parseInt(dateobj.slice(0, 4));
    let month = parseInt(dateobj.slice(5, 7));
    let day = parseInt(dateobj.slice(8, 10));

    let dateCurr = new Date();
   
    let todayYear = parseInt(dateCurr.getFullYear());
    let todayMonth = parseInt(dateCurr.getMonth()+1);
    let todayDay = parseInt(dateCurr.getDay());


    if(day > todayDay){
        todayDay+=30;
        //todayDay - day;
        todayMonth-=1;
    }
    if(month > todayMonth){
        todayMonth+=12;
        //todayMonth - month;
        todayYear-=1;
    }

    let age = todayYear - year;
    let ageMonth = todayMonth - month;
    let ageDay = todayDay - day;
    if(age < 0 || ageMonth < 0 || ageDay < 0){
        console.log(age);
        console.log(ageMonth);
        console.log(ageDay);
        alert("Not born yet");
    }else{
        print(age, ageMonth, ageDay);
    }
    


})

const print = (age, ageMonth, ageDay) => {
    const years = document.getElementById('years');
    const months = document.getElementById('months');
    const days = document.getElementById('days');

    years.innerText = "";
    months.innerText = "";
    days.innerText = "";

    

    years.innerHTML = `<p class="text">${age}</p><p>Years</p>`;

    months.innerHTML = `<p class="text">${ageMonth}</p><p>Months</p>`;

    days.innerHTML = `<p class="text">${ageDay}</p><p>Days</p>`;



 }