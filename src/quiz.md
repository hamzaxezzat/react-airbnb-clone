1. What do props help us accomplish?
   pass a parameters to function

2. How do you pass a prop into a component?
   write prop name e.g.: prop.name

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   yes we can pass any name because it translated to js object

4. How do I receive props in a component?
   function Navbar() {
   return (
     <header >
     ...
     </header>
     )
     }

5. What data type is `props` when the component receives it?
   object

### Map Quiz

1. What does the `.map()` array method do?
   returns a new array which looping into the old array to modify new

2. What do we usually use`.map()` for in React?
   Convert an array of raw data into an array of JSX elemnts that can be displayed on th page

3. Why is using `.map()` better than just creating the components
   manually by typing them out?
   to seperate data from function,
