// https://www.themealdb.com/api/json/v1/1/search.php?f=a
// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

function searchMeal() {
  const mealName = document.getElementById('get-meal-name').value;
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=' + mealName;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
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
        const eachItemDiv = allItems[i];
        eachItemDiv.style.display = 'block';
        eachItemDiv.addEventListener('click', function () {
          const mealDetails = document.getElementById('meal-details');
          document.getElementById('meals').style.display = 'none';
          mealDetails.style.display = 'block';
          const itemId = data.meals[i].idMeal;
          const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + itemId;
          fetch(url)
            .then(res => res.json())
            .then(data => {
              const mealImg = data.meals[0].strMealThumb;
              const mealName = data.meals[0].strMeal;
              document.getElementById('details-meal-img').setAttribute('src', mealImg);
              document.getElementById('details-meal-name').innerText = mealName;
            })
        })
      }
    })
}