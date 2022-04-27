var array=["Delhi","mumbai","chennai","bangalore","Pune"]
for (var i=0;i<array.length;i++) {
    console.log(array[i]);
}

for (var city in array) {
    console.log(array[city]);
}

for (var city of array) {
    console.log(city);
}

array.forEach(function(city) {
console.log(city);
})

