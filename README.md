### Elevator Pitch
**extrapushups.com**

This website will track how many pushups you do every day. It is extremely simple and easy to use. Sign up, and instantly set a daily goal for pushups, and track it everyday. The service will give you daily motivational quotes, and notifies you when other users complete their pushups. It also has a statistical analysis section, where you can find your daily average, and your grand total of pushups completed.

![Image of Website sketch](cs260_outline_picture.png)

### Key Features
- Secure login over HTTPS
- Ability to select desired amount of pushups to decide
- Other Users completed pushups automatically posted and displayed
- Statistical Tracking:
    -Average amount of pushups over x amount of days
    -Grand Total of pushups completed all time.
- Motivational Quotes and pictures automatically re-generated every time you log in
  
### Technologies

- HTML - Uses correct HTML structure. One page for login and one for tracking.
- CSS - Engaging colors and design for professional looking webpage.
- React - Provides login, tracker display, Goal setting display.
- Service - Backend service with endpoints for:
    login
    retrieving goals and pushups completed
    submitting pushups
    retrieving other users pushup completions
- DB/Login - Store users, goals, and pushups in database. Register and login users. Credentials securely stored in database.
- WebSocket - As each user does pushups, their numbers are broadcast to all other users.

## HTML deliverable
For this deliverable I built out the structure of my application using HTML.

- [x] **HTML pages** -  HTML page that represent: login, create account, user dashboard (for tracking pushups, and setting goals), history/statistics page, settings/edit profile page.
- [x] **Links** - all the links connect the HTML pages as appropriate. Login links to create new account, and to the dashboard. The Dashboard then links to all the phter pages and back.
- [x] **Text** - Every HTML page has text instruction and clear communication of what each aspect of the page is doing.
- [x] **Images** - Images are inlcuded for the motivational section on the dashboard, and the profile picture.
- [x] **DB/Login** - The data base will include login, and account information, as well as pushup and statistic info for each user.
- [x] **WebSocket** - There is a live updating section where other users pushups are posted, as well as a section where motivational quotes and pictures are generated from an external database.

## CSS deliverable
## React deliverable
## Service deliverable
## DB/Login deliverable
## WebSocket deliverable
