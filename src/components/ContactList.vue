<template>
  <div class="hello">
    <div>
      <div className="banner">
        <div>
          <h2>Contact Manager</h2>
          <p>This is a portfolio project to showcase knowledge of:</p>
          <ol>
            <li>React Components and JSX.</li>
            <li>React Router.</li>
            <li>Component state management.</li>
            <li>Context api for global state management.</li>
            <li>
              Making asynchronous calls to the Json placeholder fake rest api
              using "async/await".
            </li>
          </ol>
          </div>
      
      </div>
      <div v-for="post in posts" :key="post.id">
        <b-button @click="getPosts()" v-b-toggle.collapse-1 variant="primary" > Name</b-button>
        <b-collapse id="collapse-1" class="mt-2">
            <b-card>
                <p class="card-text">Email{{post.email}} <br /> Phone {{post.phone}}</p>
            </b-card>
        </b-collapse>
      </div>

    </div>
    <!-- <button @click="getPosts()" >Load Contact</button>
    <h3 v-if="errorMsg">{{errorMsg}}</h3>
    <div v-for="post in posts" :key="post.id"> 
      <h3>{{post.id}}.{{post.name}}</h3>
      <p>{{post.phone}}</p> -->
    <!-- </div> -->

   
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'ContactList',
  data(){
    return{
      posts:[],
      errorMsg: '',
    }
  },
  methods:{
    getPosts(){
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response) => {
          console.log(response.data)
          this.posts = response.data
       })
       .catch((error) => {
         console.log(error)
         this.errorMsg = "Error Retrieving Data"
       })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
.banner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
}
.banner > div {
    background-color: #e9ecef;
    border-radius: 10px;
    padding: 3rem 3rem;
    width:70%;
}
.banner > div > h2 {
    text-align: center;
}
.banner > div > p {
    font-size: 22px;
}
ol {
    list-style-type: lower-roman;
}
li {
    display: list-item;
    font-size: 18px;
}

</style>
