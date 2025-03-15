"use strict";
// write code here
const employeesList = document.querySelectorAll(".list li");
function sortList(list, salaryKey = "salary") {
    return list.sort((a, b)=>{
        const salaryA = parseFloat(a[salaryKey].replace(/[^0-9.-]+/g, ""));
        const salaryB = parseFloat(b[salaryKey].replace(/[^0-9.-]+/g, ""));
        return salaryB - salaryA;
    });
}
function getEmployees(list) {
    return Array.from(list).map((person)=>{
        return {
            element: person,
            position: person.getAttribute("data-position"),
            salary: person.getAttribute("data-salary"),
            age: person.getAttribute("data-age")
        };
    });
}
const employees = getEmployees(employeesList);
const sortedEmployees = sortList(employees);
const listContainer = document.querySelector(".list");
listContainer.innerHTML = "";
sortedEmployees.forEach((employee)=>{
    listContainer.appendChild(employee.element);
});

//# sourceMappingURL=index.f75de5e1.js.map
