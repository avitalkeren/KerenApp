# This is my new App

I have create a GitHub repositories search page using their API.
I have used the folowing Technologies: React, Web Api .Net Core, and Bootstrap.

**please see ClientApp\src\components\Home.js**
1. The user will type the repository he would like to search: 

2. When searching(by pressing a button or using the Enter key) you will perform a request to:
https://api.github.com/search/repositories?q=YOUR_SEARCH_KEYWORD 

3. Render the results as gallery items where each item will show to repository name, avatar of the owner and a bookmark button.

**please see Controllers\BokmarksController.cs**

4. When a user will bookmark a repository you will store the entire result to the user's session(Use ASP.NET session).

**please see C ClientApp\src\components\MyBookmarks.js**

5. (Bonus) - Add a Bookmark screen that will show all the bookmarked repositories.

6. I have upload your project to GitHub


## prerequisite:
1. ASP.NET Core 2.1

## how to run the project:
1. Clone the repository localy
2. In command promt navigate to the project's folder
3. Type: ``` npm install ./ClientApp/ ```
4. Type: ``` dotnet restore  ```
5. Type: ``` dotnet run  ```
6. Open the folowing URL in your browser: https://localhost:5001/
7. enjoy...

## 




