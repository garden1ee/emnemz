# RollingRolling

### Jungwon Lee, Zeewung Shin, SeoYoon Lee, Hyunwoo Park

RolyRoly is an interactive platform, in which users co-operate to write novels for their favorite dramas, comics or movies by each roleplaying one of the characters.

Available at [URL]

This project was generated with React 16.13.1.

### Classes/Pages

[src folder]
* App.js - Implemented routing link, which is redirects users to specific pages when users click on certain buttons.

[src/Pages folder]
* ChatMessage.js
* ChatPage.js
* DiscussionModal.js -
* EnterWritingroom.js
* Header.js - Header located at the top of the website that shows primary pages like: current room, published rooms, my page and etc.
* Login.js
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
* ProfileModal.js - Unused modal js file.
* PublishInfoModal.js - Modal that pops up when clicking on one of the buttons for the rooms in published work room. It displays room information like author's note, the genre of the novel and etc.



### Dependencies
* Bootstrap
* React-bootstrap
* React-router
* React-firebase
* React-dom
* React-select
* @material-ui
