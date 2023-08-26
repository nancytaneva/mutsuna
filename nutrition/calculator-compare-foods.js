const foodResult = document.getElementById("food-result");
const compareBtn = document.getElementById("compareBtn");

compareBtn.addEventListener('click', () => {
    const food_one_name     = document.querySelector("input[name='food-one-name']").value;
    const food_one_price    = document.querySelector("input[name='food-one-price']").value;
    const food_one_weight   = document.querySelector("input[name='food-one-weight']").value;
    const food_one_needed   = document.querySelector("input[name='food-one-needed']").value;   

    const cost_of_gram_one          = food_one_price / food_one_weight;
    const cost_of_single_meal_one   = (cost_of_gram_one * food_one_needed).toFixed(2);
    const days_with_food_one        = Math.floor(food_one_weight / food_one_needed);

    const food_two_name     = document.querySelector("input[name='food-two-name']").value;
    const food_two_price    = document.querySelector("input[name='food-two-price']").value;
    const food_two_weight   = document.querySelector("input[name='food-two-weight']").value;
    const food_two_needed   = document.querySelector("input[name='food-two-needed']").value;

    const cost_of_gram_two          = food_two_price / food_two_weight;
    const cost_of_single_meal_two   = (cost_of_gram_two * food_two_needed).toFixed(2);
    const days_with_food_two        = Math.floor(food_two_weight / food_two_needed);

    foodResult.innerHTML = `
    <p>Резултат:</p>
    <div style="display: flex;">
        <div class="food-one">"${food_one_name}"</div>
        <div class="food-two">"${food_two_name}"</div>
    </div>
    <p>Цена на нужното количество на ден:</p>
    <div>
        <div style="display: flex;"> 
            <div class="food-one">${cost_of_single_meal_one} лв.</div>
            <div class="food-two">${cost_of_single_meal_two} лв.</div>
        </div>
        <p>Храната ще стигне за:</p>
        <div style="display: flex;">
            <div class="food-one">${days_with_food_one} дни</div>
            <div class="food-two">${days_with_food_two} дни</div>
        </div>
    </div>
    `;
});