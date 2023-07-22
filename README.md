## Dream Squad - Build Your Dream Team with React

### Description
Dream Squad is a React web application that allows users to create their fantasy football team by selecting current players. The app provides a user-friendly interface to search for desired players, view their main information, and abilities. Once the user picks a player, they can assign the player to a specific position on the field based on their primary podition (Forward, Midfielder, Defender, Goalkeeper).

### Local Setup
To run this application on your local computer, you need to create a `.env` file and include the following environment variables:
- `REACT_APP_P_KEY=YOUR_KEY` (You need to subscribe to the API mentioned below and obtain your own API key. A free subscription gives you 500 requests per month.)
- `REACT_APP_PU_KEY=sportscore1.p.rapidapi.com`

### API Resource
For fetching player data, Dream Squad uses the SportsScore API from RapidAPI. This API provides information about current players, including their main details and abilities.
Link: https://rapidapi.com/tipsters/api/sportscore1

### Demo Video
If you just want to see the results and how the app works, you can watch the video named `build-your-dream-team.mp4`.

### Resources
Dream Squad uses various CSS resources to enhance its design:
- Scroll bar: https://codepen.io/GhostRider/pen/oNvoNv
- Progress bar: https://codepen.io/bronsrobin/pen/AJZmJP
- Search input: https://codepen.io/liamj/pen/vYYLGZj

### Note to Developers
Developers interested in running the app locally should follow the instructions mentioned above and obtain their API key to access player data. Please refrain from sharing your API key with others to ensure data security.

### Goals of building this app
- Learn how and when to use React Hooks (useState, useEffect, useRef)
- Learn how and when to use custom hooks
- Learn to apply comoonent composition to avoid prop drilling and make the code more readable and structured

### Conclusion
Dream Squad provides football enthusiasts with an engaging experience to build their dream team by selecting their favorite players. With its intuitive user interface and seamless integration of the SportsScore API, the app offers a comprehensive and enjoyable fantasy football creation process.



