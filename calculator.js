function calculate() {
	alert("Welcome to Calculator of Daily Food Intake!");
	var user = prompt("Please enter your name.");
	alert("Welcome, " + user + "!"); 
	do {
	var intake = prompt("Enter your consumed food items, separated by a comma, without spaces.");
	var arr = intake.split(",");
	var sum = 0;
	for (var i=0; i<arr.length; i++) {
		if (arr[i].toLowerCase() == "pasta") {
			sum = sum + 500; } 
		if (arr[i].toLowerCase() == "fried rice") {
			sum = sum + 450; } 
		if (arr[i].toLowerCase() == "burger") {
			sum = sum + 550; } 
		if (arr[i].toLowerCase() == "grilled chicken") {
			sum = sum + 350; } 
		if (arr[i].toLowerCase() == "steak") {
			sum = sum + 450; } 
		if (arr[i].toLowerCase() == "salad") {
			sum = sum + 300; } 
		if (arr[i].toLowerCase() == "fresh fruits") {
			sum = sum + 200; } 
		if (arr[i].toLowerCase() == "bread") {
			sum = sum + 150; } 
		if (arr[i].toLowerCase() == "pancakes") {
			sum = sum + 350; } 
		if (arr[i].toLowerCase() == "cake") {
			sum = sum + 450; } 
		if (arr[i].toLowerCase() == "chocolate") {
			sum = sum + 450; } 
		if (arr[i].toLowerCase() == "juice") {
			sum = sum + 80; } 
		if (arr[i].toLowerCase() == "tea") {
			sum = sum + 150; } 
		if (arr[i].toLowerCase() == "coffee latte") {
			sum = sum + 250; } 
		if (arr[i].toLowerCase() == "water") {
			sum = sum + 0; } }
	alert("Your daily food intake is: " + sum + ".");
	if (sum>2500) {
		alert("To maintain your health, keep the balanced number of calories."); }
	if (sum<=2500) {
		alert("Daily norm is maintained."); }
	var loop = prompt("Do you want to calculate daily food intake again? (yes/no)"); }
	while (loop.toLowerCase()=="yes") 
	alert("Thank you for using this program!");
}