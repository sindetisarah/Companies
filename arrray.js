const companies=[
    {name:"Company_One",category:"Finance",start:1981,end:2003},
    {name:"Company_Two",category:"Retail",start:1982,end:2004},
    {name:"Company_Three",category:"Auto",start:1983,end:2005},
    {name:"Company_Four",category:"Food",start:1984,end:2006},
    {name:"Company_Five",category:"Tourism",start:1985,end:2007},
    {name:"Company_Six",category:"Food",start:1986,end:2010},
    {name:"Company_Seven",category:"Auto",start:1987,end:2008},
    {name:"Company_Nine",category:"Retail",start:1988,end:2009},

];
const ages=[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32]
var summation = companies.reduce((sum,year) => sum+=year.end,0)
console.log(summation)





//forEach
//filter
//map
//sort
//reduce

//standard forloop
for(var i=0;i<=companies.length;i++){
    console.log(companies[i]);
}
//for Each
companies.forEach(function(company){
    console.log(company.name)
})
companies.forEach(function(category){
    console.log(category.category)
})
//filter
//create an empty list
let list=[];
for(let i=0;i<ages.length;i++){
    if(ages[i]>=22){
        list.push(ages[i]);
    }
}
console.log(list)
//filter
const filter_list=ages.filter(function(age){
    if(age>=21){
        return true
    }


})
console.log(filter_list)
//we can do the same thing with arrow function 
const another_list=ages.filter(age=>age>=21);
console.log(another_list)
const less_20=ages.filter(age=>age<20);
console.log(less_20)
const less_15=ages.filter(age=>age<15);
console.log(less_15)
const less_5=ages.filter(age=>age<5);
console.log(less_5)
//filter retail companies
const retail_companies=companies.filter( function(company){
    if(company.category==="Retail"){
        return true
    }

})
console.log(retail_companies)
//using the shorthand property
const retailers=companies.filter(company=>company.category==="Retail")
console.log(retailers)
const find_retail=companies.filter(company=>company.category==="Auto")
console.log(find_retail)
var numbers=[1,23,4,5,6,7]
var max=numbers.filter(number=>Math.max(number))
console.log(max)
console.log(Math.max(1,2,3,4,5))
var agez=[1,2,3,4,5,6,7]
var less_2=agez.filter(age=>age<2)
console.log(less_2)

//COMAPNIES FROM 80'S   

var earliest=companies.filter(company=>(company.start>=1980 && company.start<1990))
console.log(earliest)
//last for ten years or more
const ten_years=companies.filter(company=>(company.end-company.start)>=10)
console.log(ten_years)
//map
//we can create new arrays
//create array of company names
var companies_names=companies.map(function(company){
    return company.name
});

console.log(companies_names)
var companies_names2=companies.filter(company=>company.name)
console.log(companies_names2)
var companies3=companies.map(company=>company.category)
console.log(companies3)
var companies_start=companies.map(company=>company.start)
console.log(companies_start)
var find=companies.find(company=>company.category==="Retail")
console.log(find)
var list_new=companies.map(company=>`${company.name}:(${company.end}-${company.start})`)
console.log(list_new)
//using age list
var square_age=ages.map(age=>age*age)
console.log(square_age)
var square_root=ages
.map(age=>Math.sqrt(age))
.map(age=>age*2)
console.log(square_root)
//sort
sort_comp=companies.sort(company=>company.start)
console.log(sort_comp)
//correct way of sorting
var sort_correctly=companies.sort((a,b)=>(a.start-b.start))
console.log(sort_correctly)
var sort_age=ages.sort((a,b)=>a-b)
console.log(sort_age)
//reduce

  
//filter
//reduce
//sort
//find
//map
//Math.sqrt &&Math.max

