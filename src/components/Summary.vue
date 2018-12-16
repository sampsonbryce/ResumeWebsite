<template>
    <div class='container' id="summary">
        <div class='section'>
            <div class='title'>
                <h1 class='large'>WHAT IT DOES</h1>
            </div>
            <div class='content card-grid'>
                <div class='card shadow-2' id="description">
                    <h3 class='shadow-2'>Modern Features</h3>
                    <p>
                        v4.0 of Bryce is focused on the JavaScript world with emphasis on fullstack web development using frontend frameworks such as Vue.js and React.js with backend focused on Node.js and PHP combined with GraphQL
                    </p>
                    <p>
                        With this comes support for handling mobile projects through the use of React Native
                    </p>
                </div>
                <div class='card with-list shadow-2'>
                    <h3 class="shadow-2">Backwards Compatability</h3>
                    <p>Continued support for:</p>
                    <ul>
                        <li>- Backend web development in Node.js, PHP, and Python</li>
                        <li>- Desktop application development in Python and Qt</li>
                    </ul>
                </div>
                <div class='card shadow-2 with-list'>
                    <h3 class="shadow-2">The Fundamentals</h3>
                    <p>
                        Foundation of:
                    </p>
                    <ul>
                        <li>- Linux Proficiency</li>
                        <li>- Version Control</li>
                        <li>- Extensive Documentation</li>
                    </ul>
                </div>
                <div class='card with-list shadow-2'>
                    <h3 class="shadow-2">Experimentation</h3>
                    <p>
                        Working on: 
                    </p>
                    <ul>
                        <li>- Continuous Integration</li>
                        <li>- Containerization</li>
                        <li>- Golang Support</li>
                    </ul>
                </div>
                <div class='card with-list shadow-2'>
                    <h3 class="shadow-2">Built for the Cloud</h3>
                    <p>
                        Support for:
                    </p>
                    <ul>
                        <li>- Amazon Web Services (AWS)</li>
                        <li>- Google Cloud Platform (GCP)</li>
                        <li>- Microsoft Azure</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "summary-component",
    data(){
        return {
        }
    }
}
</script>
<style lang="scss" scoped>

.container{
    background-color: $primary;
}
.section{
    // min-height:0;
}

.card-grid{
    display:grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px 20px;
    padding: 10px;
    padding-bottom:80px;
    @media (max-width: $phone){
        grid-template-rows:1fr 1fr 1fr 1fr 1fr;
        grid-template-columns: 100%;
    }

    & #description{
        grid-column: 1 / 3;
        grid-row: 1 / 1;
        & p{
            max-width:700px;
        }
        @media (max-width: $phone){
            grid-column:1/1;
        }
    }

    & .card{
        background-color:$secondary;
        padding:0 20px;
        height: 230px;
        display:grid;
        align-items:center;
        justify-items:center;
        @media (max-width: $phone){
            height:auto;
        }
        & h3{
            color:$primary;
            background:$white;
            padding:15px;
            font-weight:200;
        }

        &.with-list{
            grid-template-columns: 1fr 1.2fr;
            & h3 {
                grid-column: 1 / 3;
            }
            & p {
                align-self:start;
                justify-self:end;
                padding-right:20px;
            }
            & ul{
                text-align:left;
                padding-left:1em;
                text-indent: -.7em;
                align-self:start;
                justify-self:start;
                & li{
                    display:list-item;
                }
            }
        }
    }
}
</style>