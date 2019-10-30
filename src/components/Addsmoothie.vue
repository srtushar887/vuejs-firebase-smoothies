<template>
    <div class="add-smoothie container">
      <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>
      <form @submit.prevent="AddSmoothie">
        <div class="field title">
          <label for="title">Smoothie Title</label>
          <input type="text" name="title" v-model="title">

        </div>
        <div v-for="(ing, index) in ingredients" :key="index" class="field">
          <label for="ingredients">Ingredients :</label>
          <input type="text" name="ingredient" v-model="ingredients[index]">
          <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
        </div>
        <div class="field add-ingredient">
          <label for="add-ingredient">Add ab Ingredient</label>
          <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
        </div>
        <div class="field center-align">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
         <button class="btn pink">Add Smoothie</button>

        </div>
      </form>
    </div>
</template>

<script>
  import db from '@/firebase/init';
  import slugify from 'slugify';
    export default {
        name: "Addsmoothie",
        data(){
            return{
              title : '',
              another : '',
              ingredients : [],
              feedback : '',
              slug : ''
            }
        },

        methods:{
            AddSmoothie(){
                if (this.title){
                  this.feedback = null;
                  //create slug
                    this.slug = slugify(this.title,{
                       replacement :'-',
                        remove: /[$*__+~.()'"!\-:@]/g,
                        lower : true
                    });

                  db.collection('smoothies').add({
                      title : this.title,
                      ingredients : this.ingredients,
                      slug : this.slug

                  }).then(() =>{
                     this.$router.push({name : 'Index'});
                  }).catch(err => {
                      console.log(err)
                  });
                }else {
                   this.feedback = "You Must Enter a Smoothie Title";
                }
            },
            addIng(){
                if (this.another){
                  this.ingredients.push(this.another);
                  this.another = null;
                  this.feedback = null;
                }else {
                    this.feedback = 'You mush enter a value in ingredients'
                }
            },
            deleteIng(ing){
                this.ingredients = this.ingredients.filter(ingredient => {
                    return ingredient != ing;
                })
            }
        }
    }
</script>

<style scoped>
.add-smoothie{
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-smoothie h2{
  font-size: 2em;
  margin: 20px auto;
}

.add-smoothie .field{
  margin: 20px auto;

}

  .add-smoothie .delete{
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
    font-size: 1.4em;
    cursor: pointer;
  }

</style>
