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
              const ingredient1 = data.meals[0].strIngredient1;
              const ingredient2 = data.meals[0].strIngredient2;
              const ingredient3 = data.meals[0].strIngredient3;
              const ingredient4 = data.meals[0].strIngredient4;
              const ingredient5 = data.meals[0].strIngredient5;
              const ingredient6 = data.meals[0].strIngredient6;
              const ingredient7 = data.meals[0].strIngredient7;
              const ingredient8 = data.meals[0].strIngredient8;
              const ingredient9 = data.meals[0].strIngredient9;
              const ingredient10 = data.meals[0].strIngredient10;
              document.getElementById('ingredient1').innerText = ingredient1;
              document.getElementById('ingredient2').innerText = ingredient2;
              document.getElementById('ingredient3').innerText = ingredient3;
              document.getElementById('ingredient4').innerText = ingredient4;
              document.getElementById('ingredient5').innerText = ingredient5;
              document.getElementById('ingredient6').innerText = ingredient6;
              document.getElementById('ingredient7').innerText = ingredient7;
              document.getElementById('ingredient8').innerText = ingredient8;
              document.getElementById('ingredient9').innerText = ingredient9;
              document.getElementById('ingredient10').innerText = ingredient10;
            })
        })
      }
    })
}