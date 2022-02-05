<script>

export let fruits
export let reverse
export let slice
export let name

let computedFruits = []
computedFruits = reverse ? [...fruits].reverse() : [...fruits]
computedFruits = slice ? computedFruits.slice(...slice.split(',')) : computedFruits

// 이러한 코드를 함수형으로 재정의 해보자

</script>

<h2>fruits {name} </h2>
<ul>
    {#each computedFruits as f }
    <li>{f}</li>        
    {/each}
</ul>
