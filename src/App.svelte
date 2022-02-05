<script>
import Footer from "./components/footer/footer.svelte";
import Fruit from "./components/fruit/fruit.svelte";
import Header from "./components/header/header.svelte";
import Main from "./components/main/main.svelte";

let fruits = ["사과","딸기","포도","배"]

</script>
<Header />
<Main />
<Fruit {fruits} name="일반 전개"  />
<Fruit {fruits} reverse  name="역전개"/>
<Fruit {fruits} slice="-2"  name="슬라이스 -2" />
<Fruit {fruits} slice="0,4" reverse  name="슬라이스 0,4" />
<Footer />