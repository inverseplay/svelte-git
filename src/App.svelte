<script>
import Footer from "./components/footer/footer.svelte";
import Fruit from "./components/fruit/fruit.svelte";
import Header from "./components/header/header.svelte";
import Main from "./components/main/main.svelte";

let fruits = ["사과","딸기","포도","배"]
let fn = f => [...f,"복숭아"]

</script>
<Header />
<Main />
<Fruit {fruits} name="일반 전개"  />
<Fruit {fruits} reverse  name="역전개"/>
<Fruit {fruits} slice="-2"  name="슬라이스 -2" />
<Fruit {fruits} slice="1,3"   name="슬라이스 1,3 = 포함~미포함" />
<Fruit { fruits } {fn} name="복숭아 한개 추가"   />
<Fruit fruits = { fn(fn(fruits))}  name="복숭아 두개 추가"  />
<Footer />