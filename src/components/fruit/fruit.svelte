<script>

export let fruits
export let reverse
export let slice
export let name
export let fn

let computedFruits = [...fruits]
computedFruits = reverse ? computedFruits.reverse() : computedFruits
computedFruits = slice ? computedFruits.slice(...slice.split(',')) : computedFruits
computedFruits = fn ? fn(fruits) : computedFruits

</script>

<h2>fruits {name} </h2>
<ul>
    {#each computedFruits as f }
        <li>{f}</li>        
    {/each}
</ul>
