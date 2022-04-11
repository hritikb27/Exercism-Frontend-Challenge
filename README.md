# Exercism Frontend Developer Challenge Documentation

The main code flow starts from **App.tsx** in src directory.

Header, MainTitle and TestimonialTable components are rendered from here only.

Header and Main Title components doesn't contain any child components and are rendered with static data for now.

The major component of this project from where every core functionality starts working is TestimonialTable.tsx

## TestimonialTable.tsx

This component has few child components which render from it.

And this component drills down all the necessary states to it's children accordingly.

Firstly we have declared a global const variable "pageSize", which defines how many columns the testimonial table will have.

Then we have types for testimonial state.

We have also imported **Track** type from TracksDropdown.tsx component which handles the rendering of all the tracks in the dropdown.

Then we have defined all the necessary states needed for the data.

The first useEffect function will run after the first render of the component.

Inside that first useEffect, there is a function called getTestimonials which is an asynchronous function.

When we call getTestimonials(), the first thing it does is the isLoading state to true and set paginatedTestimonials to sampleTestimonialData, so that we have the table content blurred out with sample data and the loading spinner is spinning (Later on this).

Then we await a fetch call with the api url provided by **Exercism** for fetching the testimonials.

After the data has been fetched, we set testimonials to **data.testimonials.results** as we only need results array from the data which is being returned.

We also set paginatedTestimonials after doing some logic on the data with the lodash library.

After the data is being set to it's respective states, the isLoading state is set to false, so that the component can render the fetched data on the table.

Then we do some logic on data to get the count of the pages according to the page size and number of testimonials and set the pageCount state.

And here, the first useEffect hook ends!

## Change on Track Filter and Order Sorting

For fetching data according to the track filter and order sorting preferences provided by the user, we have an useEffect which will be run whenever trackFilter or orderFilter state is changed.

This useEffect will call getFilteredTestimonials function which will do almost the same thing as the first useEffect hook but with having the fetch url with optional parameters for track, exercise and order.

The getFilteredTestimonials function is defined outside the useEffect hook as it is also being used by another function which we are going to discuss next.

## Change on Exercise Title
So the next function is handleExerciseChange.

This function sets the searchValue state which is the value of input field and then sets the exerciseFilter state with the value of the input field.

Then we have **clearTimeout(timeoutID)**, this logic is for reducing api calls when the user is typing in the input field.

We call **callFetcher** function which has a setTimeOut which calls getFilteredTestimonials after 1.5 seconds.

If the user types something on the input field again under 1.5 seconds, the setTimeOut event will be cancelled and the fetch call won't be made.

This will cause in fewer api calls as the api call will only be made when user has typed something and waits for 1.5 seconds to make a change again on input field.

The 1.5 seconds setTimeOut duration is just for the demonstration purpose and we can change it according to our requirements.

And after all the functions and logic in this component, we have all the JSX written inside the return call.

Code Flow Diagram:
![Exercism Frontend Challenge Diagram drawio](https://user-images.githubusercontent.com/86529959/162704438-79fb1dc6-938c-453a-ae76-a87be768b4f9.png)

Draw.io Link: https://app.diagrams.net/#G1kwNt8jxI6IIg0UuDEoJMwTqJaRt1EAe4
