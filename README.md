### Project Insights
I decided I'll be using Next.Js rather than React.js so as to make use of the former's pre-rendering and pre-fectching features. 

For better folder and file structures, I created a `components` folder which holds all my components, a `lib` folder where all calls to external APIs are stored, and an `interfaces` folder which holds all my types/interface decalrations.

I also made use of dynamic routes to render a detailed view of a Pokemon using the pokemon Id as the route parameter.

An interesting piece of code for me can be found in the `/lib/pokemon.ts` file. I discovered that on making a call to fetch all Pokemons, the `image` and `id` of each Pokemon was not returned so I needed to find a way to return them since I'll be needing it to complete the challenge.
In other to solve this problem, this is the approach I used.
> - Make a call to return all Pokemon data
> - A results array containing just the pokemon name and url was returned together with other data(count, next, previous)
> - I modified this results array by looping through all the returned pokemon and making an API call to get each pokemon using the pokemon name in the returned array
> - The data returned contained both the pokemon Id and the pokemon Image.
> - So I added this id and Image to the results array for each pokemon thereby ensuring that all pokemon returned contained an Id and Image.

### How I was able to tackle the pagination feature
   1. In the `getServerSideProps` function, I recieved the page number from the query params. I set the page initially to 1 and then in the useEffect hook, this ensures that page 1 is what is loaded first and subsequent page is rendered depending on the page value.

 1. the next button increased the page number by 1 and multiply the result by the limit which in our case is 16.
 2. The previous button does the exact opposite(subtract 1 from page number and multiply result by limit)
 3. I also added a logic to enable or disable the previous and next buttons
 4. if the page number is equal to 1, disable the previous button. This ensures we don't have a negative value for page number
 5. If the page number multiplied by the limit is greater than the total count of pokemons, then disable the next button as well. This ensures that we don't get to a pages that have empty pokemon to display.


### Features not Implemented
1. Due to time constraint, I was unable to implement the optional text search feature


### Part I'ld Like to Improve on
1. On visiting the `pokemon details` page, I get this warning on my terminal `Warning: data for page "/pokemon/[pokemonId]" is 154 kB, this amount of data can reduce performance.` I tried fixing this but discovered I was running out of time. The minimum size for a page should be 128kb.
2. I also got this warning while checking my browser console. `Warning: Each child in a list should have a unique "key" prop.`
3. Properly handle `loading state`
