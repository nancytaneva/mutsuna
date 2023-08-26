// const food_two_name     = document.querySelector("input[name='food-two-name']").value;
// const food_two_price    = document.querySelector("input[name='food-two-price']").value;
// const food_two_weight   = document.querySelector("input[name='food-two-weight']").value;
// const food_two_needed   = document.querySelector("input[name='food-two-needed']").value;
const compareBtn = document.getElementById("compareBtn");


compareBtn.addEventListener('click', () => {
    const food_one_name     = document.querySelector("input[name='food-one-name']").value;
    const food_one_price    = document.querySelector("input[name='food-one-price']").value;
    const food_one_weight   = document.querySelector("input[name='food-one-weight']").value;
    const food_one_needed   = document.querySelector("input[name='food-one-needed']").value;   

    const cost_of_gram = food_one_price / food_one_weight;
    const cost_of_single_meal = cost_of_gram * food_one_needed;
    const days_with_food = food_one_weight / food_one_needed;
    console.log(cost_of_gram);
    console.log(cost_of_single_meal);
    console.log(days_with_food);
});