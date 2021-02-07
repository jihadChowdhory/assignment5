// https://www.themealdb.com/api/json/v1/1/search.php?f=a
// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

function searchMeal() {
  const mealName = document.getElementById('get-meal-name').value;
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=' + mealName;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const allMealNames = document.getElementsByClassName('meal-name');
      const allMealImages = document.getElementsByClassName('meal-img');
      const allItems = document.getElementsByClassName('item-div');
      for (let i = 0; i < data.meals.length; i++) {
        const mealImg = data.meals[i].strMealThumb;
        const item = data.meals[i].strMeal;
        const eachName = allMealNames[i];
        eachName.innerText = item;
        const eachImg = allMealImages[i];
        eachImg.setAttribute('src', mealImg);
        eachItemDiv = allItems[i];
        eachItemDiv.style.display = 'block';
      }
    })
}

function doSomething() {
  const someData = `
  <h1>Hey how are you?</h1>
  <p>I am fine thank you.</p>
  `;
  const parent = document.getElementById('practice');
  parent.appendChild(someData);
}