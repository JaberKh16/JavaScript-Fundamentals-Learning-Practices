document.addEventListener('DOMContentLoaded', () => {
    async function fetchPosts(){
        try {
            const url = 'https://imdb.iamidiotareyoutoo.com'
            const response = await fetch(url);
            console.log(response)
        } catch(e){

        }
    }

    // call the function 
    fetchPosts();
})