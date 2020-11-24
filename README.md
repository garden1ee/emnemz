# RollingRolling

### Jungwon Lee, Zeewung Shin, SeoYoon Lee, Hyunwoo Park

RolyRoly is an interactive platform, in which users co-operate to write novels for their favorite dramas, comics or movies by each roleplaying one of the characters.

Available at https://mnms-6771f.web.app/

This project was generated with React 16.13.1.

### Classes/Pages

[src folder]
* App.js - Implemented routing link, which is redirects users to specific pages when users click on certain buttons.

[src/Components folder]
* AuthApplication.js - If the user did not sign in, it redirects the user to the signup link ('/signup') and if the user did sign in, it redirects to the mypage of the website.
* CreateRoom.js - 
* ScriptProvider.js -
* SignIn.js - Login interface as well as algorithm for determining whether the user entered in correct email address and password.
* SignUp.js - Sign up interface as well as algorithm for determining whether user entered valid value for each blank space.
* UserProvider.js - 
  
[src/Pages folder]
* ChatMessage.js
* ChatPage.js
* DiscussionModal.js -
* EnterWritingroom.js - File that determines whether user's room id matches with the pre-existing room. If it matches it redirects the user to the room, if not it shows the alert "you cannot enter here".
* Header.js - Header located at the top of the website that shows primary pages like: current room, published rooms, my page and etc.
* Login.js - Calls 'AuthApplication.js' file.
* NovelRoomInfo.js - Information aggregation about novel room. It contains genre and charactor of  novel. 
* ProfilePage.js - MyPage page in which users can see personal informations like profile information and rooms the users are currently involved in.
* UserList.js
* Vote.js
* WritingroomPage.js

[src/Pages/Mainpages folder] - Elements of the Header.js
* MyPage.js - Unused js file.
* PublishedList.js - Page that displays completed works the platform users have published.
* RoomList.js - Page that displays currently available works that users can currently participate in.

[src/Pages/Mainpages/Modals folder] - Folder for modals used when clicking on buttons
* AlarmModal.js - Modal that pops up when clicking on "알림" page. Currently used to show user's request for the room is accepted and directs the user to writing room if user chooses to do so.
* ChatInfoModal.js / ChatSignupModal.js / SubmissionModal.js - Modals used for signing up for rooms in "RoomList.js". Clicking on "등록" button directs to subsequent modal, and user submits the form to the host of the room.
* CreateRoomModal.js - Currently unused modal file, which displayed modal to create and host writing room.
* EditProfileModal.js - Modal that pops up when clicking "Edit Profile" button in MyPage page.
* EnterRoomModal.js - Modal that pops up when clicking on picture in "참가하는 방" that redirects user to writing room the user is participating in.
* PublishInfoModal.js - Modal that pops up when clicking on one of the buttons for the rooms in published work room. It displays room information like author's note, the genre of the novel and etc.
* RoomCompleteModal.js - File that displays respective modal when clicking on one of the published works ("완결낸 방") in "Mypage" page.
* RoomRequestModal.js - File that displays respective modal when clicking on one of the request pending rooms ("신청중인 방") in "Mypage" page.


### Dependencies
* Bootstrap
* React-bootstrap
* React-router
* React-firebase
* React-dom
* React-select
* @material-ui
* @fontawesome
