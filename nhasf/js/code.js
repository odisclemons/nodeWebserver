var curPage = 1;
var maxPage = 5;
var minPage = 1;

function btnSelect(page){
    switch (page) {
        case -1:
            if (curPage - 1 > minPage - 1 ){
                var newPage = curPage - 1;
                var oldPage = curPage;
                curPage--;
                showPage(newPage, oldPage);
            }
        break;
        case 1:
            if (curPage + 1 < maxPage){
                var newPage = curPage + 1;
                var oldPage = curPage;
                curPage++;
                showPage(newPage, oldPage);
                
            }
        break;
    }
}

function showPage(page, page2){
    var oldPage = "pg" + page2;
    var newPage = "pg" + page;
    document.getElementById(oldPage).style.display = "none";
    document.getElementById(newPage).style.display = "block";
}


/*

var classroom = [];

function student(first, last, age, grade){
    this.first = first;
    this.last = last;
    this.age = age;
    this.grade = grade;
    this.bye = function(){
        console.log("Goodbye, " + this.first);
    }
}

classroom.push(new student("Odis", "Clemons", 36, 12));
classroom.push(new student("Lisa", "Swanson", 36, 12));
classroom.push(new student("Odis1", "Clemons", 36, 12));
classroom.push(new student("Odis2", "Clemons", 36, 12));

for (var i=0; i < classroom.length; i++){
    console.log(classroom[i].first);
    classroom[i].bye();
}
*/
