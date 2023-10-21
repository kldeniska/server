<template>
    <div class="nav">
        <nav>
            <router-link  style="text-decoration: none; color: inherit;  " to='/'><h1 class="title-example">Личный кабинет</h1></router-link>
            <router-link  style="text-decoration: none; color: inherit;" to='/chat'><h1 class="title-example">ЧАТ</h1></router-link>
            <router-link  style="text-decoration: none; color: inherit;" to='/test'><h1 class="title-example">Формулы</h1></router-link>
        </nav>
    </div>
</template>

<script>
export default{
    name: 'NavComp'
}
</script>

<style>
h1 { 
    text-decoration: none;
}
.nav {
    width: 100%;
    height: 100%;
    background-color: #B3A16C;
    overflow: auto;
    margin: 0;
    background-size: cover;
    background-attachment: local; 
}
h1.title-example{
    font-size: em;
    color: #5a5a5a;
    text-align:center;
}    
h1.title-example:before {
    content: '';
    display: block;
    height: 2px; 
    background: #f66d52; 
    width: 250px; 
    margin: 0 auto 10px;
    transition: 1s; 
}
h1.title-example:hover:before {
    width: 350px; 
    transition: ease-out 1s;  
} 
h1.title-example:after {
    content: '';
    display: block;
    height: 2px; 
    background: #f66d52; 
    width: 250px; 
    margin: 10px auto 0;
    transition: 1s; 
}
h1.title-example:hover:after {
    width: 350px; 
    transition: ease-out 1s; 
}
</style>