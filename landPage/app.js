

(
    function()
    {
        console.log("okay");
    }
)();

let descriptions = 
[
    "Habilidaes com front end - html, css, java script, react entre outros",
    "Habilidades com back end - java, c / c++, c# e python - projetos disponiveis no github",
    2,
    3,
    4,
    5
];
let arr = [];
let xy = 0;
let xy_ax = document.getElementsByClassName("skill-area");

for (let i = 0; i < xy_ax.length; i++) {
    arr.push(xy_ax[i]);

    arr[i].addEventListener("click", e =>
        {
            xy = i;
            updateDescription(descriptions[i])
            console.log(xy);
        }
    )
}

function updateDescription(i)
{
    let ab = document.getElementById("skill-description");

    ab.innerHTML = i
}
